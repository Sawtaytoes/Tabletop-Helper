import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

// import headerNavReducer from './header-nav'
import factionsReducer from './factions'

export default combineReducers({
	// headerNav: headerNavReducer,
	factions: factionsReducer,
	routing: routeReducer,
})
