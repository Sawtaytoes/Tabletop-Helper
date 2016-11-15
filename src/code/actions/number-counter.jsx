export const CHANGE_COUNTER = 'CHANGE_COUNTER'

export function incrementCounter(id, value = 0, interval = 1) {
	return {
		type: CHANGE_COUNTER,
		id,
		style: 'incremented',
		value: value + interval
	}
}

export function decrementCounter(id, value = 0, interval = 1) {
	return {
		type: CHANGE_COUNTER,
		id,
		style: 'decremented',
		value: value - interval
	}
}
