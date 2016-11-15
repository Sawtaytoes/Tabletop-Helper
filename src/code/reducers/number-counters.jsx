import {
	CHANGE_COUNTER_VALUE,
	CHANGE_COUNTER_ROTATION,
} from 'actions/number-counters'

export default (state = {}, action) => {
	const { type, id, rotation, style, value } = action
	let counter

	switch (type) {
	case CHANGE_COUNTER_VALUE:
		counter = {
			...state[id],
			style,
			value,
		}

		return {
			...state,
			[id]: counter,
		}

	case CHANGE_COUNTER_ROTATION:
		counter = {
			...state[id],
			style,
			rotation,
		}

		return {
			...state,
			[id]: counter,
		}

	default:
		return state
	}
}
