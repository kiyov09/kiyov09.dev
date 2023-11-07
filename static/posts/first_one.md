---
title: This is the first post
date: 2021-01-01
author: Enrique Mejías <kiyov90@gmail.com>
tags:
  - first
  - post
  - ever
---

> > > Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.

---

> Disclaimer: I'm testing this out, so this is not a real post.

Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.

## A quick list

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
- Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua

## Now numbered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua

## Code

```rust
fn main() {
    println!("Hello, world!");
}


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
```

Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
