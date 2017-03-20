import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { generateDecks } from 'ducks/smash-up-randomizer'

export const RandomizeButton = ({
	generateDecks,
	numberOfPlayers,
	filteredFactions,
}) => (
	<button onClick={() => generateDecks(filteredFactions, numberOfPlayers)}>Randomize</button>
)

RandomizeButton.propTypes = {
	numberOfPlayers: PropTypes.number.isRequired,
	generateDecks: PropTypes.func,
	filteredFactions: PropTypes.shape({
		[PropTypes.string]: PropTypes.bool
	}),
}

RandomizeButton.defaultProps = {
	generateDecks: () => {},
	filteredFactions: {},
}

const mapStateToProps = ({ playersCounter, smashUpDecksFilter }) => ({
	filteredFactions: smashUpDecksFilter,
	numberOfPlayers: playersCounter.numberOfPlayers,
})

const mapDispatchToProps = dispatch => ({
	generateDecks: (filteredFactions, numberOfPlayers) => dispatch(
		generateDecks(filteredFactions, numberOfPlayers)
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(RandomizeButton)
