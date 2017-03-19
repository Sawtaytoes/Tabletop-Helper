import { sets, factions } from 'content/smash-up-decks'

export const SELECT_ALL_DECKS = 'SELECT_ALL_DECKS'
export const DESELECT_ALL_DECKS = 'DESELECT_ALL_DECKS'
export const TOGGLE_FACTION = 'TOGGLE_FACTION'
export const TOGGLE_SET = 'TOGGLE_SET'

export const selectAll = () => ({ type: SELECT_ALL_DECKS })
export const deselectAll = () => ({ type: DESELECT_ALL_DECKS })

// export const toggleFaction = title => ({
// 	type: TOGGLE_FACTION,
// 	title,
// })
export const toggleFaction = title => {
	console.debug('title', title)
	return {
		type: TOGGLE_FACTION,
		title,
	}
}

export const toggleSet = title => ({
	type: TOGGLE_SET,
	title,
})

export const initialState = {
	...(factions.reduce((combined, { title }) => ({ ...combined, [title]: false }), {})),
	...(sets.reduce((combined, { title }) => ({ ...combined, [title]: false }), {})),
}

export default (state = initialState, { type, title }) => {
	console.debug('here 4', type)
	switch (type) {
		case TOGGLE_FACTION:
			console.debug('here 3')
			return {
				...state,
				[title]: !state[title],
			}

		case TOGGLE_SET: {
			const setState = !state[title]
			console.debug('here 2')

			return {
				...state,
				[title]: setState,
				...(
					sets
					.find(set => title === set.title).decks
					.reduce((combined, { title }) => ({ ...combined, [title]: setState }), {})
				),
			}
		}

		case SELECT_ALL_DECKS: {
			return Object.keys(state).reduce((combined, key) => ({ ...combined, [key]: true }), {})
		}

		case DESELECT_ALL_DECKS: {
			return Object.keys(state).reduce((combined, key) => ({ ...combined, [key]: false }), {})
		}

		default:
			return state
	}
}
