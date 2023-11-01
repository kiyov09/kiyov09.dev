use axum::{routing::get, Router};
use tower_http::services::ServeDir;

use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(root))
        .route("/blog", get(nothing_yet))
        .route("/projects", get(nothing_yet))
        .route("/contact", get(nothing_yet))
        .fallback(get(not_found))
        .nest_service("/static", ServeDir::new("static"));

    let port =
        std::env::var("PORT").map_or(5001, |p| p.parse::<u16>().expect("PORT must be a number"));
    let addr = SocketAddr::from(([0, 0, 0, 0], port));

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn root() -> templates::Home {
    templates::Home {}
}

async fn nothing_yet() -> templates::NothingYet {
    templates::NothingYet {}
}

async fn not_found() -> templates::NotFound {
    templates::NotFound {}
}

pub mod models {
    pub struct Link {
        pub label: &'static str,
        pub href: &'static str,
    }

    pub struct Social {
        pub url: &'static str,
        pub icon: &'static str,
    }
}

pub mod templates {
    use crate::models;
    use askama::Template;

    pub const LINKS: [models::Link; 4] = [
        models::Link {
            label: "Home",
            href: "/",
        },
        models::Link {
            label: "Blog",
            href: "/blog",
        },
        models::Link {
            label: "Projects",
            href: "/projects",
        },
        models::Link {
            label: "Contact",
            href: "/contact",
        },
    ];

    pub const SOCIALS: [models::Social; 3] = [
        models::Social {
            url: "https://github.com/kiyov09",
            icon: "/static/icons/github.svg",
        },
        models::Social {
            url: "https://twitter.com/kiyov09",
            icon: "/static/icons/twitter_x.svg",
        },
        models::Social {
            url: "https://linkedin.com/in/kiyov09",
            icon: "/static/icons/linkedin.svg",
        },
    ];

    #[derive(Template)]
    #[template(path = "index.html")]
    pub struct Home {}

    #[derive(Template)]
    #[template(path = "nothing_yet.html")]
    pub struct NothingYet;

    #[derive(Template)]
    #[template(path = "404.html")]
    pub struct NotFound;
}
