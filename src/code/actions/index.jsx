export const UPDATE_PLAYERS_COUNT = 'UPDATE_PLAYERS_COUNT'

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
