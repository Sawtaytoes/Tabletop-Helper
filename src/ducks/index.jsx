import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import contextMenu from 'ducks/context-menu'
import itemHolder from 'ducks/item-holder'
import numberCounters from 'ducks/number-counters'
import pageMeta from 'ducks/page-meta'
import smashUp from 'ducks/smash-up'

export default combineReducers({
	contextMenu,
	itemHolder,
	numberCounters,
	pageMeta,
	router,
	smashUp,
})
