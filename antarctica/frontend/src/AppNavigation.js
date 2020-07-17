import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateRole from './pages/CreateRole';

class AppNavigation extends React.Component {

	constructor(props){
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/"><Login /></Route>
					<Route exact path="/dashboard/"><Dashboard /></Route>
					<Route exact path="/create-role/"><CreateRole /></Route>
				</Switch>
			</Router>
		)
	}
}

export default AppNavigation;