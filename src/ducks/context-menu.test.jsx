import test from 'tape-catch'

// Utilities
import MockStore from 'mocks/store.mock'
import TestHelper from 'utilities/test-helper'

// Actions
import {
	openContext,
	closeContext
} from 'ducks/context-menu'

class TestRun extends TestHelper {
	constructor(t) {
		super(t)
		this.store = MockStore.getStore()
	}

	openContext({ expectedValue, expectedVisibility }) {
		this.store.dispatch(openContext())

		let { value, visible } = this.store.getState().contextMenu

		this.t.equal(value, expectedValue,
			`New value '${value}' should equal '${expectedValue}'.`
		)

		this.t.equal(visible, expectedVisibility,
			`New visibility is '${visible}', but it should equal '${expectedVisibility}'.`
		)
	}

	closeContext({ expectedValue, expectedVisibility }) {
		this.store.dispatch(closeContext())

		let { value, visible } = this.store.getState().contextMenu

		this.t.equal(value, expectedValue,
			`New value '${value}' should equal '${expectedValue}'.`
		)

		this.t.equal(visible, expectedVisibility,
			`New visibility is '${visible}', but it should equal '${expectedVisibility}'.`
		)
	}
}

// Actions
import {
	contextMenuOpened,
	contextMenuClosed
} from 'ducks/context-menu'

test('Open Context Menu', t => {
	const testRun = new TestRun(t)

	testRun.openContext({
		expectedValue: contextMenuOpened,
		expectedVisibility: true,
	})

	t.end()
})

test('Close Context Menu', t => {
	const testRun = new TestRun(t)

	testRun.closeContext({
		expectedValue: contextMenuClosed,
		expectedVisibility: false,
	})

	t.end()
})
