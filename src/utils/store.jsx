import createBrowserHistory from 'history/createBrowserHistory'
import persistState from 'redux-localstorage'
import { compose, applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from 'ducks'

const initialState = typeof window !== 'undefined' && window.__INITIAL_STATE__
const history = createBrowserHistory()

const middleware = [
	routerMiddleware(history),
]

const enhancer = compose(applyMiddleware(...middleware), persistState([
	'itemHolder',
	'numberCounters',
	'playersCounter',
	'smashUpDecksFilter',
	'smashUpRandomizer',
]))

const store = enhancer(
	window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore
)(rootReducer, initialState)

module.hot && module.hot.accept('ducks', () => {
	store.replaceReducer(require('ducks'))
})

export {
	history,
	store,
}
