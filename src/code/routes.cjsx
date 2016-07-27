`import { Master } from './layouts'`

redirectRoute = (route, nextState, replace) =>
	replace route

module.exports =
	path: '/'
	component: Master
	onEnter: ({ location }, replace) =>
		if location.pathname == '/'
			replace '/game'
	childRoutes: [

		# Redirects
		path: 'about'
		onEnter: redirectRoute.bind null, '/game'
	,
		path: 'credits'
		onEnter: redirectRoute.bind null, '/dev-team'
	,
		path: 'dancemats'
		onEnter: redirectRoute.bind null, '/dance-pads'
	,
		path: 'dlc'
		onEnter: redirectRoute.bind null, '/dlc/pulsen-souleye'
	,
		path: 'faqs'
		onEnter: redirectRoute.bind null, '/faq'
	,
		path: 'manual'
		onEnter: redirectRoute.bind null, '/faq'
	,
		path: 'media'
		onEnter: redirectRoute.bind null, '/game'
	,
		path: 'news'
		onEnter: redirectRoute.bind null, '/game'
	,
		path: 'press'
		onEnter: redirectRoute.bind null, '/press-kit'
	,
		path: '**/'
		onEnter: ({ location }, replace) =>
			replace(location.pathname.slice 0, -1)
	,

		# Routes
		path: 'game'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/game'
	,
		path: 'dlc'
		childRoutes: [
			path: 'pulsen-souleye'
			getComponent: (location, cb) =>
				require.ensure [], (require) =>
					cb null, require './views/pulsen-souleye'
		,
			path: 'pulsen-community-hopscotch-mix'
			getComponent: (location, cb) =>
				require.ensure [], (require) =>
					cb null, require './views/pulsen-community-hopscotch-mix'
		]
	,
		path: 'dance-pads'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/dance-pads'
	,
		path: 'faq'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/faq'
	,
		path: 'dev-team'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/dev-team'
	,
		path: 'contact'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/contact'
	,
		path: 'press-kit'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/press-kit'
	,
		path: 'video-policy'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/video-policy'
	,
		path: '*'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/404'
	]
