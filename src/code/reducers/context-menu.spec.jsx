import test from 'tape-catch'
import TestRun from './context-menu.test'

// Actions
import {
	contextMenuOpened,
	contextMenuClosed
} from 'actions/context-menu'

test('Open Context Menu', t => {
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

	testRun.openContext({
		...options,
		expectedValue: contextMenuOpened,
		expectedVisibility: true,
	})

	t.end()
})

test('Close Context Menu', t => {
	const options = TestRun.getVars(),
		testRun = new TestRun(t)

	testRun.closeContext({
		...options,
		expectedValue: contextMenuClosed,
		expectedVisibility: false,
	})

	t.end()
})
