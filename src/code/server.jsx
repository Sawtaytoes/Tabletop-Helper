import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import { createMemoryHistory } from 'history/lib/createMemoryHistory'

// Polyfills
import './utilities/polyfills'

// Reducers & Routes
import rootReducer from './reducers'
import routes from './routes'

/*
 * Our html template file
 * @param {String} renderedContent
 * @param initial state of the store, so that the client can be hydrated with the same state as the server
 * @param head - optional arguments to be placed into the head
 */
function renderFullPage(renderedContent, initialState) {
	return '<!doctype html>' + renderToStaticMarkup(
		<html lang="en">
		<head>
				<meta charset="utf-8" />

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
			<script>
				window.__INITIAL_STATE__ = {JSON.stringify(initialState)}
			</script>
			<script src="/bundle.js"></script>
		</body>
		</html>
	)
}

/*
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
module.exports = function render(req, res) {
	// const history = createMemoryHistory()
	const store = compose()(createStore)(rootReducer)

	/*
	 * From the react-router docs:
	 *
	 * This function is to be used for server-side rendering. It matches a set of routes to
	 * a location, without rendering, and calls a callback(error, redirectLocation, renderProps)
	 * when it's done.
	 *
	 * The function will create a `history` for you, passing additional `options` to create it.
	 * These options can include `basename` to control the base name for URLs, as well as the pair
	 * of `parseQueryString` and `stringifyQuery` to control query string parsing and serializing.
	 * You can also pass in an already instantiated `history` object, which can be constructured
	 * however you like.
	 *
	 * The three arguments to the callback function you pass to `match` are:
	 * - error: A javascript Error object if an error occured, `undefined` otherwise.
	 * - redirectLocation: A `Location` object if the route is a redirect, `undefined` otherwise
	 * - renderProps: The props you should pass to the routing context if the route matched, `undefined`
	 *                otherwise.
	 * If all three parameters are `undefined`, this means that there was no route found matching the
	 * given location.
	 */
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).send(error.message)
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps) {
			const initialState = store.getState()

			const renderedContent = renderToString(
				<Provider store={store}>
					<RoutingContext {...renderProps} />
				</Provider>
			)

			const renderedPage = renderFullPage(renderedContent, initialState)
			res.status(200).send(renderedPage)
		} else {
			res.status(404).send('Not Found')
		}
	})
}
