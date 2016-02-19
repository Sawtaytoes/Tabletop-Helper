import cookie from 'react-cookie'

// Reducers
import { getFactionsInitialState } from 'reducers/factions'

export function initializeState(reducerState = {}, initialState = {}) {
	let newState = { ...reducerState }

	for (let key of Object.keys(initialState)) {
		console.log(key, !newState[key]);
		!newState[key] && (newState[key] = initialState[key])
	}

	return newState
}

export function getInitialState() {
	return typeof window !== 'undefined' && window.__INITIAL_STATE__ || {
		factions: initializeState(cookie.load('factions'), getFactionsInitialState())
	}
}
