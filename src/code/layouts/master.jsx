import React, { Component } from 'react'
import GoogleAnalytics from 'react-g-analytics'
import { connect } from 'react-redux'

// Components
import Header from './../components/header'
import Footer from './../components/footer'

// Styles
import 'normalize.css'
import './../../assets/styl/global'
import './../../assets/styl/site'

class Master extends Component {
	constructor(props) {
		super()

		// this.navItemsClass = {
		// 	open: 'is-open',
		// 	closed: ''
		// }

		// this.state = {
		// 	headerNav: props.state.headerNav,
		// 	menuIsOpen: props.state.headerNav.menuIsOpen || ''
		// }

		// this.bodyClickSelector = '.js-click-body'

		// this.store = props.state.store
		// this.storeUnsubscribe = this.store.subscribe(this.handleStateChange.bind(this))
	}

	componentDidMount() {
		// this.handleBodyClicked()
	}

	componentWillUnmount() {
		// this.storeUnsubscribe()
		// this.unsubscribeBodyClicked()
	}

	handleBodyClicked() {
		document.querySelector(this.bodyClickSelector).onclick = (e) => {
			this.closeHeaderNav()
		}
	}

	unsubscribeBodyClicked() {
		document.querySelector(this.bodyClickSelector).onclick = false
	}

	setHeaderOpenState() {
		this.state.menuIsOpen = ' ' + (this.store.getState().headerNav.menuIsOpen ? this.navItemsClass.open : this.navItemsClass.closed)
	}

	handleGoToTop(e) {
		e.preventDefault()
		e.stopPropagation()

		window.scroll(0, 0)
	}

	handleStateChange() {
		if (this.state.headerNav !== this.store.getState().headerNav) {
			this.state.headerNav = this.store.getState().headerNav

			this.setHeaderOpenState()
		}
	}

	closeHeaderNav() {
		return this.store.dispatch({
			type: 'CLOSE_MENU',
			menuIsOpen: false,
			submenuIsOpen: false
		})
	}

	render() { return (
		<div>
			{/*
			<GoogleAnalytics id="UA-30605639-3" />

			<hr className="site-background" />

			<div className="site-go-to-top" id="js-go-to-top">
				<p><a className="site-go-to-top__link" href="#top" onClick={this.handleGoToTop}><i className="fa fa-arrow-up"></i></a></p>
			</div>
			*/}

			<div className="site-container">
				{/*
				<header className={'site-header' + this.state.menuIsOpen}>
					<Header />
				</header>
				*/}

				<div className="site-content-container js-click-body">
					<div className="site-content">
						<main className="site-main">
							{this.props.children}
						</main>

						{/*
						<footer className="site-footer">
							<Footer />
						</footer>
						*/}
					</div>
				</div>
			</div>
		</div>
	)}
}

export default connect(
	state => ({ state: state })
)(Master);
