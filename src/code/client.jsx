import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Redirect, Link } from 'react-router'
import { Provider } from 'react-redux'

// Polyfills
import './utilities/polyfills'

// Store and Routes
import { history, store } from './store'
import routes from './routes'

// Nav Items
import navItems from './content/nav-items'

// Router
render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>
, document.getElementById('root'))

// Remove main.css as it's no longer needed
document.getElementById('css').remove()
