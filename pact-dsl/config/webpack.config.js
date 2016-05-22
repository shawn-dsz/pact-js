/* eslint-disable */
var path    = require('path');
var webpack = require('webpack');

var DIST = path.resolve(__dirname, '../dist');
var APP  = path.resolve(__dirname, '../src');

module.exports = {
  entry: [
    path.resolve(APP, 'pact.js')
  ],
  output: {
    path: DIST,
    library: 'Pact',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'pact-dsl.js'
  },
  target: 'web',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: APP,
        exclude: /node_modules/,
        query: { presets: ['es2015'] }
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'source-map'
}