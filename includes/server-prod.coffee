bodyParser = require 'body-parser'
compression = require 'compression'
express = require 'express'
slashes = require 'connect-slashes'
fs = require 'fs'
paths = require __includes + 'paths'

helmet = require 'helmet'
secureServer = (app) ->
	https = require 'https'
	enforce = require 'express-sslify'

	app
	.use enforce.HTTPS trustProtoHeader: true

	return https.createServer
		cert: fs.readFileSync('./conf/cert.pem')
		key: fs.readFileSync('./conf/key.pem')
	, app

sendEmail = (req, res) ->
	require(__includes + 'send-email')(req.body, res)

loadSite = (req, res) ->
	require(__base + 'web/backend.js')(req, res)

module.exports = do ->
	app = express()

	app
	.use express.static __base + paths.root.dest, redirect: false
	.use slashes false
	.use helmet()
	#.use helmet.csp
	#	directives:
	#		defaultSrc: ['self']
	#		scriptSrc: ['self', 'www.google-analytics.com', 'ajax.googleapis.com']
	#		sandbox: ['allow-forms', 'allow-scripts']
	#	reportOnly: false
	#	setAllHeaders: false
	.use compression()
	.use bodyParser.json()
	.use bodyParser.urlencoded extended: false
	.disable 'x-powered-by'
	.post __sendEmailUri, sendEmail
	.all '*', loadSite

	server = if __secure then secureServer app else app

	server
	.listen Number(__port), (err) ->
		console.error err if err
		console.info 'Web Server running on port', __port
