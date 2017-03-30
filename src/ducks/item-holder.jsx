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

const initialState = {}
export const getItemHolderInitialState = () => initialState

let idCounter = 0

export default (state = initialState, action) => {
	const { type, name, id } = action
	const items = { ...state[name] }

	switch (type) {
	case ADD_ITEM:
		items[idCounter] = idCounter
		idCounter += 1

		return {
			...state,
			[name]: items,
		}

	case REMOVE_ITEM:
		delete items[id]

		return {
			...state,
			[name]: items,
		}

	case REMOVE_ALL:
		return {
			...state,
			[name]: {},
		}

	default:
		return state
	}
}
