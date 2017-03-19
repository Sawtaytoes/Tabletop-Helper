import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

// Reducers
import contextMenu from 'ducks/context-menu'
import factions from 'ducks/factions'
import itemHolder from 'ducks/item-holder'
import location from 'ducks/location'
import numberCounters from 'ducks/number-counters'
import tap from 'ducks/tap'

export default combineReducers({
	contextMenu,
	factions,
	itemHolder,
	location,
	numberCounters,
	routing,
	tap,
})
