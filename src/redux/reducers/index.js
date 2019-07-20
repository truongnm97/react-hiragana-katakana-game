import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import test from './test'

const rootReducers = history =>
	combineReducers({
		test,
		router: connectRouter(history),
	})

export default rootReducers
