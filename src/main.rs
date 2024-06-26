use axum::ServiceExt;
use axum::{routing::get, Router};
use tower::layer::Layer;
use tower_http::normalize_path::NormalizePathLayer;
use tower_http::services::ServeDir;

use std::net::SocketAddr;

mod models;
mod posts;
mod templates;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(root))
        .route("/projects", get(nothing_yet))
        .nest("/posts", posts::routes())
        .fallback(get(not_found))
        .nest_service("/static", ServeDir::new("static"));

    // To allow trailing slashes. TODO: Build my own to learn how it works.
    let app = NormalizePathLayer::trim_trailing_slash().layer(app);

    let port =
        std::env::var("PORT").map_or(5001, |p| p.parse::<u16>().expect("PORT must be a number"));
    let addr = SocketAddr::from(([0, 0, 0, 0], port));

    println!("Listening on {}", addr);
    println!("Press Ctrl+C to stop the server");

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
