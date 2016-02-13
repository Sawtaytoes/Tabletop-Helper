import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import collapsibleMenu from './collapsible-menu'
import factions from './factions'
import locationChange from './location-change'
import metaUpdate from './meta-update'
import playback from './playback'
import showSongs from './show-songs'

export default combineReducers({
	collapsibleMenu,
	factions,
	locationChange,
	metaUpdate,
	routing: routeReducer
})
