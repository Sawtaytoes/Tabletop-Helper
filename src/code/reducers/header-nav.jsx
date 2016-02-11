export default (state = {}, action) => {
	switch (action.type) {
		case 'OPEN_MENU':
			return {
				...state,
				menuIsOpen: action.menuIsOpen,
			}

		case 'CLOSE_MENU':
			return {
				...state,
				menuIsOpen: action.menuIsOpen,
				submenuIsOpen: action.submenuIsOpen,
			}

		case 'OPEN_SUBMENU':
			return {
				...state,
				menuIsOpen: action.menuIsOpen,
				submenuId: action.submenuId,
				submenuIsOpen: action.submenuIsOpen,
			}

		case 'CLOSE_SUBMENU':
			return {
				...state,
				submenuId: action.submenuId,
				submenuIsOpen: action.submenuIsOpen,
			}

		default:
			return state
	}
}
