`import { Master } from './layouts'`

redirectRoute = (route, nextState, replace) =>
	replace route

module.exports =
	path: '/'
	component: Master
	onEnter: ({ location }, replace) =>
		if location.pathname == '/'
			replace '/randomizer'
	childRoutes: [

		# Redirects
		path: 'randomizer'
		onEnter: redirectRoute.bind null, '/randomizer/smash-up'
	,
		path: '**/'
		onEnter: ({ location }, replace) =>
			replace(location.pathname.slice 0, -1)
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
		path: 'score-keeper'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/score-keeper'
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
