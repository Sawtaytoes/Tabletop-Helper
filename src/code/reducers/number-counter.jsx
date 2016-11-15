import {
	CHANGE_COUNTER,
} from 'actions/number-counter'

export default (state = {}, action) => {
	let { type, id, value } = action

	switch (type) {
	case CHANGE_COUNTER:
		return {
			...state,
			id,
			style,
			value,
		}

	default:
		return state
	}
}
