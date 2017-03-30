import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Home extends PureComponent {
	render() { return (
		<div>
			<h1>Tabletop Helper</h1>
			<h2>A small site of prototype tools from Kevin Ghadyani</h2>
			<ul>
				<li><Link to="/score-keeper" title="Score Keeper">Score Keeper</Link></li>
				<li><Link to="/smash-up/randomizer/players-selector" title="Smash-Up Randomizer">Smash-Up Randomizer</Link></li>
			</ul>
		</div>
	)}
}

export default Home
