import {
	ADD_ITEM,
	REMOVE_ITEM,
	REMOVE_ALL,
} from 'actions/item-holder'

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
