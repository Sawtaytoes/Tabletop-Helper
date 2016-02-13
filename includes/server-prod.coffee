bodyParser = require 'body-parser'
compression = require 'compression'
express = require 'express'
paths = require __includes + 'paths'

secureServer = (app) ->
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

sendEmail = (req, res) ->
	require(__includes + 'send-email')(req.body, res)

loadSite = (req, res) ->
	require(__base + 'web/backend.js')(req, res)

module.exports = do ->
	app = express()
	__secure and secureServer app

	app
		.use compression()
		.use express.static __base + paths.root.dest
		.use bodyParser.json()
		.use bodyParser.urlencoded extended: false
		.post __sendEmailUri, sendEmail
		.all '*', loadSite
		.listen Number(__port), (err) ->
			console.error err if err
			console.info 'Web Server running on port', __port
