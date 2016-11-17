// Utilities
import MockStore from 'mocks/store.mock'
import TestHelper from 'utilities/test-helper'

// Actions
import {
	incrementCounter,
	decrementCounter,
	rotateCounter,
	resetCounter,
	removeCounter,
} from 'actions/number-counters'

class TestRun extends TestHelper {
	static getVars() {
		return {
			store: MockStore.getStore(),
			style: '',
			id: 0,
			rotation: 0,
			value: 0,
		}
	}

	incrementCounter({ store, id, interval, initialValue, expectedValue }) {
		store.dispatch(incrementCounter(id, initialValue, interval))

		let { value } = store.getState().numberCounters[id]

		this.t.equal(value, expectedValue,
			`New value '${value}' should equal '${expectedValue}'.`
		)
	}

	decrementCounter({ store, id, interval, initialValue, expectedValue }) {
		store.dispatch(decrementCounter(id, initialValue, interval))

		let { value } = store.getState().numberCounters[id]

		this.t.equal(value, expectedValue,
			`New value '${value}' should equal '${expectedValue}'.`
		)
	}

	rotateCounter({ store, id, interval, initialRotation, expectedRotation }) {
		store.dispatch(rotateCounter(id, initialRotation, interval))

		let { rotation } = store.getState().numberCounters[id]

		this.t.equal(rotation, expectedRotation,
			`New rotation '${rotation}' should equal '${expectedRotation}'.`
		)
	}

	resetCounter({ store, id }) {
		store.dispatch(resetCounter(id))

		let { rotation, style, value } = store.getState().numberCounters[id]

		const expectedRotation = 0
		this.t.equal(rotation, expectedRotation,
			`New value '${rotation}' should equal '${expectedRotation}'.`
		)

		const expectedStyle = ''
		this.t.equal(style, expectedStyle,
			`New value '${style}' should equal '${expectedStyle}'.`
		)

		const expectedValue = 0
		this.t.equal(value, expectedValue,
			`New value '${value}' should equal '${expectedValue}'.`
		)
	}

	removeCounter({ store, id }) {
		store.dispatch(removeCounter(id))

		let numberCounter = store.getState().numberCounters[id]

		this.t.equal(numberCounter, undefined,
			`Number counter should no longer exist.`
		)
	}
}

export default TestRun
