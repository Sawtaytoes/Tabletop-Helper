import {
	UPDATE_PLAYERS_COUNT,
	SELECT_FACTION,
	SELECT_SET_FACTIONS,
	SELECT_ALL_FACTIONS,
	DESELECT_FACTION,
	DESELECT_SET_FACTIONS,
	DESELECT_ALL_FACTIONS
} from 'actions'
import { createArrayFromRange } from 'utilities/array'

// Content
import { sets, factions } from 'content/smash-up-decks'

let allFactionsList = () => {
	return createArrayFromRange(factions.length)
}

const initialState = {
	numberOfPlayers: 2,
	numberOfFactions: 4, // Should always be 2 times player count
	selectedFactionIds: allFactionsList(),
	playerFactionIds: []
},
	minNumberOfPlayers = 2,
	maxNumberOfPlayers = 9


export default (state = initialState, action) => {
	let { id, type, numberOfPlayers } = action,
		{ selectedFactionIds } = state,
		newSelectedFactionIds, set

	switch (type) {
		case UPDATE_PLAYERS_COUNT:
			let playersCount = Math.min(Math.max(numberOfPlayers, minNumberOfPlayers), maxNumberOfPlayers)

			return {
				...state,
				numberOfPlayers: playersCount,
				numberOfFactions: playersCount*2
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
			set = sets[action.setId]
			newSelectedFactionIds = [...selectedFactionIds]

			for (let i = 0; i < set.decks.length; i++) {
				let { id } = set.decks[i]
				!selectedFactionIds.includes(id) && newSelectedFactionIds.push(id)
			}

			return {
				...state,
				setId: action.setId,
				selectedFactionIds: newSelectedFactionIds
			}

		case SELECT_ALL_FACTIONS:
			return {
				...state,
				id: null,
				selectedFactionIds: allFactionsList()
			}

		case DESELECT_FACTION:
			let factionIdIndex = selectedFactionIds && selectedFactionIds.indexOf(id)

			newSelectedFactionIds = selectedFactionIds ? [ ...selectedFactionIds ] : []

			if (factionIdIndex || factionIdIndex == 0) {

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

		case DESELECT_SET_FACTIONS:
			set = sets[action.setId]
			newSelectedFactionIds = [...selectedFactionIds]

			for (let i = 0; i < set.decks.length; i++) {
				let { id } = set.decks[i]
				selectedFactionIds.includes(id) && newSelectedFactionIds.splice(newSelectedFactionIds.indexOf(id), 1)
			}

			return {
				...state,
				setId: action.setId,
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
