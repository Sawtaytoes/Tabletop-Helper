import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import collapsibleMenu from './collapsible-menu'
import factions from './factions'
import locationChange from './location-change'

export default combineReducers({
	collapsibleMenu,
	factions,
	locationChange,
	routing: routeReducer
})
