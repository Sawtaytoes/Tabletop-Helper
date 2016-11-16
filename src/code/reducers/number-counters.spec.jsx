import test from 'tape-catch'
import TestRun from './number-counters.test'


// ---------------------------------
// Increment
// ---------------------------------

test('Increment by 0', t => {
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

	testRun.incrementCounter({
		...options,
		interval: 0,
		initialValue: 2,
		expectedValue: 2,
	})

	t.end()
})

test('Increment by 1', t => {
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

	testRun.incrementCounter({
		...options,
		interval: 1,
		initialValue: 6,
		expectedValue: 7,
	})

	t.end()
})

test('Increment by 5', t => {
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

	testRun.incrementCounter({
		...options,
		interval: 5,
		initialValue: 7,
		expectedValue: 12,
	})

	t.end()
})

test('Increment by 100', t => {
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

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
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

	testRun.decrementCounter({
		...options,
		interval: 0,
		initialValue: 2,
		expectedValue: 2,
	})

	t.end()
})

test('Decrement by 1', t => {
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

	testRun.decrementCounter({
		...options,
		interval: 1,
		initialValue: 7,
		expectedValue: 6,
	})

	t.end()
})

test('Decrement by 5', t => {
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

	testRun.decrementCounter({
		...options,
		interval: 5,
		initialValue: 12,
		expectedValue: 7,
	})

	t.end()
})

test('Decrement by 100', t => {
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

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
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

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
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

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
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

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
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

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
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

	testRun.rotateCounter({
		...options,
		interval: -90,
		initialRotation: -45,
		expectedRotation: -135,
	})

	t.end()
})

test('Rotate by 180', t => {
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

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
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

	testRun.rotateCounter({
		...options,
		interval: -360,
		initialRotation: -135,
		expectedRotation: -495,
	})

	t.end()
})

test('Rotate by -1080', t => {
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

	testRun.rotateCounter({
		...options,
		interval: -1080,
		initialRotation: -135,
		expectedRotation: -135,
	})

	t.end()
})
