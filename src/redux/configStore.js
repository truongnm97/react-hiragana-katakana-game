import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers' // Or wherever you keep your reducers

const persistConfig = {
  key: 'root',
  storage: storage,
}

// persisted reducer
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducers)
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store
// persist reducer
// middleware
const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

const persistor = persistStore(store)
// let persistor = persistStore(store, () => store.getState())

export default { store, persistor }
