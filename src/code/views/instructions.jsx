import React, { Component } from 'react'
import { Link } from 'react-router'

// Components
import PageDescription from 'components/page-description'

// Styles
import { stylesHelper } from 'utilities/styles-helper'
const styles = []

// Content
import { instructions } from 'content/instructions'

class Instructions extends Component {
	render() { return (
		<article>
			<PageDescription
				title="Instructions"
				description="Haven't played a game in a while? Use these summaries to quickly setup a game and review some basic rules, questionable rules, and variants."
			/>

			<div>
				<ul>
					{instructions.map((game) => {
						return <li key={game.link}><Link to={'/instructions/' + game.link}>{game.name}</Link></li>
					})}
				</ul>
			</div>
		</article>
	)}
}

module.exports = stylesHelper(Instructions, styles)
