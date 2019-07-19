import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { ConnectedRouter } from 'connected-react-router'

import configStore from './redux/configStore'
import AppNavigation from './views'

const App = () => {
	return (
		<Provider store={configStore.store}>
			<PersistGate persistor={configStore.persistor}>
				<ConnectedRouter history={configStore.history}>
					<AppNavigation history={configStore.history} />
				</ConnectedRouter>
			</PersistGate>
		</Provider>
	)
}

export default App
