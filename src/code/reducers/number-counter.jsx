import {
	INCREASE_COUNTER,
	DECREASE_COUNTER,
} from 'actions/number-counter'

export default (state = {}, action) => {
	let { type, id, amount } = action

	switch (type) {
	case INCREASE_COUNTER:
		return {
			...state,
			id,
			amount
		}

	case DECREASE_COUNTER:
		return {
			...state,
			id,
			amount * -1,
		}

	default:
		return state
	}
}
