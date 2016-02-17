import React, { Component, PropTypes } from 'react'

// Utilities
import { styleHelper } from 'utilities/style-helper'

// Styles
const styles = [
	require('styl/footer')
]

class Footer extends Component {
	// static propTypes = {};

	render() { return (
		<div className="footer">
			<p className="footer__copyright">
				&copy;&nbsp;Kevin Ghadyani &amp; <span className="footer__copyright__grouping">4-Panel Footprint</span>
			</p>
		</div>
	)}
}

export default styleHelper(Footer, styles)
