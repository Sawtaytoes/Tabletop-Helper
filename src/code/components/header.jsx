import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// Components
import HeaderNav from './header-nav'

// Utilities
import { styleHelper } from 'utilities/style-helper'

const styles = [
	require('styl/header')
]

class Header extends Component {
	// static propTypes = {};

	constructor() {
		super()
	}

	handleLogoClick(e) {
		e.stopPropagation()
		e.nativeEvent.stopImmediatePropagation()

		this.props.dispatch({
			type: 'CLOSE_MENU',
			menuIsOpen: false,
			submenuIsOpen: false
		})
	}

	render() { return (
		<div className="header">
			<HeaderNav />
		</div>
	)}
}

export default connect(
	state => ({}),
	null, null,
	{ pure: false }
)(styleHelper(Header, styles));
