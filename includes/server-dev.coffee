bodyParser = require 'body-parser'
express = require 'express'

webpack = require 'webpack'
webpackDevServer = require 'webpack-dev-server'

webpackClientConfig = require __includes + 'webpack-dev-client-config'
webpackServerConfig = require __includes + 'webpack-dev-server-config'

sendEmail = (req, res) ->
	require(__includes + 'send-email')(req.body, res)

module.exports = do ->
	new webpackDevServer webpack(webpackClientConfig), webpackServerConfig
	.listen Number(__port), __hostname, (err, stats) ->
		if err
			throw (console.error)('webpack-dev-server', err)
		console.info '[webpack-dev-server]', __protocol + '://' + __hostname + ':' + __port + '/webpack-dev-server/'

	webpack webpackServerConfig, (err, stats) ->
		throw (console.error)('webpack', err) if err
		console.info '[webpack-server]', stats.toString colors: true

	express()
		.use bodyParser.urlencoded extended: false
		.post __sendEmailUri, sendEmail
		.listen Number(__proxyServerPort), __hostname, (err) ->
			console.error err if err
			console.info '[express-server]', __protocol + '://' + __hostname + ':' + __proxyServerPort
