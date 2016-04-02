`import { Master } from './layouts'`

redirectRoute = (route, nextState, replace) =>
	replace route

module.exports =
	path: '/'
	component: Master
	onEnter: (nextState, replaceState) =>
	onEnter: ({ location }, replace) =>
		if location.pathname == '/'
			replace '/randomizer'
	childRoutes: [

		# Redirects
		path: 'randomizer'
		onEnter: redirectRoute.bind null, '/randomizer/smash-up'
	,

		# Routes
		path: 'instructions'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/instructions'
	,
		path: 'instructions/:link'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/instruction'
	,
		path: 'randomizer'
		childRoutes: [
			path: 'smash-up'
			getComponent: (location, cb) =>
				require.ensure [], (require) =>
					cb null, require './views/randomizer-smash-up'
		]
	,
	# 	path: 'contact'
	# 	getComponent: (location, cb) =>
	#		require.ensure [], (require) =>
	# 			cb null, require './views/contact'
	# ,
		path: '*'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/404'
	]
