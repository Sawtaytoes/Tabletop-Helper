import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { toggleFaction } from 'ducks/smash-up-factions-selector'
import { toggleSet } from 'ducks/smash-up-sets-selector'

import { factions, sets } from 'content/smash-up-decks'

export const SmashUpDecksSelector = ({
	smashUpFactionsSelector,
	smashUpSetsSelector,
	toggleFaction,
	toggleSet,
}) => (
	<div>
		<div>
			{sets
				.map(({ title, decks }) => (
					<div key={title}>
						<div>
							<span style={{ fontWeight: 'bold' }}>{title}</span>
							<span> </span>
							<span onClick={() => toggleSet(title)}>{
								smashUpSetsSelector[title] ? '------' : '++++++'
							}</span>
						</div>
						{decks
							.map(({ title }) => (
								<div>
									<span>{title}</span>
									<span> </span>
									<span onClick={() => toggleFaction(title)}>{
										smashUpFactionsSelector[title] ? '------' : '++++++'
									}</span>
								</div>
							))
						}
					</div>
				)
			)}
		</div>
	</div>
)

SmashUpDecksSelector.propTypes = {
	smashUpFactionsSelector: PropTypes.object.isRequired,
	smashUpSetsSelector: PropTypes.object.isRequired,

	toggleFaction: PropTypes.func,
	toggleSet: PropTypes.func,
}

SmashUpDecksSelector.defaultProps = {
	toggleFaction: () => {},
	toggleSet: () => {},
}

export default connect(({ smashUpFactionsSelector, smashUpSetsSelector }) => ({
	smashUpFactionsSelector,
	smashUpSetsSelector,
}), dispatch => ({
	toggleFaction: id => dispatch(toggleFaction(id)),
	toggleSet: id => dispatch(toggleSet(id)),
}))(SmashUpDecksSelector)
