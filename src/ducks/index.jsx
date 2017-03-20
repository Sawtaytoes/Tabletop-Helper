import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

// Reducers
import contextMenu from 'ducks/context-menu'
import itemHolder from 'ducks/item-holder'
import location from 'ducks/location'
import numberCounters from 'ducks/number-counters'
import playersCounter from 'ducks/players-counter'
import smashUpDecksFilter from 'ducks/smash-up-decks-filter'
import smashUpRandomizer from 'ducks/smash-up-randomizer'
import tap from 'ducks/tap'

export default combineReducers({
	contextMenu,
	itemHolder,
	location,
	numberCounters,
	playersCounter,
	routing,
	smashUpDecksFilter,
	smashUpRandomizer,
	tap,
})
