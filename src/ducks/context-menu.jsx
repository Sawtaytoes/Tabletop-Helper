export const contextMenuOpened = 'opened'
export const contextMenuClosed = 'closed'

export const CHANGE_CONTEXT_MENU_VISIBILITY = 'CHANGE_CONTEXT_MENU_VISIBILITY'

export function openContext() {
	return {
		type: CHANGE_CONTEXT_MENU_VISIBILITY,
		value: contextMenuOpened,
		visible: true,
	}
}

export function closeContext() {
	return {
		type: CHANGE_CONTEXT_MENU_VISIBILITY,
		value: contextMenuClosed,
		visible: false,
	}
}

const initialState = {
	value: contextMenuClosed,
	visible: false
}
export const getContextMenuInitialState = () => initialState

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
