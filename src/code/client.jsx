import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Redirect, Link } from 'react-router'
import { Provider } from 'react-redux'

// Polyfills
import 'utilities/polyfills'

// Store and Routes
import { history, store } from 'utilities/store'
import routes from './routes'

// Router
render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>
, document.getElementById('root'))
