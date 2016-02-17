bodyParser = require 'body-parser'
express = require 'express'
paths = require __includes + 'paths'

webpack = require 'webpack'
webpackDevServer = require 'webpack-dev-server'

webpackClientConfig = require __includes + 'webpack-dev-client-config'
webpackServerConfig = require __includes + 'webpack-dev-server-config'

onBuild = (taskName, err, stats) ->
	throw (console.error)('webpack', err) if err
	console.info taskName, __protocol + '://' + __hostname + ':' + __port

sendEmail = (req, res) ->
	require(__includes + 'send-email')(req.body, res)

loadSite = (req, res) ->
	res.end(require(__base + 'src/code/utilities/render-full-page.jsx')())

module.exports = do ->
	new webpackDevServer webpack(webpackClientConfig), webpackServerConfig
		.listen Number(__port), __hostname, onBuild.bind null, '[webpack-dev-server]'

	express()
		.use express.static __base + paths.root.dest
		.use bodyParser.json()
		.use bodyParser.urlencoded extended: false
		.post __sendEmailUri, sendEmail
		.all '*', loadSite
		.listen Number(__proxyServerPort), __hostname, (err) ->
			console.error err if err
			console.info '[express-server]', __protocol + '://' + __hostname + ':' + __proxyServerPort
