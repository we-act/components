var webpack = require('webpack');
var fs = require('fs-extra');
var merge = require("merge");
var path = require('path');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var basicWebpackConfig = require('./basic')
var globalConfig = require('./config')
var html = require('html-webpack-plugin')

const {__PROD__, DEMO} = globalConfig.globalDefine
const buildDir = path.resolve(__dirname, '../dist/docs')

var thisConfig = merge.recursive(true, basicWebpackConfig, {
    output: {
        path: buildDir,
        publicPath: '.',
        filename: '[name].js'
    }
})

var port = 8092;
var hotDev = [
  'webpack-dev-server/client?http://localhost:' + port
]
if(!__PROD__) {
  var setIterm2Badge = require('set-iterm2-badge');
  setIterm2Badge('components docs ' + port)
}
else {
  fs.emptyDirSync(buildDir)
}

const entry = [
  path.resolve(__dirname, '../docs/main.js')
]



if(!__PROD__) {
  thisConfig.entry = {main: entry.concat(hotDev)}
  thisConfig.output = {
    filename: "./[name].js"
  }
}
else {
  thisConfig.entry = {main: entry}
}

thisConfig.plugins = [
    new webpack.DefinePlugin(globalConfig.globalDefine),
    new webpack.ProvidePlugin(globalConfig.globalProvide),
    // new ExtractTextPlugin("[name].css", {
    //     allChunks: true
    // })
    new html({
        filename: 'index.html',
        template: './docs/index.html',
        minify: {
          collapseWhitespace: true
        }
    }),
    new webpack.HotModuleReplacementPlugin()
]

module.exports = thisConfig