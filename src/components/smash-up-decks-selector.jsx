import React from 'react'

import FactionsSelector from 'components/smash-up/factions-selector'
import SetsSelector from 'components/smash-up/sets-selector'

import { sets } from 'content/smash-up-decks'

export const SmashUpDecksSelector = () => (
	<div>
		{sets
			.map(({ title, decks }) => (
				<div key={title}>
					<SetsSelector key={title} title={title} />
					{decks
						.map(({ title }) => (
							<FactionsSelector key={title} title={title} />
						))
					}
				</div>
			)
		)}
	</div>
)

export default SmashUpDecksSelector
