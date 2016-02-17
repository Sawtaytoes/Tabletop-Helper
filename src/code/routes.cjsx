`import { Master } from './layouts'`

redirectRoute = (route, nextState, replaceState) =>
	replaceState null, route

module.exports =
	component: 'div'
	childRoutes: [
		path: '/'
		onEnter: (nextState, replaceState) =>
			if nextState.location.pathname == '/'
				replaceState null, '/randomizer'
		component: Master
		childRoutes: [

			# Redirects
			path: 'randomizer'
			onEnter: redirectRoute.bind null, '/randomizer/smash-up'
		,

			# Routes
			path: 'randomizer'
			childRoutes: [
				path: 'smash-up'
				getComponent: (location, cb) =>
					# require.ensure [], (require) =>
					cb null, require './views/randomizer-smash-up'
			]
		,
		# 	path: 'contact'
		# 	getComponent: (location, cb) =>
		# 		require.ensure [], (require) =>
		# 			cb null, require './views/contact'
		# ,
			path: '*'
			getComponent: (location, cb) =>
				# require.ensure [], (require) =>
				cb null, require './views/404'
		]
	]
