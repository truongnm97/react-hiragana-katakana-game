import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './Home'

const AppNavigation = () => (
	<Switch>
		<Route path={'/'} name={'Home'} component={Home}/>
	</Switch>
)

export default AppNavigation