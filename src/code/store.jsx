// Redux
import { compose, createStore } from 'redux'
import { syncReduxAndRouter } from 'redux-simple-router'
// import { devTools } from 'redux-devtools';
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

import rootReducer from './reducers'
import createBrowserHistory from 'history/lib/createBrowserHistory'

// Merge history with store
const history = createBrowserHistory()
const store = compose()(window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(rootReducer)

module.hot && module.hot.accept('./reducers', () => {
	store.replaceReducer(require('./reducers'))
})

store.dispatch({
	type: 'SUBSCRIBE_REFERENCED',
	store: store,
})

// window.devToolsExtension && store.subscribe(() => {
// 	console.log('---------------------')
// 	console.log('Store STATE', store.getState())
// 	console.log('---------------------')
// })

syncReduxAndRouter(history, store)

export {
	history,
	store,
}
