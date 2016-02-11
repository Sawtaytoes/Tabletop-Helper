paths = require __includes + 'paths'
webpackConfig = require __includes + 'webpack-config'

webpackDevServerConfig =
	contentBase: './' + paths.root.dest
	historyApiFallback: true
	hot: true
	https: __secure
	publicPath: webpackConfig.output.publicPath
	stats: colors: true
	proxy: {}

webpackDevServerConfig.proxy[__sendEmailUri] =
	target: __protocol + '://' + __proxyServerHostname + ':' + __proxyServerPort
	secure: __secure
	bypass: (req, res, proxyOptions) ->
		if req.headers.accept.indexOf('html') != -1
			return './index.html'

module.exports = webpackDevServerConfig
