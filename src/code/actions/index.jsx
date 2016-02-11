export const ADD_FACTION = 'ADD_FACTION'
export const REMOVE_FACTION = 'REMOVE_FACTION'

export const ADD_ALL_FACTIONS = 'ADD_ALL_FACTIONS'
export const REMOVE_ALL_FACTIONS = 'REMOVE_ALL_FACTIONS'

export const ADD_RANDOM_DECK = 'ADD_RANDOM_DECK'
export const RESET_RANDOM_DECKS = 'RESET_RANDOM_DECKS'

// Single Item
export function addFaction(id) {
	return {
		type: ADD_FACTION,
		id
	}
}

export function removeFaction(id) {
	return {
		type: REMOVE_FACTION,
		id
	}
}

// All Items
export function addAllFactions() {
	return {
		type: ADD_ALL_FACTIONS
	}
}

export function removeAllFactions() {
	return {
		type: REMOVE_ALL_FACTIONS
	}
}

// Random Items
export function addRandomFaction(id) {
	return {
		type: ADD_RANDOM_FACTION
	}
}

export function resetRandomFaction() {
	return {
		type: RESET_RANDOM_ITEMS
	}
}
