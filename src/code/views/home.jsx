import React, { PureComponent } from 'react'
import { Link } from 'react-router'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()

class Home extends PureComponent {
	render() { return (
		<div>
			<h1>Hello World</h1>
			<ul>
				<li><Link to="/score-keeper" title="Score Keeper">Score Keeper</Link></li>
				<li><Link to="/instructions" title="Instructions">Instructions</Link></li>
				<li><Link to="/randomizer/smash-up" title="Smash-Up Randomizer">Smash-Up Randomizer</Link></li>
			</ul>

			<Link to="/about" title="Go to About">About</Link>
		</div>
	)}
}

module.exports = stylesLoader.render(Home)
