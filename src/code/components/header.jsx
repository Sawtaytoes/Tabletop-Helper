import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// Components
import HeaderNav from './header-nav'

// Styles
import './../../assets/styl/header'

export default class Header extends Component {
	// static propTypes = {};

	constructor(props) {
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
)(Header);
