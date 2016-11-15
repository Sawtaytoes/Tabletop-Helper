import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Reducers
import factions from 'reducers/factions'
import locationChange from 'reducers/location-change'
import numberCounter from 'reducers/number-counter'
import tap from 'reducers/tap'

export default combineReducers({
	factions,
	locationChange,
	numberCounter,
	tap,
	routing: routerReducer,
})
