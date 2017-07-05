var path = require('path');

var pagesPath = path.resolve(__dirname, '../pages');
var pagesBuiltPath = path.resolve(__dirname, '../dist/pages');

const config = {
    env : process.env.NODE_ENV || 'development'
}

config.port = 8088
config.isMac = /^darwin/.test(process.platform)

config.mpa_pagesPath = pagesPath
config.mpa_pagesBuiltPath = pagesBuiltPath
// config.appBootstrap = path.resolve(__dirname, '../app/test.js')
config.appBootstrap = path.resolve(__dirname, '../app/main.js')

config.globalProvide = {
    React: 'react',
    Demo: 'demo',
    DemoGroup: 'demo-group'
}
config.globalDefine = {
    'process.env'  : {
        'NODE_ENV' : JSON.stringify(config.env)
    },
    '__DEV__'      : config.env === 'development',
    '__PROD__'     : config.env === 'production',
    '__TEST__'     : config.env === 'test',
    '__DEBUG__'    : config.env === 'development',
    '__COVERAGE__' : config.env === 'test'
}

module.exports = config