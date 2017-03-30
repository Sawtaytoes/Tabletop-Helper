import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Components
import PageDescription from 'components/page-description'

// Utils
import StylesLoader from 'utils/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
	.add(require('./contact.styl'))

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

export default connect(
	state => ({}),
	null, null,
	{ pure: false }
)(stylesLoader.render(NoMatch))
