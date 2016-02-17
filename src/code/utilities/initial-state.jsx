import cookie from 'react-cookie'

export function getInitialState() {
	return typeof window !== 'undefined' && window.__INITIAL_STATE__ || {
		factions: cookie.load('factions')
	}
}
