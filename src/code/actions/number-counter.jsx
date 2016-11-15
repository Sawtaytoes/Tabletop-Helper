export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const DECREASE_COUNTER = 'DECREASE_COUNTER'

export function increaseCounter(id, value = 0, interval = 1) {


	return {
		type: INCREASE_COUNTER,
		id,
		value: value + interval
	}
}

export function decreaseCounter(id, value = 0, interval = 1) {


	return {
		type: DECREASE_COUNTER,
		id,
		value: value - interval
	}
}
