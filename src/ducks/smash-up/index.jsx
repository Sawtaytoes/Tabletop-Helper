import { combineReducers } from 'redux'

import decksFilter from 'ducks/smash-up/decks-filter'
import playersCounter from 'ducks/smash-up/players-counter'
import randomizer from 'ducks/smash-up/randomizer'

export default combineReducers({
	decksFilter,
	playersCounter,
	randomizer,
})
