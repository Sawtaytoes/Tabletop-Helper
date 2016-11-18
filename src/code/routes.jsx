import { Master } from './layouts'

const redirectRoute = (route, nextState, replace) => replace(route)

const routes = {
	path: '/',
	component: Master,
	indexRoute: {
		getComponent: (location, cb) => {
			require.ensure([], (require) => cb(null, require('./views/home')))
		},
	},
	childRoutes: [{

		// Redirects
		path: '/randomizer',
		onEnter: redirectRoute.bind(null, '/randomizer/smash-up')
	}, {

		// Remove Trailing Slash
		path: '**/',
		onEnter: ({ location }, replace) => replace(location.pathname.slice(0, -1))
	}, {

		// Routes
		path: '/instructions',
		getComponent: (location, cb) => {
			require.ensure([], (require) => cb(null, require('./views/instructions')))
		},
	}, {

		path: '/instructions/:link',
		getComponent: (location, cb) => {
			require.ensure([], (require) => cb(null, require('./views/instruction')))
		},
	}, {

		path: '/score-keeper',
		getComponent: (location, cb) => {
			require.ensure([], (require) => cb(null, require('./views/score-keeper')))
		},
	}, {

		path: '/randomizer',
		childRoutes: [{
			path: 'smash-up',
			getComponent: (location, cb) => {
				require.ensure([], (require) => cb(null, require('./views/randomizer-smash-up')))
			}
		}]
	}, {

		path: '/about',
		getComponent: (location, cb) => {
			require.ensure([], (require) => cb(null, require('./views/about')))
		},
	}, {

		path: '*',
		getComponent: (location, cb) => {
			require.ensure([], (require) => cb(null, require('./views/404')))
		},
	}],
}

export default routes
