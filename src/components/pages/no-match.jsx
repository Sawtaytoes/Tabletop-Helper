import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class NoMatch extends PureComponent {
	render() { return (
		<article>
			<h1>404</h1>
			<h2>You're Trying to Get Somewhere That Doesn't Exist</h2>

			<Link to="/" title="Go back to Home">
				Go Back
			</Link>
		</article>
	)}
}

export default NoMatch
