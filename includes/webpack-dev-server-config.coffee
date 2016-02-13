require 'babel-core/register'
paths = require __includes + 'paths'
webpackClientConfig = require __includes + 'webpack-dev-client-config'

webpackServerConfig =
	contentBase: './' + paths.root.dest
	historyApiFallback: true
	hot: true
	https: __secure
	publicPath: webpackClientConfig.output.publicPath
	stats: colors: true
	proxy: {}

webpackServerConfig.proxy['*'] =
	target: __protocol + '://' + __proxyServerHostname + ':' + __proxyServerPort
	secure: __secure

module.exports = webpackServerConfig
