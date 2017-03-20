import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
	addPlayer,
	removePlayer,
} from 'ducks/players-counter'

export const PlayersSelector = ({
	addPlayer,
	removePlayer,
	numberOfPlayers,
}) => (
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

export default connect(({ playersCounter }) => ({
	numberOfPlayers: playersCounter.numberOfPlayers,
}), dispatch => ({
	addPlayer: () => dispatch(addPlayer()),
	removePlayer: () => dispatch(removePlayer()),
}))(PlayersSelector)
