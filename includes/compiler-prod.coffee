webpack = require 'webpack'

webpackClientConfig = require __includes + 'webpack-prod-client-config'
webpackServerConfig = require __includes + 'webpack-prod-server-config'

module.exports = do ->
	webpack webpackServerConfig, (err, stats) ->
		throw (console.error)('webpack', err) if err
		console.info '[webpack-server]', stats.toString colors: true

	webpack webpackClientConfig, (err, stats) ->
		throw (console.error)('webpack', err) if err
		console.info '[webpack-client]', stats.toString colors: true
