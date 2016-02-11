import React, { Component, PropTypes } from 'react'

export default class ItemDescription extends Component {
	static propTypes = {
		containerClass: PropTypes.string,
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string,
		description: PropTypes.string,
		descriptions: PropTypes.arrayOf(PropTypes.any),
	};

	renderHeadingText() { return (
		<span className="main__heading__text main__heading__content">{this.props.title}</span>
	)}

	renderHeadingSubtext() { return (
		<small className="main__heading__subtext main__heading__content">{this.props.subtitle}</small>
	)}

	render() { return (
		<div className={this.props.containerClass}>
			<h1 className="main__heading">
				{this.renderHeadingText()}
				<span>&nbsp;</span>
				{this.props.subtitle && this.renderHeadingSubtext()}
			</h1>

			{(this.props.description || this.props.children) && <h2 className="main__subheading">{this.props.description || this.props.children}</h2>}
			{this.props.descriptions && this.props.descriptions.map((description) =>
				<p className="main__description" key={description}>{description}</p>
			)}
		</div>
	)}
}
