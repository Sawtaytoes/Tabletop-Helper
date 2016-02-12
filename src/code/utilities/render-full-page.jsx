import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

/*
 * Our html template file
 * @param {String} renderedContent
 * @param initial state of the store, so that the client can be hydrated with the same state as the server
 * @param head - optional arguments to be placed into the head
 */
module.exports = function renderFullPage(renderedContent = '', state = {}) {
	return '<!DOCTYPE html>' + renderToStaticMarkup(
		<html lang="en">
		<head>
			<meta charSet="utf-8" />

			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="author" content="Kevin Ghadyani" />
			<meta name="copyright" content="Copyright Kevin Ghadyani. All Rights Reserved." />
			<meta name="description" content="A mechanism for randomizing Smash Up deck configurations" />
			<meta name="keywords" content="" />

			<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,700,400italic" />
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" />
			<link rel="stylesheet" href="/css/main.css" />
		</head>
		<body>
			<div id="root" dangerouslySetInnerHTML={{__html: renderedContent}} />
			<script dangerouslySetInnerHTML={{__html: 'window.__INITIAL_STATE__ =' + JSON.stringify(state)}} />
			<script src="/bundle.js"></script>
		</body>
		</html>
	)
}
