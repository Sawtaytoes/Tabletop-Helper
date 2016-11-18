import React, { PureComponent } from 'react'
import { Link } from 'react-router'

// Components
import PageDescription from 'components/page-description'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()

// Content
import { instructions } from 'content/instructions'

class Instructions extends PureComponent {
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

module.exports = stylesLoader.render(Instructions)
