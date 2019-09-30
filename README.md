# NgNetlifyStarter

This project shows how we can use Angular CLI project with Nelity Dev.

## Checkout the tutorial

[![](http://img.youtube.com/vi/TVhApNKX0jA/0.jpg)](http://www.youtube.com/watch?v=TVhApNKX0jA "Getting Started With Angular and Netlify Dev")

## Prereqisites

Install Angular CLI and Zeit Now Globally on the local machine `npm install -g @angular/cli netlify-cli`

## Development server

Run `netlify dev` for a dev server. Navigate to `http://localhost:8888/`. The app will automatically reload if you change any of the source files.

## API (Serverless Functions)

You can create a new file inside the `api` directory. Then to access the function, you can go to `http://localhost:3000/api/{filename}`

## Deploy

Run `netlify deploy --prod` to deploy the project.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
