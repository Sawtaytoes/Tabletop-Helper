import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
	addPlayer,
	removePlayer,
} from 'ducks/player-counter'

export const PlayersSelector = ({
	addPlayer,
	removePlayer,
	numberOfPlayers,
}) => (
	<div>
		<span onClick={removePlayer}>Remove</span>
		<span> </span>
		{numberOfPlayers}
		<span> </span>
		<span onClick={addPlayer}>Add</span>
	</div>
)

PlayersSelector.propTypes = {
	addPlayer: PropTypes.func,
	removePlayer: PropTypes.func,
	numberOfPlayers: PropTypes.number,
}

PlayersSelector.defaultProps = {
	addPlayer: () => {},
	removePlayer: () => {},
	numberOfPlayers: 2,
}

export default connect(({ playerCounter }) => ({
	numberOfPlayers: playerCounter.numberOfPlayers,
}), dispatch => ({
	addPlayer: () => dispatch(addPlayer()),
	removePlayer: () => dispatch(removePlayer()),
}))(PlayersSelector)
