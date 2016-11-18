import cookie from 'react-cookie'

// Reducers
import { getContextMenuInitialState } from 'reducers/context-menu'
import { getFactionsInitialState } from 'reducers/factions'
import { getItemHolderInitialState } from 'reducers/item-holder'
import { getNumberCountersInitialState } from 'reducers/number-counters'

export function initializeState(reducerState = {}, initialState = {}) {
	let newState = { ...reducerState }

	for (let key of Object.keys(initialState)) {
		!newState[key] && (newState[key] = initialState[key])
	}

	return newState
}

export function getInitialState() {
	return typeof window !== 'undefined' && window.__INITIAL_STATE__ || {
		contextMenu: initializeState(cookie.load('contextMenu'), getContextMenuInitialState()),
		factions: initializeState(cookie.load('factions'), getFactionsInitialState()),
		itemHolder: initializeState(cookie.load('itemHolder'), getItemHolderInitialState()),
		numberCounters: initializeState(cookie.load('numberCounters'), getNumberCountersInitialState()),
	}
}
