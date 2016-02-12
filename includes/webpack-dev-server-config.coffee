require 'babel-core/register'
paths = require __includes + 'paths'
webpackClientConfig = require __includes + 'webpack-dev-client-config'
indexHtml = require(__base + 'src/code/utilities/render-full-page.jsx')()

renderIndex = (req, res) ->
	if req.headers.accept.indexOf('html') != -1
		res.send(indexHtml)

webpackServerConfig =
	contentBase: './' + paths.root.dest
	historyApiFallback: true
	hot: true
	https: __secure
	publicPath: webpackClientConfig.output.publicPath
	stats: colors: true
	proxy: {}

webpackServerConfig.proxy['/'] =
	secure: __secure
	bypass: renderIndex

webpackServerConfig.proxy[__sendEmailUri] =
	target: __protocol + '://' + __proxyServerHostname + ':' + __proxyServerPort
	secure: __secure
	bypass: renderIndex

module.exports = webpackServerConfig
