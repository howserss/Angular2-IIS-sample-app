# NoteApp2

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

This was tested in IIS7.5 and with ng serve using Chrome and IE11.

## WEB SERVER STUFF
(ng serve) http://localhost:4200/#/home/5 (the 5 is just a parameter of the route)

(IIS) with a virtual called noteapp http://localhost/noteapp/#/home/5.
The virtual which points to dist (generated with ng build) is named noteapp.  You could call it anyhting you like (no dependency on name).


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
