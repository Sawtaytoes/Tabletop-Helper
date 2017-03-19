import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()

class Home extends PureComponent {
	render() { return (
		<div>
			<h1>Tabletop Helper</h1>
			<h2>A small site of prototype tools from Kevin Ghadyani</h2>
			<ul>
				<li><Link to="/score-keeper" title="Score Keeper">Score Keeper</Link></li>
				<li><Link to="/instructions" title="Instructions">Instructions</Link></li>
				<li><Link to="/randomizer/smash-up" title="Smash-Up Randomizer">Smash-Up Randomizer</Link></li>
			</ul>

			{/*<Link to="/about" title="Go to About">About</Link>*/}
		</div>
	)}
}

export default stylesLoader.render(Home)
