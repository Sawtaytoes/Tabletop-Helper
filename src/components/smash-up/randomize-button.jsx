import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { generateDecks } from 'ducks/smash-up-randomizer'
import { stylesLoader } from 'utils/styles-loader'

export const RandomizeButton = ({
	generateDecks,
	numberOfPlayers,
	filteredFactions,
}) => (
	<div
		className="randomize-button"
		onClick={() => generateDecks(filteredFactions, numberOfPlayers)}
	>
		Randomize
	</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(
	stylesLoader(require('./randomize-button.styl'))(RandomizeButton)
)
