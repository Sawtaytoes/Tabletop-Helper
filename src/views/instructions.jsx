import React from 'react'
import { Link } from 'react-router-dom'

// Components
import PageDescription from 'components/page-description'

// Content
import { instructions } from 'content/instructions'

const Instructions = () => (
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
)

export default Instructions
