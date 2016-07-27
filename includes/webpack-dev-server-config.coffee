require 'babel-core/register'
fs = require 'fs'
paths = require __includes + 'paths'
webpackClientConfig = require __includes + 'webpack-dev-client-config'

webpackServerConfig =
	contentBase: './' + paths.root.dest
	historyApiFallback: true
	hot: true
	https: __secure
	cert: __secure and fs.readFileSync('./conf/cert.pem')
	key: __secure and fs.readFileSync('./conf/key.pem')
	progress: true
	publicPath: webpackClientConfig.output.publicPath
	stats: colors: true
	proxy: {}

webpackServerConfig.proxy['*'] =
	target: 'http://' + __proxyServerHostname + ':' + __proxyServerPort

module.exports = webpackServerConfig
