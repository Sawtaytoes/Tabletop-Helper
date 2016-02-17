export default (state = {}, action) => {
	let { type, payload } = action

	switch (type) {
	case '@@router/UPDATE_PATH':
		let currentPath = payload.path,
			previousPath = state.currentPath

		if (currentPath !== previousPath) {
			window && window.scroll(0, 0)
		}

		return {
			...state,
			currentPath,
			previousPath
		}

	default:
		return state
	}
}
