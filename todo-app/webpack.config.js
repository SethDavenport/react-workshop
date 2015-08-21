'use strict';

module.exports = {
  context: __dirname + "/app",
  target: "web",
  debug: true,
  resolve: {
    extensions: ['', '.jsx', '.es6', '.js', '.scss']
  },
  devtool: "source-map",

  entry: {
    javascript: "./app.js",
    html: "./index.html"
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },


  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel-loader"],
    }, {
      test: /\.es6$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel-loader"],
    }, {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    }],
  }
}