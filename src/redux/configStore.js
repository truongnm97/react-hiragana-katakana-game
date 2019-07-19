import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import reducers from './reducers' // Or wherever you keep your reducers

const persistConfig = {
  key: 'root',
  storage,
}

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory()

// persisted reducer
const persistedReducer = persistReducer(persistConfig, reducers(history))

// Build the middleware for intercepting and dispatching navigation actions
// thunk
// router middleware
const middleware = [thunk, routerMiddleware(history)]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store
// persist reducer
// middleware
const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(...middleware)))

const persistor = persistStore(store)
// let persistor = persistStore(store, () => store.getState())

export default { store, persistor, history }
