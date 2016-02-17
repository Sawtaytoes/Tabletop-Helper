import {
	OPEN_MENU,
	CLOSE_MENU,
	OPEN_SUBMENU,
	CLOSE_SUBMENU
} from 'actions'

export default (state = {}, action) => {
	let { type, menuIsOpen, submenuId, submenuIsOpen } = action

	switch (type) {
	case OPEN_MENU:
		return {
			...state,
			menuIsOpen,
		}

	case CLOSE_MENU:
		return {
			...state,
			menuIsOpen,
			submenuIsOpen,
		}

	case OPEN_SUBMENU:
		return {
			...state,
			menuIsOpen,
			submenuId,
			submenuIsOpen,
		}

	case CLOSE_SUBMENU:
		return {
			...state,
			submenuId,
			submenuIsOpen,
		}

	default:
		return state
	}
}
