import { compose, applyMiddleware, createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import persistState from 'redux-localstorage'
import createBrowserHistory from 'history/createBrowserHistory'

import rootReducer from 'ducks'
import { getInitialState } from 'utils/initial-state'

const initialState = getInitialState()
const history = createBrowserHistory()
const middlewares = []

const enhancer = compose(applyMiddleware(...middlewares), persistState())

const store = enhancer(
	window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore
)(rootReducer, initialState)

module.hot && module.hot.accept('ducks', () => {
	store.replaceReducer(require('ducks'))
})

syncHistoryWithStore(history, store)

export {
	history,
	store,
}
