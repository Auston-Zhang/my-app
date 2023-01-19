# MyApp

This project is for internal use only.

Auston Zhang referred to Angular documentation and followed tutorial steps to build the app that fits the requirements.

This project was first generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.
Based on the code and requirements, built this simpler app.

## Requirements
You may need 4 things to run it locally:

1. Node.js - Angular requires an [active LTS or maintenance LTS version](https://nodejs.org/about/releases) of Node.js.. You may run `node -v` in terminal window to check the version.
2. npm package manager, you may use `npm -v` to check the npm manager version. You may refer to [This Page](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to get npm.
3. Install the Angular CLI by the command: `npm install -g @angular/cli`
4. clone this repo and run `ng serve` to see it running locally

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

or

Run `ng test --no-watch --code-coverage` to see the test coverage.

Attaching the most recent report as an example here:

18 01 2023 19:04:01.610:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
18 01 2023 19:04:01.617:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
18 01 2023 19:04:01.626:INFO [launcher]: Starting browser Chrome
18 01 2023 19:04:03.665:INFO [Chrome 108.0.0.0 (Windows 10)]: Connected on socket BpdNHSWer5TjTIccAAAB with id 81930146
Chrome 108.0.0.0 (Windows 10): Executed 7 of 7 SUCCESS (0.42 secs / 0.324 secs)
TOTAL: 7 SUCCESS

=============================== Coverage summary ===============================
Statements   : 100% ( 8/8 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 3/3 )
Lines        : 100% ( 6/6 )

## Responsive Check
Please drag the browser window to see the effect. If you make the window width less than `270px`, you should see the sizes of text and button become smaller.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

