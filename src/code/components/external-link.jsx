import React, { Component, PropTypes } from 'react'

export default class ExternalLink extends Component {
	static propTypes = {
		className: PropTypes.string,
		href: PropTypes.string.isRequired,
		title: PropTypes.string,
		name: PropTypes.string,
		icon: PropTypes.string,
		bold: PropTypes.bool,
		noUnderline: PropTypes.bool,
	};

	render() { return (
		<a
			className={'no-text-underline' + (this.props.className ? ' ' + this.props.className : '')}
			href={this.props.href}
			title={this.props.title || this.props.name || (typeof this.props.children == 'string' && this.props.children) || null}
			target="_blank"
		>
			<span className={!this.props.noUnderline ? 'text-underline' : null}>{this.props.children || this.props.name}</span>
			&nbsp;
			<i className={'fa ' + (this.props.bold ? 'fa-external-link-square' : 'fa-external-link')}></i>
		</a>
	)}
}
