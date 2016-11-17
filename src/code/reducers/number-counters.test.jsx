// Utilities
import MockStore from 'mocks/store.mock'
import TestHelper from 'utilities/test-helper'

// Actions
import {
	initCounter,
	resetCounter,
	removeCounter,
	removeCounters,
	incrementCounter,
	decrementCounter,
	rotateCounter,
} from 'actions/number-counters'

class TestRun extends TestHelper {
	static getVars() {
		return {
			style: '',
			id: 0,
			rotation: 0,
			value: 0,
		}
	}

	constructor(t) {
		super(t)
		this.store = MockStore.getStore()
	}

	hasCounter(id) {
		return Boolean(this.store.getState().numberCounters[id])
	}

	getCounter(id) {
		return this.store.getState().numberCounters[id]
	}

	initCounter(id) {
		console.log('this', this);
		this.store.dispatch(initCounter(id))

		let { rotation, style, value } = this.store.getState().numberCounters[id]

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

	resetCounter(id) {
		this.store.dispatch(resetCounter(id))

		let { rotation, style, value } = this.store.getState().numberCounters[id]

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

	removeCounter(id) {
		this.store.dispatch(removeCounter(id))

		let numberCounter = this.store.getState().numberCounters[id]

		this.t.equal(numberCounter, undefined,
			`Number counter should no longer exist.`
		)
	}

	removeCounters(ids) {
		this.store.dispatch(removeCounters(ids))

		const numberCounters = this.store.getState().numberCounters
		Object.keys(numberCounters).forEach(numberCounter => {
			console.log('numberCounter', numberCounter);
			if (!ids.includes(numberCounter.id)) { return }

			this.t.equal(numberCounter, undefined,
				`Number counter should no longer exist.`
			)
		})
	}

	incrementCounter({ id, interval, initialValue, expectedValue }) {
		this.store.dispatch(incrementCounter(id, initialValue, interval))

		const { value } = this.store.getState().numberCounters[id]

		this.t.equal(value, expectedValue,
			`New value '${value}' should equal '${expectedValue}'.`
		)
	}

	decrementCounter({ id, interval, initialValue, expectedValue }) {
		this.store.dispatch(decrementCounter(id, initialValue, interval))

		const { value } = this.store.getState().numberCounters[id]

		this.t.equal(value, expectedValue,
			`New value '${value}' should equal '${expectedValue}'.`
		)
	}

	rotateCounter({ id, interval, initialRotation, expectedRotation }) {
		this.store.dispatch(rotateCounter(id, initialRotation, interval))

		const { rotation } = this.store.getState().numberCounters[id]

		this.t.equal(rotation, expectedRotation,
			`New rotation '${rotation}' should equal '${expectedRotation}'.`
		)
	}
}

export default TestRun
