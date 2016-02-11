global.__base = __dirname + '/'
global.__includes = __base + '/includes/'

global.__production = true||process.env.NODE_ENV == 'production'

try global.__production = require __includes + 'node-env'

global.__protocol = process.env.PROTOCOL || 'http'
global.__hostname = process.env.HOSTNAME || 'localhost'
global.__port = process.env.PORT || 37453

try global.__protocol = require __includes + 'network-protocol'
try global.__hostname = require __includes + 'network-hostname'
try global.__port = require __includes + 'network-port'

global.__secure = __protocol == 'https'
global.__proxyServerHostname = __hostname == '0.0.0.0' and 'localhost' or __hostname
global.__proxyServerPort = __port + 1

global.__sendEmailUri = '/contact/send'

# Set Running Mode
runningMode = process.argv[2]
runCompiler = !runningMode || runningMode == 'compile'
runServer = !runningMode || runningMode == 'server'

# Load Required
bodyParser = require 'body-parser'
compression = require 'compression'
express = require 'express'
paths = require __includes + 'paths'

webpack = require 'webpack'
webpackConfig = require __includes + 'webpack-node-config'

# Setup Functions
runServer && sendEmail = (req, res) ->
	require(__includes + 'send-email')(req.body, res)

# Start Webserver(s)
if __production
	runCompiler and webpack webpackConfig, (err, stats) ->
		throw (console.error)('webpack', err) if err
		console.info '[webpack]', stats.toString colors: true

	unless runServer
		return

	app = express()

	if __secure
		express_enforces_ssl = require 'express-enforces-ssl'
		helmet = require 'helmet'

		app
			.enable 'trust proxy'
			.use express_enforces_ssl()
			.use helmet()
			.use helmet.hidePoweredBy()
			# .use helmet.csp
			# 	directives:
			# 		defaultSrc: ['self']
			# 		scriptSrc: ['self', 'www.google-analytics.com', 'ajax.googleapis.com']
			# 		sandbox: ['allow-forms', 'allow-scripts']
			# 	reportOnly: false
			# 	setAllHeaders: false

	app
		.use compression()
		.use express.static(__base + paths.root.dest)
		.use bodyParser.urlencoded extended: false
		.post __sendEmailUri, sendEmail
		.all '*', (req, res) ->
			viewPath = require('path').resolve './web/bundle.js'
			require(viewPath)(req, res)
			# res.sendFile(__base + paths.root.dest + 'index.html')
		.listen Number(__port), ->
			console.info 'Web Server running on port', __port

else # Development
	webpackDevServer = require 'webpack-dev-server'
	webpackDevServerConfig = require __includes + 'webpack-dev-server-config'

	new webpackDevServer webpack(webpackConfig), webpackDevServerConfig
	.listen Number(__port), __hostname, (err, stats) ->
		if err
			throw (console.error)('webpack-dev-server', err)
		console.info '[webpack-dev-server]', __protocol + '://' + __hostname + ':' + __port + '/webpack-dev-server/'

	express()
		.use bodyParser.urlencoded extended: false
		.post __sendEmailUri, sendEmail
		.listen Number(__proxyServerPort), __hostname, (err) ->
			console.error err if err
			console.info '[express-server]', __protocol + '://' + __hostname + ':' + __proxyServerPort
