import React, { Component } from 'react'
import { Router, Route, Redirect, Link } from 'react-router'
import { Provider } from 'react-redux'

// Store and Routes
import { history, store } from './store'
import routes from './routes'

// Nav Items
import navItems from './content/nav-items'

export default class Root extends Component { render() { return (
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>
)}}
