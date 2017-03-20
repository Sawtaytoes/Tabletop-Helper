import React, { PureComponent, PropTypes } from 'react'
// import GoogleAnalytics from 'react-g-analytics'

// Utils
import StylesLoader from 'utils/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
.add(require('normalize.css'))
.add(require('layouts/global.styl'))
.add(require('layouts/site-layout.styl'))

class SiteLayout extends PureComponent {
	static propTypes = {
		children: PropTypes.node.isRequired
	};

	render() { return (
		<article>
			{this.props.children}
			{/*<GoogleAnalytics id="UA-????????-?" />*/}
		</article>
	)}
}

export default stylesLoader.render(SiteLayout)
