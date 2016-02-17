import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'

class IconLink extends Component {
	static propTypes = {
		className: PropTypes.string,
		href: PropTypes.string.isRequired,
		title: PropTypes.string,
		name: PropTypes.string,
		icon: PropTypes.string.isRequired,
		local: PropTypes.bool,
		download: PropTypes.any,
		noUnderline: PropTypes.bool,
	};

	constructor() {
		super()
	}

	handleLocalLink(e) {
		let { href, dispatch } = this.props

		e.preventDefault()
		dispatch(pushPath(href))
	}

	render() { return (
		<a
			className={'no-text-underline' + (this.props.className ? ' ' + this.props.className : '')}
			href={this.props.href}
			onClick={this.props.local && this.handleLocalLink.bind(this) || null}
			title={this.props.title || this.props.name || (typeof this.props.children == 'string' && this.props.children) || null}
			target={this.props.external ? '_blank' : null}
			download={this.props.download || null}
		>
			<i className={'fa ' + this.props.icon}></i>
			&nbsp;
			<span className={!this.props.noUnderline ? 'text-underline' : null}>{this.props.children || this.props.name}</span>
		</a>
	)}
}

export default connect(
	state => ({})
)(IconLink)
