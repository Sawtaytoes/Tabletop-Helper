import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
	addPlayer,
	removePlayer,
} from 'ducks/players-counter'
import { stylesLoader } from 'utils/styles-loader'

export const PlayersSelector = ({
	addPlayer,
	removePlayer,
	numberOfPlayers,
}) => (
	<article className="players-selector">
		<div className="players-selector__players">
			{numberOfPlayers}
		</div>
		<div className="players-selector__controls">
			<div className="players-selector__control player-selector__arrow-up" onClick={addPlayer}>
				<i className="fa fa-arrow-up" />
			</div>
			<div className="players-selector__control player-selector__arrow-down" onClick={removePlayer}>
				<i className="fa fa-arrow-down" />
			</div>
		</div>
	</article>
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
}))(stylesLoader(require('./players-selector.styl'))(PlayersSelector))
