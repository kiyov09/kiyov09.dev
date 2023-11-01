use crate::models;
use askama::Template;

// TODO: Extract to a file
pub const LINKS: [models::Link; 3] = [
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
];

// TODO: Extract to a file
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
