var webpack = require('webpack')
var path = require('path')
var globalConfig = require('./config')

const componentPath = path.resolve(__dirname, '../src')

var conf = {
  stats: {
    assets: false,
    // chunks: false,
    colors: true,
    children: false
  },
  resolve: {
    alias: {
      'doc-components': path.resolve(__dirname, '../docs/src/doc-components'),
      componentPath,
      'prismjs': path.resolve(__dirname, '../docs/src/libs/prism.js'),
      'jquery': path.resolve(__dirname, '../docs/src/libs/js/jquery-1.12.1.js'),
      'fullVue': 'vue/dist/vue.common.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
}

const CSS_MODULE_LOADER = 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]'
conf.module.loaders.push({
  test: /\.css$/,
  include: componentPath,
  loaders: ["style-loader", CSS_MODULE_LOADER]
}, {
  test: /\.css$/,
  exclude: componentPath,
  loaders: ["style-loader", "css-loader"]
}, {
  test: /\.less$/,
  // TODO: 不允许在 components 目录下放 less
  // exclude: componentPath,
  loaders: ["style-loader", "css-loader", "autoprefixer-loader", "less-loader"]
}, {
  test: /\.scss$/,
  include: componentPath,
  loaders: ["style-loader", CSS_MODULE_LOADER, "sass-loader"]
})

conf.module.loaders.push({ 
  test: /\.(png|jpg|gif)$/, 
  loader: 'url-loader?limit=8192'
})

module.exports = conf
