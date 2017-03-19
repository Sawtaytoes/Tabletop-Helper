// Utils
import { createArrayFromRange } from 'utils/array'

// Content
import { setsList as sets, factions } from 'content/smash-up-decks'

// Factions
export const UPDATE_PLAYERS_COUNT = 'UPDATE_PLAYERS_COUNT'

export const EXPAND_SET = 'EXPAND_SET'
export const CONTRACT_SET = 'CONTRACT_SET'

export const EXPAND_ALL_SETS = 'EXPAND_ALL_SETS'
export const CONTRACT_ALL_SETS = 'CONTRACT_ALL_SETS'

export const SELECT_FACTION = 'SELECT_FACTION'
export const DESELECT_FACTION = 'DESELECT_FACTION'

export const SELECT_SET_FACTIONS = 'SELECT_SET_FACTIONS'
export const DESELECT_SET_FACTIONS = 'DESELECT_SET_FACTIONS'

export const SELECT_ALL_FACTIONS = 'SELECT_ALL_FACTIONS'
export const DESELECT_ALL_FACTIONS = 'DESELECT_ALL_FACTIONS'

// Players
export function updateNumberOfPlayers(numberOfPlayers) {
	return {
		type: UPDATE_PLAYERS_COUNT,
		numberOfPlayers
	}
}

// Single Set
export function expandSet(setId) {
	return {
		type: EXPAND_SET,
		setId
	}
}

export function contractSet(setId) {
	return {
		type: CONTRACT_SET,
		setId
	}
}

// All Sets
export function expandAllSets() {
	return {
		type: EXPAND_ALL_SETS
	}
}

export function contractAllSets() {
	return {
		type: CONTRACT_ALL_SETS
	}
}

// Set of Factions
export function selectSetFactions(setId) {
	return {
		type: SELECT_SET_FACTIONS,
		setId
	}
}

export function deselectSetFactions(setId) {
	return {
		type: DESELECT_SET_FACTIONS,
		setId
	}
}

// All Factions
export function selectAllFactions() {
	return {
		type: SELECT_ALL_FACTIONS
	}
}

export function deselectAllFactions() {
	return {
		type: DESELECT_ALL_FACTIONS
	}
}

// Single Faction
export function selectFaction(id) {
	return {
		type: SELECT_FACTION,
		id
	}
}

export function deselectFaction(id) {
	return {
		type: DESELECT_FACTION,
		id
	}
}

let allSetsList = () => createArrayFromRange(sets.length)
let allFactionsList = () => createArrayFromRange(factions.length)

const initialState = {
	numberOfPlayers: 2,
	numberOfFactions: 4, // Should always be 2 times player count
	expandedSetIds: [],
	selectedFactionIds: allFactionsList(),
}
export const getFactionsInitialState = () => initialState

const minNumberOfPlayers = 2
const maxNumberOfPlayers = 9

export default (state = initialState, action) => {
	const { type, id, setId, numberOfPlayers } = action
	const { expandedSetIds, selectedFactionIds } = state

	let newSelectedFactionIds
	let newExpandedSetIds
	let set

	switch (type) {
		case UPDATE_PLAYERS_COUNT: {
			const playersCount = Math.min(Math.max(numberOfPlayers, minNumberOfPlayers), maxNumberOfPlayers)

			return {
				...state,
				numberOfPlayers: playersCount,
				numberOfFactions: playersCount*2
			}
		}

		case EXPAND_SET:
			return {
				...state,
				setId,
				expandedSetIds: [
					...expandedSetIds,
					!expandedSetIds.includes(setId) && setId
				]
			}

		case EXPAND_ALL_SETS:
			return {
				...state,
				setId: null,
				expandedSetIds: allSetsList()
			}

		case CONTRACT_SET: {
			const setIdIndex = expandedSetIds && expandedSetIds.indexOf(setId)

			newExpandedSetIds = expandedSetIds ? [ ...expandedSetIds ] : []

			if (setIdIndex || setIdIndex === 0) {

				// If this is the only faction, we'll just reinitialize the entire array
				if (expandedSetIds.length === 1) {
					newExpandedSetIds = []
				} else if (setIdIndex === 0) {
					newExpandedSetIds = [
						...expandedSetIds.slice(1, expandedSetIds.length)
					]
				} else {
					newExpandedSetIds = [
						...expandedSetIds.slice(0, setIdIndex),
						...expandedSetIds.slice(setIdIndex + 1, expandedSetIds.length)
					]
				}
			}
		}

			return {
				...state,
				setId,
				expandedSetIds: newExpandedSetIds
			}

		case CONTRACT_ALL_SETS:
			return {
				...state,
				setId: null,
				expandedSetIds: []
			}

		case SELECT_FACTION:
			return {
				...state,
				id,
				selectedFactionIds: [
					...selectedFactionIds,
					!selectedFactionIds.includes(id) && id
				]
			}

		case SELECT_SET_FACTIONS:
			set = sets[setId]
			newSelectedFactionIds = [...selectedFactionIds]

			for (let i = 0; i < set.decks.length; i++) {
				const { id } = set.decks[i]
				!selectedFactionIds.includes(id) && newSelectedFactionIds.push(id)
			}

			return {
				...state,
				setId,
				selectedFactionIds: newSelectedFactionIds
			}

		case SELECT_ALL_FACTIONS:
			return {
				...state,
				id: null,
				selectedFactionIds: allFactionsList()
			}

		case DESELECT_FACTION: {
			const factionIdIndex = selectedFactionIds && selectedFactionIds.indexOf(id)

			newSelectedFactionIds = selectedFactionIds ? [ ...selectedFactionIds ] : []

			if (factionIdIndex || factionIdIndex === 0) {

				// If this is the only faction, we'll just reinitialize the entire array
				if (selectedFactionIds.length === 1) {
					newSelectedFactionIds = []
				} else if (factionIdIndex === 0) {
					newSelectedFactionIds = [
						...selectedFactionIds.slice(1, selectedFactionIds.length)
					]
				} else {
					newSelectedFactionIds = [
						...selectedFactionIds.slice(0, factionIdIndex),
						...selectedFactionIds.slice(factionIdIndex + 1, selectedFactionIds.length)
					]
				}
			}

			return {
				...state,
				id,
				selectedFactionIds: newSelectedFactionIds
			}
		}

		case DESELECT_SET_FACTIONS:
			set = sets[setId]
			newSelectedFactionIds = [...selectedFactionIds]

			for (let i = 0; i < set.decks.length; i++) {
				const { id } = set.decks[i]
				selectedFactionIds.includes(id) && newSelectedFactionIds.splice(newSelectedFactionIds.indexOf(id), 1)
			}

			return {
				...state,
				setId,
				selectedFactionIds: newSelectedFactionIds
			}

		case DESELECT_ALL_FACTIONS:
			return {
				...state,
				id: null,
				selectedFactionIds: []
			}

		default:
			return state
	}
}
