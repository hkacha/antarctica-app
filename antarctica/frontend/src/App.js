import React from 'react';
import './App.css';

import AppNavigation from './AppNavigation';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

	constructor(props){
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<AppNavigation />
		)
	}
}

export default App;