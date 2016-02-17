import cookie from 'react-cookie'

import { compose, createStore } from 'redux'
import { syncReduxAndRouter } from 'redux-simple-router'

import rootReducer from './reducers'
import createBrowserHistory from 'history/lib/createBrowserHistory'

// Merge history with store
const initialState = window.__INITIAL_STATE__ || { factions: cookie.load('factions') }
const history = createBrowserHistory()
const store = compose()(window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(rootReducer, initialState)

module.hot && module.hot.accept('./reducers', () => {
	store.replaceReducer(require('./reducers'))
})

syncReduxAndRouter(history, store)

export {
	history,
	store,
}
