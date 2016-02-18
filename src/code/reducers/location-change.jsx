// Actions
import { UPDATE_PAGE_META } from 'actions'

// Content
import navItems from 'content/nav-items'

let pageMeta = {}

const changePageMetaOnLinkMatch = (item, path) => {
	let re = new RegExp('(' + item.to + ')'),
		linkMatch = re.test(path)

	if (linkMatch) {
		pageMeta = {
			title: item.name,
			description: item.description
		}
	}

	return linkMatch
}

function getMetaFromNavItems(items, path) {
	return items.some((item) => {
		if (item.subitems) {
			return getMetaFromNavItems(item.subitems, path)
		}

		return changePageMetaOnLinkMatch(item, path)
	})
}

function updatePageMeta() {
	let { title, description } = pageMeta

	if (typeof window === 'undefined') {
		return
	}

	title && (document.title = title + ' – Tabletop Helper')
	description && (document.querySelector('meta[name=description]').content = description)
}

function updateScrollPosition() {
	if (typeof window !== 'undefined') {
		window && window.scroll(0, 0)
	}
}

export default (state = {}, action) => {
	let { type, path, payload } = action

	switch (type) {
	case UPDATE_PAGE_META:
		getMetaFromNavItems(navItems, path)
		updatePageMeta()

		return {
			...state,
			title: pageMeta.title,
			description: pageMeta.description
		}

	case '@@router/UPDATE_PATH':
		let currentPath = payload.path,
			previousPath = state.currentPath,
			pathChanged = currentPath !== previousPath

		getMetaFromNavItems(navItems, currentPath)
		updatePageMeta()
		pathChanged && updateScrollPosition()

		return {
			...state,
			currentPath,
			previousPath,
			pathChanged,
			title: pageMeta.title,
			description: pageMeta.description
		}

	default:
		return state
	}
}
