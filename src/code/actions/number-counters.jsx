export const INIT_COUNTER = 'INIT_COUNTER'
export const REMOVE_COUNTER = 'REMOVE_COUNTER'
export const REMOVE_COUNTERS = 'REMOVE_COUNTERS'
export const CHANGE_COUNTER_VALUE = 'CHANGE_COUNTER_VALUE'
export const CHANGE_COUNTER_ROTATION = 'CHANGE_COUNTER_ROTATION'

export function initCounter(id) {
	return {
		type: INIT_COUNTER,
		id
	}
}

export function resetCounter(id) {
	return {
		type: INIT_COUNTER,
		id
	}
}

export function removeCounter(id) {
	return {
		type: REMOVE_COUNTER,
		id
	}
}

export function removeCounters(ids = []) {
	return {
		type: REMOVE_COUNTERS,
		ids
	}
}

export function incrementCounter(id, value = 0, interval = 1) {
	return {
		type: CHANGE_COUNTER_VALUE,
		style: 'incremented',
		id,
		value: value + interval,
	}
}

export function decrementCounter(id, value = 0, interval = 1) {
	return {
		type: CHANGE_COUNTER_VALUE,
		style: 'decremented',
		id,
		value: value - interval,
	}
}

export function rotateCounter(id, currentRotation, interval = 0) {
	return {
		type: CHANGE_COUNTER_ROTATION,
		style: 'rotated',
		id,
		rotation: (currentRotation + interval) % 1080,
	}
}
