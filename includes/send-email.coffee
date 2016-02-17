module.exports = (reqBody, res) ->
	nodemailer = require 'nodemailer'
	smtpTransport = require 'nodemailer-smtp-transport'

	# Setup SMTP Transport
	if not global.__transporter
		smtpOptions = process.env.SMTP_CREDENTIALS ||
			host: 'localhost'
			port: 1025
			tls: rejectUnauthorized: false
		try smtpOptions = require __includes + 'network-smtp'
		global.__transporter = nodemailer.createTransport smtpTransport smtpOptions

	# Validate Inputs
	validation = [
		'name'
		'email'
		'subject'
		'message'
		'reason'
	]

	validationIssues = ''
	validation.forEach (item) ->
		if not reqBody[item] or reqBody[item] == ''
			validationIssues += ", #{item}"

	if validationIssues != ''
		res.send message: 'Missing:' + validationIssues.substr(1) + '.'
		return

	# Set `To:` Email Address
	switch reqBody.reason
		else mailTo = 'Tabletop Helper Inquiry <me@example.com>'

	# Configure Mail Options
	mailOptions =
		from: 'Pulsen Website <website@example.com>'
		to: mailTo
		replyTo: reqBody.name + ' <' + reqBody.email + '>'
		subject: reqBody.subject
		text: reqBody.name + ' ' + reqBody.email + '\n' + reqBody.message
		html: reqBody.name + ' &lt;' + reqBody.email + '&gt;<br><br>' + reqBody.message

	# Sent Email
	__transporter.sendMail mailOptions, (err, info) ->
		if err
			not __production and console.error(err)
			res.send
				message: err.code == 'ECONNREFUSED' and "Unable to connect to the email server. Please try again." or "Something went very wrong. Please try again."
				success: false
			return

		not __production and console.log "Message sent: " + info.response
		res.send
			message: "Message sent."
			success: true
