var path = require("path"); 
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin"); 

module.exports = {
  entry: {
    bundle: path.join(__dirname, "app", "index.js")
  },
  output: {
    path: path.join(__dirname, "public", "build"),
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel?stage=0&optional=runtime"
    }, {
      test: /\.(css|styl)$/, 
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract("style", "css!stylus")
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("/stylesheets/[name].css")
  ],
  stylus: {
    use: [require("nib")(), require("rupture")()]
  }
};