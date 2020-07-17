import React from 'react';

import { Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {

	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return(
			<React.Fragment>
				<div className="main-section">
					<div className="form-signin">
						<h6 className="h5 mb-3 font-weight-bold primary_text">Sign in</h6>
						<Form>
							<FormGroup>
								<Label for="username">Username</Label>
								<Input type="text" name="username" id="username" placeholder="Username" bsSize="sm" />
							</FormGroup>
							<FormGroup>
								<Label for="password">Password</Label>
								<Input type="password" name="password" id="password" placeholder="Password" bsSize="sm" />
							</FormGroup>
						</Form>
						<FormGroup className="text-right">
							<a href="/dashboard/" className="my-3 btn primary-btn">Submit</a>
						</FormGroup>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Login;