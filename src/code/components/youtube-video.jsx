import React, { Component, PropTypes } from 'react'

// Utilities
import { stylesHelper } from 'utilities/styles-helper'

// Styles
const styles = [
	require('styl/flex-video')
]

export default class YouTubeVideo extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		className: PropTypes.string
	};

	renderFrame() { return (
		<iframe width="800" height="480" src={'//www.youtube.com/embed/' + this.props.id} allowFullScreen></iframe>
	)}

	render() { return (
		<div className={'flex-video flex-video--wide' + (this.props.className ? ' ' + this.props.className : '')}>
			{this.renderFrame()}
		</div>
	)}
}

export default stylesHelper(YouTubeVideo, styles)
