// Utilities
import MockStore from 'mocks/store.mock'
import TestHelper from 'utilities/test-helper'

// Actions
import {
	openContext,
	closeContext
} from 'actions/context-menu'

class TestRun extends TestHelper {
	static getVars() {
		return {
			store: MockStore.getStore(),
		}
	}

	openContext({ store, expectedValue, expectedVisibility }) {
		store.dispatch(openContext())

		let { value, visible } = store.getState().contextMenu

		this.t.equal(value, expectedValue,
			`New value '${value}' should equal '${expectedValue}'.`
		)

		this.t.equal(visible, expectedVisibility,
			`New visibility is '${visible}', but it should equal '${expectedVisibility}'.`
		)
	}

	closeContext({ store, expectedValue, expectedVisibility }) {
		store.dispatch(closeContext())

		let { value, visible } = store.getState().contextMenu

		this.t.equal(value, expectedValue,
			`New value '${value}' should equal '${expectedValue}'.`
		)

		this.t.equal(visible, expectedVisibility,
			`New visibility is '${visible}', but it should equal '${expectedVisibility}'.`
		)
	}
}

export default TestRun
