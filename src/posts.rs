use axum::{routing::get, Router};

pub fn routes() -> Router {
    Router::new()
        .route("/", get(handlers::index))
        .route("/:slug", get(handlers::show))
        .route("/tags/:tag", get(handlers::tag))
}

mod handlers {
    use axum::extract::Path;

    use crate::posts::models::Post;
    use crate::posts::templates;

    pub async fn index() -> templates::Index {
        templates::Index {
            posts: Post::all().await,
        }
    }

    pub async fn show(Path(_slug): Path<String>) -> templates::Show {
        Post::find(&_slug)
            .await
            .map(|post| templates::Show { post })
            .expect("whatever")
    }

    pub async fn tag(Path(tag): Path<String>) -> templates::Index {
        templates::Index {
            posts: Post::tagged(&tag.into()).await,
        }
    }
}

mod models {
    use gray_matter::{engine::YAML, Matter};
    use serde::Deserialize;
    use std::{fmt::Display, str::FromStr};
    use tokio::fs::read_dir;

    #[derive(Debug, Clone, PartialEq, Eq)]
    pub struct Tag(String);

    impl<S: Into<String>> From<S> for Tag {
        fn from(s: S) -> Self {
            Self(s.into())
        }
    }

    impl FromStr for Tag {
        type Err = ();

        fn from_str(s: &str) -> Result<Self, Self::Err> {
            Ok(Self(s.to_string()))
        }
    }

    impl Display for Tag {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "#{}", self.0)
        }
    }

    #[derive(Debug, Clone)]
    pub struct Post {
        pub slug: String,
        pub title: String,
        pub summary: String,
        pub tags: Vec<Tag>,
        pub date: String, // Use chrono?
        pub author: String,
        pub content: String,
    }

    impl Post {
        pub async fn all() -> Vec<Self> {
            let mut dir = read_dir("./static/posts").await.expect("whatever");

            let mut posts = vec![];
            while let Some(entry) = dir.next_entry().await.expect("whatever") {
                // TODO: A lot of unwraps here, need to handle errors

                // Skip directories
                if !entry.file_type().await.expect("whatever").is_file() {
                    continue;
                }

                // Skip non-markdown files
                if entry.path().extension().unwrap() != "md" {
                    continue;
                }

                let content = tokio::fs::read_to_string(entry.path())
                    .await
                    .expect("whatever");

                let slug = entry
                    .path()
                    .file_stem()
                    .unwrap()
                    .to_str()
                    .unwrap()
                    .to_string();

                posts.push(Self::from_file_content(slug, &content));
            }

            posts
        }

        fn from_file_content(slug: String, file_content: &str) -> Self {
            let matter = Matter::<YAML>::new();

            #[derive(Deserialize, Debug)]
            struct FrontMatterData {
                title: String,
                date: String,
                author: String,
                tags: Vec<String>,
            }

            let result_with_struct = matter
                .parse_with_struct::<FrontMatterData>(file_content)
                .unwrap();

            let excerpt = result_with_struct.excerpt.unwrap_or_default();

            let content = result_with_struct.content.trim_start_matches(&excerpt);
            let content = content.trim_start_matches(['-', '\n']);

            Self {
                slug,
                title: result_with_struct.data.title,
                summary: excerpt.to_string(),
                tags: result_with_struct
                    .data
                    .tags
                    .iter()
                    .map(|tag| Tag(tag.to_string()))
                    .collect(),
                date: result_with_struct.data.date,
                author: result_with_struct.data.author,
                content: content.to_string(),
            }
        }

        pub async fn find(slug: &str) -> Option<Self> {
            Self::all().await.into_iter().find(|post| post.slug == slug)
        }

        pub fn tags(&self) -> Vec<Tag> {
            self.tags.clone()
        }

        pub async fn tagged(tag: &Tag) -> Vec<Self> {
            Self::all()
                .await
                .into_iter()
                .filter(|post| post.tags().contains(tag))
                .collect()
        }
    }
}

mod templates {
    use askama::Template;

    use crate::posts::models::Post;

    mod filters {
        use comrak::plugins::syntect::SyntectAdapter;
        use comrak::{markdown_to_html_with_plugins, ComrakOptions, ComrakPlugins};

        pub fn markdown_custom(content: &str) -> askama::Result<String> {
            // comrak stuff
            let options = ComrakOptions::default();

            // TODO: Find/make a gruvbox theme
            let adapter = SyntectAdapter::new("base16-eighties.dark");
            let mut plugins = ComrakPlugins::default();

            plugins.render.codefence_syntax_highlighter = Some(&adapter);

            // Actually convert the markdown to HTML
            let html = markdown_to_html_with_plugins(content, &options, &plugins);

            Ok(html)
        }
    }

    #[derive(Template)]
    #[template(path = "posts/index.html")]
    pub struct Index {
        pub posts: Vec<Post>,
    }

    #[derive(Template)]
    #[template(path = "posts/show.html")]
    pub struct Show {
        pub post: Post,
    }
}
