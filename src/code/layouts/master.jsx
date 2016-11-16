import React, { PureComponent } from 'react'
// import GoogleAnalytics from 'react-g-analytics'

// Components
import CookieManager from 'components/cookie-manager'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
.add(require('normalize.css'))
.add(require('styl/global'))
.add(require('styl/site'))

class Master extends PureComponent {
	render() { return (
		<div>
			{this.props.children}
			<CookieManager />
			{/*<GoogleAnalytics id="UA-????????-?" />*/}
		</div>
	)}
}

export default stylesLoader.render(Master)
