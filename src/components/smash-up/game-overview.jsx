import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { factions } from 'content/smash-up-decks'

import { generateDecks } from 'ducks/smash-up-randomizer'

export const GameOverview = ({
	decks,
	generateDecks,
	numberOfPlayers,
	filteredFactions,
}) => (
	<div>
		{decks
			.map(deck => ({
				...deck,
				adjectiveFaction: factions.find(({ title }) => title === deck.adjectiveFaction),
				nounFaction: factions.find(({ title }) => title === deck.nounFaction)
			}))
			.map(({ playerNumber, nounFaction, adjectiveFaction }) => <div><div>{playerNumber}</div><div>{nounFaction.title}</div><div>{nounFaction.tier.name}</div><div>{adjectiveFaction.title}</div><div>{adjectiveFaction.tier.name}</div></div>)
		}

		<button onClick={() => generateDecks(filteredFactions, numberOfPlayers)}>Randomize</button>
	</div>
)

const factionShape = {
	title: PropTypes.string,
	tier: PropTypes.shape({
		name: PropTypes.string,
	}),
}

GameOverview.propTypes = {
	decks: PropTypes.arrayOf(PropTypes.shape({
		playerNumber: PropTypes.number,
		adjectiveFaction: PropTypes.shape(factionShape),
		nounFaction: PropTypes.shape(factionShape),
	})),
	numberOfPlayers: PropTypes.number.isRequired,
	generateDecks: PropTypes.func,
	filteredFactions: PropTypes.shape({
		[PropTypes.string]: PropTypes.bool
	}),
}

GameOverview.defaultProps = {
	decks: [],
	generateDecks: () => {},
	filteredFactions: {},
}

const mapStateToProps = ({ playersCounter, smashUpDecksFilter, smashUpRandomizer }) => ({
	decks: smashUpRandomizer,
	filteredFactions: smashUpDecksFilter,
	numberOfPlayers: playersCounter.numberOfPlayers,
})

const mapDispatchToProps = dispatch => ({
	generateDecks: (filteredFactions, numberOfPlayers) => dispatch(generateDecks(filteredFactions, numberOfPlayers)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameOverview)
