import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

// Utils
import StylesLoader from 'utils/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()

class About extends PureComponent {
	render() { return (
		<div>
			<h1>About</h1>

			<Link to="/" title="Go to Home">Home</Link>
		</div>
	)}
}

export default stylesLoader.render(About)
