import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import RandomizeButton from 'components/smash-up/randomize-button'
import { factions } from 'content/smash-up-decks'

export const GameOverview = ({
	decks,
}) => (
	<div>
		{decks
			.map(deck => ({
				...deck,
				adjectiveFaction: factions.find(({ title }) => title === deck.adjectiveFaction),
				nounFaction: factions.find(({ title }) => title === deck.nounFaction)
			}))
			.map(({ playerNumber, adjectiveFaction, nounFaction }) => <div key={playerNumber}><div>{playerNumber}</div><div>{adjectiveFaction.name.adjective}</div><div>{adjectiveFaction.tier.name}</div><div>{nounFaction.name.noun}</div><div>{nounFaction.tier.name}</div></div>)
		}

		<RandomizeButton />
	</div>
)

GameOverview.propTypes = {
	decks: PropTypes.arrayOf(PropTypes.shape({
		playerNumber: PropTypes.number,
		adjectiveFaction: PropTypes.string,
		nounFaction: PropTypes.string,
	})),
}

GameOverview.defaultProps = {
	decks: [],
}

const mapStateToProps = ({ smashUpRandomizer }) => ({
	decks: smashUpRandomizer,
})

export default connect(mapStateToProps)(GameOverview)
