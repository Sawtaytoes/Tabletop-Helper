import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

// Reducers
import contextMenu from 'ducks/context-menu'
import itemHolder from 'ducks/item-holder'
import numberCounters from 'ducks/number-counters'
import pageMeta from 'ducks/page-meta'
import playersCounter from 'ducks/players-counter'
import smashUpDecksFilter from 'ducks/smash-up-decks-filter'
import smashUpRandomizer from 'ducks/smash-up-randomizer'

export default combineReducers({
	contextMenu,
	itemHolder,
	numberCounters,
	pageMeta,
	playersCounter,
	router,
	smashUpDecksFilter,
	smashUpRandomizer,
})
