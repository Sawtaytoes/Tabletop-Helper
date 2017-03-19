import test from 'tape-catch'

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
} from 'ducks/number-counters'

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


// ---------------------------------
// Init
// ---------------------------------

test('Init Counter', t => {
	const testRun = new TestRun(t)

	testRun.initCounter(0)

	t.end()
})


// ---------------------------------
// Reset
// ---------------------------------

test('Reset Counter', t => {
	const testRun = new TestRun(t)

	testRun.initCounter(0)
	testRun.resetCounter(0)

	t.end()
})


// ---------------------------------
// Remove
// ---------------------------------

test('Remove Counter', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.initCounter(0)
	testRun.removeCounter(0)

	t.end()
})

test('Remove Counters', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.initCounter(0)
	testRun.initCounter(1)
	testRun.initCounter(2)
	testRun.initCounter(3)

	testRun.removeCounters([0, 1, 3])
	t.ok(testRun.hasCounter(2), "CounterId 2 should exist.")

	t.end()
})


// ---------------------------------
// Increment
// ---------------------------------

test('Increment by 0', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.incrementCounter({
		...options,
		interval: 0,
		initialValue: 2,
		expectedValue: 2,
	})

	t.end()
})

test('Increment by 1', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.incrementCounter({
		...options,
		interval: 1,
		initialValue: 6,
		expectedValue: 7,
	})

	t.end()
})

test('Increment by 5', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.incrementCounter({
		...options,
		interval: 5,
		initialValue: 7,
		expectedValue: 12,
	})

	t.end()
})

test('Increment by 100', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.incrementCounter({
		...options,
		interval: 100,
		initialValue: 2,
		expectedValue: 102,
	})

	t.end()
})


// ---------------------------------
// Decrement
// ---------------------------------

test('Decrement by 0', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.decrementCounter({
		...options,
		interval: 0,
		initialValue: 2,
		expectedValue: 2,
	})

	t.end()
})

test('Decrement by 1', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.decrementCounter({
		...options,
		interval: 1,
		initialValue: 7,
		expectedValue: 6,
	})

	t.end()
})

test('Decrement by 5', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.decrementCounter({
		...options,
		interval: 5,
		initialValue: 12,
		expectedValue: 7,
	})

	t.end()
})

test('Decrement by 100', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.decrementCounter({
		...options,
		interval: 100,
		initialValue: 102,
		expectedValue: 2,
	})

	t.end()
})


// ---------------------------------
// Rotation
// ---------------------------------

test('Rotate by 0', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.rotateCounter({
		...options,
		interval: 0,
		initialRotation: 360,
		expectedRotation: 360,
	})

	testRun.rotateCounter({
		...options,
		interval: 0,
		initialRotation: 1080,
		expectedRotation: 0,
	})

	t.end()
})

test('Rotate by 1', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.rotateCounter({
		...options,
		interval: 1,
		initialRotation: 0,
		expectedRotation: 1,
	})

	testRun.rotateCounter({
		...options,
		interval: 1,
		initialRotation: 6,
		expectedRotation: 7,
	})

	t.end()
})

test('Rotate by 5', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.rotateCounter({
		...options,
		interval: 5,
		initialRotation: 0,
		expectedRotation: 5,
	})

	testRun.rotateCounter({
		...options,
		interval: 5,
		initialRotation: 12,
		expectedRotation: 17,
	})

	t.end()
})

test('Rotate by 90', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.rotateCounter({
		...options,
		interval: 90,
		initialRotation: 0,
		expectedRotation: 90,
	})

	testRun.rotateCounter({
		...options,
		interval: 90,
		initialRotation: 340,
		expectedRotation: 430,
	})

	t.end()
})

test('Rotate by -90', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.rotateCounter({
		...options,
		interval: -90,
		initialRotation: -45,
		expectedRotation: -135,
	})

	t.end()
})

test('Rotate by 180', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.rotateCounter({
		...options,
		interval: 180,
		initialRotation: 180,
		expectedRotation: 360,
	})

	testRun.rotateCounter({
		...options,
		interval: 180,
		initialRotation: 1080,
		expectedRotation: 180,
	})

	t.end()
})

test('Rotate by -360', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.rotateCounter({
		...options,
		interval: -360,
		initialRotation: -135,
		expectedRotation: -495,
	})

	t.end()
})

test('Rotate by -1080', t => {
	const options = TestRun.getVars()
	const testRun = new TestRun(t)

	testRun.rotateCounter({
		...options,
		interval: -1080,
		initialRotation: -135,
		expectedRotation: -135,
	})

	t.end()
})
