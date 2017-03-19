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

const initialState = {}
export const getNumberCountersInitialState = () => initialState

export default (state = initialState, action) => {
	const { type, id, ids, rotation, style, value } = action
	let nextState, counter

	switch (type) {
	case INIT_COUNTER:
		return {
			...state,
			[id]: {
				rotation: 0,
				style: '',
				value: 0,
			}
		}

	case REMOVE_COUNTER:
		nextState = { ...state }
		delete nextState[id]
		return nextState

	case REMOVE_COUNTERS:
		nextState = { ...state }
		ids.forEach(() => delete nextState[id])
		return nextState

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
