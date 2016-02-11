import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// Components
import ExternalLink from './../components/external-link'

// Styles
import './../../assets/styl/header-nav'

class HeaderNav extends Component {
	// static propTypes = {};

	constructor(props) {
		super()

		this.navItemsClass = {
			open: 'is-open',
			closed: ''
		}

		this.submenuIcon = {
			open: 'fa-caret-up',
			closed: 'fa-caret-down'
		}

		this.store = props.state.store
		this.storeUnsubscribe = this.store.subscribe(this.handleStateChange.bind(this))

		this.state = {
			headerNav: this.store.getState().headerNav,
			menuIsOpen: this.store.getState().headerNav.menuIsOpen,
			navItemsClass: '',
			submenuIsOpen: this.store.getState().headerNav.submenuIsOpen,
			submenuId: ''
		}
	}

	componentWillUnmount() {
		this.storeUnsubscribe()
	}

	getSubmenuOpenClass(parentLink) {
		if (parentLink === this.store.getState().headerNav.submenuId) {
			return this.store.getState().headerNav.submenuIsOpen ? ' ' + this.navItemsClass.open : this.navItemsClass.closed
		}

		return this.navItemsClass.closed
	}

	getSubmenuParentIcon(parentLink) {
		if (parentLink === this.store.getState().headerNav.submenuId) {
			return this.store.getState().headerNav.submenuIsOpen ? this.submenuIcon.open : this.submenuIcon.closed
		}

		return this.submenuIcon.closed
	}

	setMenuOpenState() {
		this.state.menuIsOpen = this.store.getState().headerNav.menuIsOpen
	}

	setNavItemsClass() {
		this.state.navItemsClass = this.store.getState().headerNav.menuIsOpen ? ' ' + this.navItemsClass.open
			: this.navItemsClass.closed
	}

	handleStateChange() {
		if (this.state.headerNav !== this.store.getState().headerNav) {
			this.state.headerNav = this.store.getState().headerNav

			this.setMenuOpenState()
			this.setNavItemsClass()
		}
	}

	handleMenuOpen(openMenu, e) {
		e.stopPropagation()
		e.nativeEvent.stopImmediatePropagation()

		if (openMenu && !this.store.getState().headerNav.menuIsOpen) {
			return this.store.dispatch({
				type: 'OPEN_MENU',
				menuIsOpen: true
			})
		}

		return this.store.dispatch({
			type: 'CLOSE_MENU',
			menuIsOpen: false,
			submenuIsOpen: false
		})
	}

	handleSubMenuOpen(parentLink, e) {
		e.preventDefault()
		e.stopPropagation()
		e.nativeEvent.stopImmediatePropagation()

		if (
			!(this.store.getState().headerNav.submenuIsOpen && this.store.getState().headerNav.submenuId === parentLink)
			&& (!this.store.getState().headerNav.submenuIsOpen || this.store.getState().headerNav.submenuId !== parentLink)
		) {
			return this.store.dispatch({
				type: 'OPEN_SUBMENU',
				menuIsOpen: true,
				submenuId: parentLink,
				submenuIsOpen: true,
			})
		}

		return this.store.dispatch({
			type: 'CLOSE_SUBMENU',
			submenuId: null,
			submenuIsOpen: false,
		})
	}

	renderSubItems(items, parentLink) { return (
		<ul className={'header-nav__subitems' + this.getSubmenuOpenClass(parentLink)}>
			{this.renderLinks(items, parentLink)}
		</ul>
	)}

	renderLinks(items, parentLink) { return (
		items.map((item) =>
			<li key={item.name} className={'header-nav__item' + (parentLink ? ' header-nav__item--subitem' : item.to === 'game' ? ' header-nav__item--image' : '')}>
				{(item.to === 'game') && <Link className="header-nav__logo__link" to={'/' + item.to} activeClassName="is-active" onClick={this.handleMenuOpen.bind(this, false)}>
					<img className="header-nav__logo__image" src="/images/pulsen-logo-mini.png" srcSet="/images/pulsen-logo-mini-1.5x.png 1000w, /images/pulsen-logo-mini-2x.png 2000w" />
				</Link>}

				{(item.to !== undefined && item.to !== 'game') && <Link className={'header-nav__link' + (parentLink ? ' header-nav__link--subitem' : '')} to={(parentLink ? '/' + parentLink : '') + '/' + item.to} activeClassName="is-active" onClick={!item.subitems ? this.handleMenuOpen.bind(this, false) : this.handleSubMenuOpen.bind(this, item.to)}>
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
		<nav className={'header-nav' + this.state.navItemsClass}>
			<div className="header-nav__menu-accessor" onClick={this.handleMenuOpen.bind(this, true)}>
				<button className="header-nav__menu-accessor__button"><i className="fa fa-bars"></i></button>
			</div>

			<ul className={'header-nav__items' + this.state.navItemsClass}>
				{this.renderLinks(require('./../content/nav-items'), '')}
			</ul>
		</nav>
	)}
}

export default connect(
	state => ({ state: state }),
	null, null,
	{ pure: false }
)(HeaderNav);

