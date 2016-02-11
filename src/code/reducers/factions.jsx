import {
	ADD_FACTION,
	ADD_ALL_FACTIONS,
	REMOVE_FACTION,
	REMOVE_ALL_FACTIONS,
	ADD_RANDOM_DECK,
	RESET_RANDOM_DECKS
} from './../actions'
import { createArrayFromRange } from './../utilities/array'

// Content
import { factions } from './../content/smash-up-decks'

let allFactionsList = () => {
	return createArrayFromRange(factions.length)
}, randomFactionsList = () => {
	return {}
}

const initialState = {
	selectedFactionIds: allFactionsList(),
	previousRandomFactionIds: randomFactionsList()
}

export default (state = initialState, action) => {
	let { id } = action

	switch (action.type) {
		case ADD_FACTION:
			return {
				...state,
				id: id,
				selectedFactionIds: [
					...state.selectedFactionIds,
					!state.selectedFactionIds.includes(id) && id
				]
			}

		case ADD_ALL_FACTIONS:
			return {
				...state,
				id: null,
				selectedFactionIds: allFactionsList()
			}

		case REMOVE_FACTION:
			let newselectedFactionIds = selectedFactionIds ? [ ...selectedFactionIds ] : [],
				selectedFactionIds = state.selectedFactionIds,
				factionIdIndex = selectedFactionIds && selectedFactionIds.indexOf(id)

			if (factionIdIndex) {

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

		case REMOVE_ALL_FACTIONS:
			return {
				...state,
				id: null,
				selectedFactionIds: []
			}

		case ADD_RANDOM_DECK:
			return {
				...state,
				previousRandomFactionIds: {
					...state.previousRandomFactionIds,
					id: true
				}
			}
		case RESET_RANDOM_DECKS:
			return {
				...state,
				previousRandomFactionIds: randomFactionsList()
			}

		default:
			return state
	}
}
