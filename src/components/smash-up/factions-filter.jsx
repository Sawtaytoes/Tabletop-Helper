import React from 'react'

import AllSelector from 'components/smash-up/all-selector'
import FactionsSelector from 'components/smash-up/factions-selector'
import SetsSelector from 'components/smash-up/sets-selector'
import { stylesLoader } from 'utils/styles-loader'

import { sets } from 'content/smash-up-decks'

export const FactionsFilter = () => (
	<div className="factions-filter">
		<AllSelector />

		{sets
			.map(({ title, decks }) => (
				<div key={title}>
					<SetsSelector key={title} title={title} />
					{decks
						.map(({ title, tier }) => (
							<FactionsSelector key={title} title={title} tier={tier} />
						))
					}
				</div>
			)
		)}
	</div>
)

export default stylesLoader(require('./factions-filter.styl'))(FactionsFilter)
