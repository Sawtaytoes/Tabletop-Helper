import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// Components
import ExternalLink from 'components/external-link'

// Actions
import {
	openMenu,
	closeMenu,
	openSubMenu,
	closeSubMenu
} from 'actions'

// Utilities
import { styleHelper } from 'utilities/style-helper'

const styles = [
	require('styl/header-nav')
]

class HeaderNav extends Component {
	// static propTypes = {};

	constructor() {
		super()

		this.navItemsClass = {
			open: 'is-open',
			closed: ''
		}

		this.submenuIcon = {
			open: 'fa-caret-up',
			closed: 'fa-caret-down'
		}
	}

	getSubmenuOpenClass(parentLink) {
		let { submenuId, submenuIsOpen } = this.props,
			{ open, closed } = this.navItemsClass

		if (parentLink === submenuId) {
			return submenuIsOpen ? ' ' + open : closed
		}

		return this.navItemsClass.closed
	}

	getSubmenuParentIcon(parentLink) {
		let { submenuId, submenuIsOpen } = this.props,
			{ open, closed } = this.submenuIcon

		if (parentLink === submenuId) {
			return submenuIsOpen ? open : closed
		}

		return this.submenuIcon.closed
	}

	getNavItemsClass() {
		let { menuIsOpen } = this.props,
			{ open, closed } = this.navItemsClass

		return ' ' + (menuIsOpen ? open : closed)
	}

	handleMenuClicked(menuShouldOpen, e) {
		let { menuIsOpen, dispatch } = this.props

		e.stopPropagation()
		e.nativeEvent.stopImmediatePropagation()

		menuShouldOpen && !menuIsOpen ? dispatch(openMenu()) : dispatch(closeMenu())
	}

	handleSubMenuClicked(parentLink, e) {
		let { submenuId, submenuIsOpen, dispatch } = this.props

		e.preventDefault()
		e.stopPropagation()
		e.nativeEvent.stopImmediatePropagation()

		!(submenuIsOpen && submenuId === parentLink) && (!submenuIsOpen || submenuId !== parentLink)
			? dispatch(openSubMenu(parentLink)) : dispatch(closeSubMenu())
	}

	renderSubItems(items, parentLink) { return (
		<ul className={'header-nav__subitems' + this.getSubmenuOpenClass(parentLink)}>
			{this.renderLinks(items, parentLink)}
		</ul>
	)}

	renderLinks(items, parentLink) { return (
		items.map((item) =>
			<li key={item.name} className={'header-nav__item' + (parentLink ? ' header-nav__item--subitem' : item.to === 'game' ? ' header-nav__item--image' : '')}>
				{(item.to === 'game') && <Link className="header-nav__logo__link" to={'/' + item.to} activeClassName="is-active" onClick={this.handleMenuClicked.bind(this, false)}>
					<img className="header-nav__logo__image" src="/images/logo/pulsen-logo-mini.png" srcSet="/images/logo/pulsen-logo-mini-1.5x.png 1000w, /images/logo/pulsen-logo-mini-2x.png 2000w" alt="Pulsen Logo" />
				</Link>}

				{(item.to !== undefined && item.to !== 'game') && <Link className={'header-nav__link' + (parentLink ? ' header-nav__link--subitem' : '')} to={(parentLink ? '/' + parentLink : '') + '/' + item.to} activeClassName="is-active" onClick={!item.subitems ? this.handleMenuClicked.bind(this, false) : this.handleSubMenuClicked.bind(this, item.to)}>
					{item.name} {item.subitems && <i className={'header-nav__link__icon fa ' + this.getSubmenuParentIcon(item.to)}></i>}
				</Link>}

				{item.href && <ExternalLink className={'header-nav__link' + (parentLink ? ' header-nav__link--subitem' : '')} href={item.href} title={item.title} bold>
					{item.name}
				</ExternalLink>}

				{item.subitems && this.renderSubItems(item.subitems, item.to)}
			</li>
		)
	)}

	render() { return (
		<nav className={'header-nav' + this.getNavItemsClass()}>
			<div className="header-nav__menu-accessor" onClick={this.handleMenuClicked.bind(this, true)}>
				<button className="header-nav__menu-accessor__button"><i className="fa fa-bars"></i> MENU</button>
			</div>

			<ul className={'header-nav__items' + this.getNavItemsClass()}>
				{this.renderLinks(require('content/nav-items'), '')}
			</ul>
		</nav>
	)}
}

export default connect(
	state => ({
		menuIsOpen: state.collapsibleMenu.menuIsOpen,
		submenuIsOpen: state.collapsibleMenu.submenuIsOpen,
		submenuId: state.collapsibleMenu.submenuId
	}),
	null, null,
	{ pure: false }
)(styleHelper(HeaderNav, styles));

