# TailwindCSS

tw-build:
  npx tailwindcss -i input.css -o ./static/output.css --minify

tw-dev:
  npx tailwindcss -i input.css -o ./static/output.css --watch

# Server

build: tw-build
  cargo build

run:
  cargo run
