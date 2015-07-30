var path = require("path"); 
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // minifies css

module.exports = {
  entry: {
    bundle: path.join(__dirname, "app", "index.js") // removed "/"s because of how Windows handles them
  },
  output: {
    path: path.join(__dirname, "public", "build"), // removed "/"s because of how Windows handles them
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel?stage=0&optional=runtime" //  what does runtime do?
    }, {
      test: /\.(css|styl)$/, 
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract("style", "css!stylus") // unclear as to what this does exactly
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("/stylesheets/[name].css") // saves minified css to this directory/file
  ],
  stylus: {
    use: [require("nib")(), require("rupture")()]
  }
};