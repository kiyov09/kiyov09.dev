use axum::{routing::get, Router};

pub fn routes() -> Router {
    Router::new()
        .route("/", get(handlers::index))
        .route("/:slug", get(handlers::show))
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
        Post::all()
            .await
            .into_iter()
            .find(|post| post.slug == _slug)
            .map(|post| templates::Show { post })
            .expect("whatever")
    }
}

mod models {
    use std::{fmt::Display, str::FromStr};

    use tokio::fs::read_dir;

    #[derive(Debug, Clone)]
    pub struct Tag(String);

    impl From<&str> for Tag {
        fn from(s: &str) -> Self {
            Self(s.to_string())
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
        pub content: String,
    }

    impl Post {
        pub async fn all() -> Vec<Self> {
            let mut dir = read_dir("./static/posts").await.expect("whatever");

            let mut posts = vec![];
            while let Some(entry) = dir.next_entry().await.expect("whatever") {
                let content = tokio::fs::read_to_string(entry.path())
                    .await
                    .expect("whatever");

                posts.push(Self {
                    slug: entry.file_name().to_str().unwrap().to_string(),
                    title: "This is a post".to_string(),
                    // Intentionally long summary to test the truncation
                    summary: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia.".to_string(),
                    tags: vec!["tag1".into(), "tag2".into()],
                    content,
                })
            }

            posts
        }
    }
}

mod templates {
    use askama::Template;

    use crate::posts::models::Post;

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
