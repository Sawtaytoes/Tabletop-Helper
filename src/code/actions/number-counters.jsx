export const CHANGE_COUNTER_VALUE = 'CHANGE_COUNTER_VALUE'
export const CHANGE_COUNTER_ROTATION = 'CHANGE_COUNTER_ROTATION'

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
		rotation: (currentRotation + interval) % 360,
	}
}
