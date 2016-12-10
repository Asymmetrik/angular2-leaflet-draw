# @asymmetrik/angular2-leaflet-draw

[![Build Status][travis-image]][travis-url]

> Leaflet Draw extension to the @asymmetrik/angular2-leaflet package for Angular 2
> Provides Leaflet Draw integration into Angular 2 projects. Compatible with Leaflet v0.7.x and v1.0.x.

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

## Install
To get started, ensure that Node and NPM are installed.
* Node and NPM (https://nodejs.org)
* Gulp (https://gulpjs.org)

Use npm to install gulp globally:
```
npm install -g gulp
```

Next, clone the repository and then install the npm packages in the project directory: 
```
npm install
```

At this point, you should be ready to build the project.


## Usage
This project uses Gulp as a build framework. There are two primary tasks: build and dev, which build distribution artifacts and run the development server respecitvely. 

### Building Artifacts for Distribution
To build the bundles run:

```
gulp build
```

This task will run TSLint over the source Typescript to ensure code quality and consistency. Then, it runs the Typescript compiler to generate ES5 Javascript. Finally, it uses Rollup to bundle the generated Javascript into and then uses Rollup to bundle the Javascript code into a distributable CommonJS format.

### Run the Demo for Development
To run the demo using Webpack dev server, run
```
gulp dev
```

This task will run Webpack dev server, watch all of the files in the project for changes, and make a server available where you can run the demo application. Gulp watch will monitor for changes to Typescript source and re-run the TSLint.

## API


## Contribute
PRs accepted. If you are part of Asymmetrik, please make contributions on feature branches off of the ```develop``` branch. If you are outside of Asymmetrik, please fork our repo to make contributions.

## License
See LICENSE in repository for details.

[travis-url]: https://travis-ci.org/Asymmetrik/angular2-leaflet-draw/
[travis-image]: https://travis-ci.org/Asymmetrik/angular2-leaflet-draw.svg
