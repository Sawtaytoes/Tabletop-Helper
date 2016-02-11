import {
	UPDATE_PLAYERS_COUNT,
	SELECT_FACTION,
	SELECT_ALL_FACTIONS,
	DESELECT_FACTION,
	DESELECT_ALL_FACTIONS,
	ADD_FACTION,
	RESET_FACTIONS
} from './../actions'
import { createArrayFromRange } from './../utilities/array'

// Content
import { factions } from './../content/smash-up-decks'

let allFactionsList = () => {
	return createArrayFromRange(factions.length)
}

const initialState = {
	numberOfPlayers: 2,
	numberOfFactions: 4, // Should always be 2 times player count
	selectedFactionIds: allFactionsList(),
	playerFactionIds: []
}

export default (state = initialState, action) => {
	let { id, type, numberOfPlayers } = action

	switch (type) {
		case UPDATE_PLAYERS_COUNT:
			return {
				...state,
				numberOfPlayers: numberOfPlayers,
				numberOfFactions: numberOfPlayers*2
			}

		case SELECT_FACTION:
			return {
				...state,
				id: id,
				selectedFactionIds: [
					...state.selectedFactionIds,
					!state.selectedFactionIds.includes(id) && id
				]
			}

		case SELECT_ALL_FACTIONS:
			return {
				...state,
				id: null,
				selectedFactionIds: allFactionsList()
			}

		case DESELECT_FACTION:
			let selectedFactionIds = state.selectedFactionIds,
				newselectedFactionIds = selectedFactionIds ? [ ...selectedFactionIds ] : [],
				factionIdIndex = selectedFactionIds && selectedFactionIds.indexOf(id)

			if (factionIdIndex || factionIdIndex == 0) {

				// If this is the only faction, we'll just reinitialize the entire array
				if (selectedFactionIds.length === 1) {
					newselectedFactionIds = []
				} else if (factionIdIndex === 0) {
					newselectedFactionIds = [
						...selectedFactionIds.slice(1, selectedFactionIds.length)
					]
				} else {
					newselectedFactionIds = [
						...selectedFactionIds.slice(0, factionIdIndex),
						...selectedFactionIds.slice(factionIdIndex + 1, selectedFactionIds.length)
					]
				}
			}

			return {
				...state,
				id: id,
				selectedFactionIds: newselectedFactionIds
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
