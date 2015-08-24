# The ReactJS Toolchain

In this section, we'll describe the tools that we'll be using for the rest of the course.

## npm

[npm](http://npmjs.org) is a package manager for JavaScript which allows easy access to thousands of 3rd-party JS libraries and tools.

## JSX and ECMAScript 6

We'll be using an approach to ReactJS that uses two extended syntaxes for JavaScript which are widely used in the
React community. While these are not strictly necessary, they provide significant benefits for code organization 
and readability. 

The first, [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html), provides a convenient
shorthand for composing React UI components in an XML-like way.

The second, ECMAScript 6 (or ES6), is the latest iteration of the JavaScript language. It has a formal module
system and several other syntax enhancements we'll see during the rest of the course.

These languages will be integrated into our setup using the [babel](https://babeljs.io/) transpiler.

## Webpack

[webpack](http://webpack.github.io) is a code bundling tool for web technologies. It simplifies the
web development workflow by intelligently:

* transpiling ES6 and JSX code
* selecting relevant JS files from `npm` packages
* concatenating and optionally minifying the resulting files
* optionally generating source maps.

Webpack lets you define an "entry point", typically your top-level `app.js` file.  Once you have done this, webpack traverses your codebase and its dependencies by following `require` or `import` statements, generating a concatenated bundle of web assets that you can include in your `index.html`. 

It does this using the concept of `loaders`: loaders are webpack plugins that specify how to include a variety
of file types into your bundle, from ES6 and JSX to CSS and its preprocessors (SCSS, Less, etc).

## Webpack-dev-server

[webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html) is a convenient tool for developers
that spins up an http server for quickly testing your app. In addition to watching source files for changes, it
also has plugins for hot-reloading code changes into the browser.
