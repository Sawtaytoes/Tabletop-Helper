import {
	contextMenuClosed,
	CHANGE_CONTEXT_MENU_VISIBILITY,
} from 'actions/context-menu'

const initialState = {
	value: contextMenuClosed,
	visible: false
}

export default (state = initialState, action) => {
	const { type, value, visible } = action

	switch (type) {
	case CHANGE_CONTEXT_MENU_VISIBILITY:
		return {
			...state,
			value,
			visible,
		}

	default:
		return state
	}
}
