// Nav Items
import navItems from './../content/nav-items'

function changePageMetaOnLinkMatch(item, path) {
	let re = new RegExp('(' + item.to + ')'),
		linkMatch = re.test(path)
	if (linkMatch) {
		document.title = item.name + ' – Pulsen'
		document.querySelector('meta[name=description]').content = item.description
	}

	return linkMatch
}

// Change document title on route change
function updateMetaFromNavItems(items, path) {
	return items.some((item) => {
		if (item.subitems) {
			return updateMetaFromNavItems(item.subitems, path)
		}

		return changePageMetaOnLinkMatch(item, path)
	})
}

export default (state = {}, action) => {
	let { type, payload } = action

	switch (type) {
	case '@@router/UPDATE_PATH':
		updateMetaFromNavItems(navItems, payload.path)

	default:
		return state
	}
}
