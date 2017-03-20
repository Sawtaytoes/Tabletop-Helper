import { sets, factions } from 'content/smash-up-decks'

export const SELECT_ALL_DECKS = 'SMASH_UP_SELECT_ALL_DECKS'
export const DESELECT_ALL_DECKS = 'SMASH_UP_DESELECT_ALL_DECKS'
export const TOGGLE_FACTION = 'SMASH_UP_TOGGLE_FACTION'
export const TOGGLE_SET = 'SMASH_UP_TOGGLE_SET'

export const selectAll = () => ({ type: SELECT_ALL_DECKS })
export const deselectAll = () => ({ type: DESELECT_ALL_DECKS })

export const toggleFaction = title => ({
	type: TOGGLE_FACTION,
	title,
})

export const toggleSet = title => ({
	type: TOGGLE_SET,
	title,
})

export const initialState = {
	...(factions.reduce((combined, { title }) => ({ ...combined, [title]: false }), {})),
	...(sets.reduce((combined, { title }) => ({ ...combined, [title]: false }), {})),
}

export default (state = initialState, { type, title }) => {
	switch (type) {
		case TOGGLE_FACTION:
			return {
				...state,
				[title]: !state[title],
			}

		case TOGGLE_SET: {
			const setState = !state[title]

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
