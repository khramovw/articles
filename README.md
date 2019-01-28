# JSON server

To use install `npm install -g json-server` .
Use a `db.json` file with some data or create new `db.json` file.

Start JSON Server `json-server --watch db.json -p 4400`.

To change the default port `:3000` use flag `-p`.

Now if you go to http://localhost:4400/users, you'll get:

`[{ "id": 1, "name": "Test", "email": "test@test.com", "password": "123456" }]`


Get a full fake REST API with zero coding in less than 30 seconds (seriously)
`https://github.com/typicode/json-server`.

# Git Pages
https://khramovw.github.io/articles/

# OpenCinema

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
