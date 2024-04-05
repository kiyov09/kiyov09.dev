# TailwindCSS

tw-build:
  npx tailwindcss -i input.css -o ./static/output.css --minify

tw-dev:
  npx tailwindcss -i input.css -o ./static/output.css --watch

# Server

build: tw-build
  cargo build

build-release: tw-build
  cargo build --release

run:
  cargo run

# Deployment
# INFO: this uses fly.io

deploy: build-release
  flyctl deploy
