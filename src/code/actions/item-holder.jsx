export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const REMOVE_ALL = 'REMOVE_ALL'

export function addItem(name) {
	return {
		type: ADD_ITEM,
		name,
	}
}

export function removeItem(name, id) {
	return {
		type: REMOVE_ITEM,
		name,
		id,
	}
}

export function removeItems(name) {
	return {
		type: REMOVE_ALL,
		name,
	}
}
