// import qs from 'qs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import createMemoryHistory from 'history/lib/createMemoryHistory'

// Polyfills
import './utilities/polyfills'
import renderFullPage from './utilities/render-full-page'

// Reducers & Routes
import rootReducer from './reducers'
import routes from './routes'

/*
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
module.exports = function render(req, res) {
	// console.log(res.body.state);
	console.log(req.body.state);
	const initialState = req.body && req.body.state ? JSON.parse(req.body.state) : {}
	// const params = qs.parse(req.query)
	// const numberOfPlayers = parseInt(params.numberOfPlayers, 10) || 0

	const history = createMemoryHistory()
	const store = compose()(createStore)(rootReducer, initialState)

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
			const renderedContent = renderToString(
				<Provider store={store} history={history}>
					<RoutingContext {...renderProps} />
				</Provider>
			)

			const finalState = store.getState()
			const renderedPage = renderFullPage(renderedContent, finalState)
			res.status(200).send(renderedPage)
		} else {
			res.status(404).send('Not Found')
		}
	})
}
