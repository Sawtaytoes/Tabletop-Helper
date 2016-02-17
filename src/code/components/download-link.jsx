import React, { Component, PropTypes } from 'react'

// Components
import IconLink from 'components/icon-link'

export default class DownloadLink extends Component {
	static propTypes = {
		cloud: PropTypes.bool,
		download: PropTypes.string
	};

	render() { return (
		<IconLink {...this.props}
			icon={this.props.cloud ? 'fa-cloud-download' : 'fa-download'}
			download={this.props.download || true}
		/>
	)}
}
