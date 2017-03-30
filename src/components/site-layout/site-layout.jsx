import React, { PropTypes } from 'react'
// import GoogleAnalytics from 'react-g-analytics'

import StylesLoader from 'utils/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
.add(require('normalize.css'))
.add(require('./global.styl'))
.add(require('./site-layout.styl'))

export const SiteLayout = ({ children }) => (
	<article>
		{children}
		{/*<GoogleAnalytics id="UA-????????-?" />*/}
	</article>
)

SiteLayout.propTypes = {
	children: PropTypes.node.isRequired
}

export default stylesLoader.render(SiteLayout)
