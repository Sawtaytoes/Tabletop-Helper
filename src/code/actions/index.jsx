export const UPDATE_PLAYERS_COUNT = 'UPDATE_PLAYERS_COUNT'

export const SELECT_FACTION = 'SELECT_FACTION'
export const DESELECT_FACTION = 'DESELECT_FACTION'

export const SELECT_ALL_FACTIONS = 'SELECT_ALL_FACTIONS'
export const DESELECT_ALL_FACTIONS = 'DESELECT_ALL_FACTIONS'

// Players
export function updateNumberOfPlayers(numberOfPlayers) {
	return {
		type: UPDATE_PLAYERS_COUNT,
		numberOfPlayers
	}
}

// Single Item
export function addFaction(id) {
	return {
		type: SELECT_FACTION,
		id
	}
}

export function removeFaction(id) {
	return {
		type: DESELECT_FACTION,
		id
	}
}

// All Items
export function addAllFactions() {
	return {
		type: SELECT_ALL_FACTIONS
	}
}

export function removeAllFactions() {
	return {
		type: DESELECT_ALL_FACTIONS
	}
}
