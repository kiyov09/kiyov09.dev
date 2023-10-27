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
        .nest_service("/static", ServeDir::new("static"));

    let addr = SocketAddr::from(([0, 0, 0, 0], 5001));

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

pub mod models {
    pub struct Link {
        pub label: &'static str,
        pub href: &'static str,
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

    #[derive(Template)]
    #[template(path = "index.html")]
    pub struct Home;

    #[derive(Template)]
    #[template(path = "nothing_yet.html")]
    pub struct NothingYet;
}
