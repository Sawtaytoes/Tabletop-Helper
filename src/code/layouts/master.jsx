import React, { Component } from 'react'
import GoogleAnalytics from 'react-g-analytics'
import { connect } from 'react-redux'

// Components
import Header from 'components/header'
import Footer from 'components/footer'

// Actions
import { closeMenu } from 'actions'

// Utilities
import { styleHelper } from 'utilities/style-helper'

const styles = [
	require('normalize.css'),
	require('styl/global'),
	require('styl/site')
]

class Master extends Component {
	constructor() {
		super()

		this.navItemsClass = {
			open: 'is-open',
			closed: ''
		}

		this.bodyClickSelector = '.js-click-body'
	}

	componentDidMount() {
		// this.handleBodyClicked()
	}

	componentWillUnmount() {
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

	getMenuOpenClass() {
		let { menuIsOpen } = this.props,
			{ open, closed } = this.navItemsClass

		return ' ' + (menuIsOpen ? open : closed)
	}

	handleGoToTop(e) {
		e.preventDefault()
		e.stopPropagation()

		window.scroll(0, 0)
	}

	closeHeaderNav() {
		let { dispatch } = this.props
		dispatch(closeMenu())
	}

	render() { return (
		<div>
			{/*
			<GoogleAnalytics id="UA-30605639-3" />

			<hr className="site-background" />

			<div className="site-go-to-top" id="js-go-to-top">
				<a className="site-go-to-top__link" href="#top" onClick={this.handleGoToTop}><i className="fa fa-arrow-up"></i></a>
			</div>
			*/}

			<div className="site-container">
				{/*
				<header className={'site-header' + this.getMenuOpenClass()}>
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
	state => ({ menuIsOpen: state.collapsibleMenu.menuIsOpen })
)(styleHelper(Master, styles))
