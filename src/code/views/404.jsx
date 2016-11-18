import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// Components
import PageDescription from 'components/page-description'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
	.add(require('styl/contact'))

class NoMatch extends PureComponent {
	render() { return (
		<article>
			<section className="bubble">
				<PageDescription
					title="404"
					subtitle="You're Trying to Get Somewhere That Doesn't Exist"
				><Link to="/" title="Go back to Home">Go Back</Link></PageDescription>
			</section>
		</article>
	)}
}

module.exports = connect(
	state => ({}),
	null, null,
	{ pure: false }
)(stylesLoader.render(NoMatch))
