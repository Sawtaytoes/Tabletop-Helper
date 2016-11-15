import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Reducers
import factions from 'reducers/factions'
import itemHolder from 'reducers/item-holder'
import locationChange from 'reducers/location-change'
import numberCounters from 'reducers/number-counters'
import tap from 'reducers/tap'

export default combineReducers({
	factions,
	itemHolder,
	locationChange,
	numberCounters,
	tap,
	routing: routerReducer,
})
