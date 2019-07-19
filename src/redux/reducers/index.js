import { connectRouter  } from 'connected-react-router'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import test from './test'

const rootReducers = (history) => combineReducers({
  test,
  router: connectRouter(history),
})

export default rootReducers
