import React, { Component } from 'react'
import { Router, Route, Redirect, Link } from 'react-router'
import { Provider } from 'react-redux'

// Store and Routes
import { history, store } from './store'
import routes from './routes'

// Nav Items
import navItems from './content/nav-items'

export default class Root extends Component {
	constructor() {
		super()

		// this.state = {
		// 	path: ''
		// }

		// this.storeUnsubscribe = store.subscribe(this.handleLocationChange.bind(this))
	}

	componentDidMount() {
		// this.handleLocationChange() // Initial call so meta information gets updated
	}

	componentWillUnmount() {
		// this.storeUnsubscribe()
	}

	handleLocationChange() {
		if (this.state.path !== store.getState().routing.path) {
			this.state.path = store.getState().routing.path

			this.loopThroughNavItems(navItems)
			this.scrollToTop()
		}
	}

	scrollToTop() {
		window.scroll(0, 0)
	}

	changePageMetaOnLinkMatch(item) {
		let re = new RegExp('(' + item.to + ')'),
			linkMatch = re.test(store.getState().routing.path)
		if (linkMatch) {
			document.title = item.name + ' – Pulsen'
			document.querySelector('meta[name=description]').content = item.description
		}

		return linkMatch
	}

	// Change document title on route change
	loopThroughNavItems(items) {
		return items.some((item) => {
			if (item.subitems) {
				return this.loopThroughNavItems(item.subitems)
			}

			return this.changePageMetaOnLinkMatch(item)
		})
	}

	render() { return (
		<Provider store={store}>
			<Router history={history} routes={routes} />
		</Provider>
	)}
}
