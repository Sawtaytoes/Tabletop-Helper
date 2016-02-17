import React, { Component, PropTypes } from 'react'

export default class LastUpdated extends Component {
	static propTypes = {
		date: PropTypes.string.isRequired
	};

	render() { return (
		<em><strong>Last Updated:</strong> {this.props.date}</em>
	)}
}
