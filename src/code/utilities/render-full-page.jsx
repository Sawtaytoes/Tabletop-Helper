import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// Utilities
import { renderStyles } from './style-helper'

const cacheAge = 604800 // 1wk -> 60s x 60m x 24h x 7d

module.exports = function renderFullPage(renderedContent = undefined, state = {}) {
	return '<!DOCTYPE html>' + renderToStaticMarkup(
		<html lang="en">
		<head>
			{/* Site Info */}
			<meta charSet="utf-8" />
			<meta httpEquiv="content-language" content="en-us" />
			<meta name="robots" content="all" />
			<meta name="author" content="Kevin Ghadyani" />
			<meta name="copyright" content="&copy; Kevin Ghadyani &amp; 4-Panel Footprint. All Rights Reserved." />
			<meta name="description" content="Can you master your timing and groove through the expansive song list and challenging patterns?" />
			<meta name="keywords" content="pulsen, pulsen, pulsen game, motion game, dance game, groove game, groove dance, motion dance, dance game, ddr groove, ddr pulsen, pulsen ddr, ddr, ddr motion, dance dance revolution" />

			{/* Cache */}
			{__production && <meta httpEquiv="cache-control" content={`max-age=${cacheAge}`} />}
			{__production && <meta httpEquiv="expires" content={new Date(Date.now() + (cacheAge * 1000))} />}

			{/* Favicons */}
			<link rel="icon" href="/favicons/favicon.png" />
			<link rel="shortcut icon" href="/favicons/favicon.ico" />

			{/* Windows & IE Icons */}
			<meta name="application-name" content="Pulsen Online" />
			<meta name="msapplication-TileColor" content="#ece1f0" />
			<meta name="msapplication-TileImage" content="/favicons/microsoft/ms-tile-icon.png" />
			<meta name="msapplication-tooltip" content="Download DLC, view scores, and check for news about Pulsen" />
			<meta name="msapplication-starturl" content="?pinned=true" />
			<meta name="msapplication-task" content="name=News;action-uri=/news;icon-uri=/favicons/favicon.ico" />
			<meta name="msapplication-task" content="name=Online;action-uri=/download Download;icon-uri=/favicons/favicon.ico" />
			<meta name="msapplication-task" content="name=Online;action-uri=/dlcman Account;icon-uri=/favicons/favicon.ico" />

			{/* iOS Icons */}
			<link rel="apple-touch-icon" href="/favicons/apple-touch/apple-touch-icon-precomposed.png" />
			<link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch/apple-touch-icon-57x57-precomposed.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch/apple-touch-icon-72x72-precomposed.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch/apple-touch-icon-114x114-precomposed.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch/apple-touch-icon-144x144-precomposed.png" />

			{/* DNS Prefetching */}
			<meta httpEquiv="x-dns-prefetch-control" content="on" />
			<link rel="dns-prefetch" href="//www.youtube.com" />
			<link rel="dns-prefetch" href="//store.steampowered.com" />
			<link rel="dns-prefetch" href="//www.humblebundle.com" />

			{/* Styles */}
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,400italic,700" />
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" />
			<style dangerouslySetInnerHTML={{__html: renderStyles()}} />
		</head>
		<body>
			<div id="root" dangerouslySetInnerHTML={{__html: renderedContent}}></div>
			{__production && <script dangerouslySetInnerHTML={{__html: 'window.__INITIAL_STATE__ =' + JSON.stringify(state)}} />}
			<script src="/bundle.js"></script>
		</body>
		</html>
	)
}
