import React from 'react';

import { Button, Form, FormGroup, Label, Input, Col, CustomInput, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarkerAlt, faBell, faFileAlt, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';

import config_data from '../antarctica-data.json';

class CreateRole extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			is_visible: false
		}
	}

	handleNextPage = () => {
		this.setState({
			is_visible: !this.state.is_visible
		})
	}

	render(){
		let { is_visible } = this.state;
		let access_points = config_data.access_points;
		let access_points_data = access_points.map((item, index) => {
			return(
				<tr key={index}>
					<td>
						{item.iconName === "faHome" ?
							<span><FontAwesomeIcon icon={faHome} /></span>
						: item.iconName === "faMapMarkerAlt" ?
							<span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
						: item.iconName === "faBell" ?
							<span><FontAwesomeIcon icon={faBell} /></span>
						: item.iconName === "faFileAlt" ?
							<span><FontAwesomeIcon icon={faFileAlt} /></span>
						: item.iconName === "faChartBar" ?
							<span><FontAwesomeIcon icon={faChartBar} /></span>
						: item.iconName === "faCog" ?
							<span><FontAwesomeIcon icon={faCog} /></span>
						: ''
						}
						{item.description}
					</td>
					<td className="text-center"><CustomInput type="checkbox" id={`${item.description}-mobile`} /></td>
					<td className="text-center"><CustomInput type="checkbox" id={`${item.description}-web`} /></td>
				</tr>
			)
		})

		return(
			<React.Fragment>
				<div className="create-role-section">
					<div className="header">
						<div className="clearfix">
							<div className="float-left">
								<h6>Add role</h6>
							</div>
							<div className="float-right">
								<ul className="list-inline m-0">
									<li className="list-inline-item">
										<Button color="link">Cancel</Button>
									</li>
									<li className="list-inline-item">
										<Button className={`btn-create ${is_visible ? 'active-btn' : ''}`}>Create</Button>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className={`${is_visible ? 'active' : ''} sub-header`}>
						<ul className="list-inline">
							<li className="list-inline-item active">1. Role name</li>
							<li className={`list-inline-item ${is_visible ? 'active' : ''}`}>2. Access points</li>
						</ul>
					</div>

					<div className={`${is_visible ? 'd-none' : ''} form-createrole`}>
						<h6 className="h6 mb-3 font-weight-bold primary_text">1. ROLE NAME</h6>
						<Form>
							<div className="role-type">A</div>
							<FormGroup>
								<Label for="username">Role name</Label>
								<Input type="text" name="username" id="username" placeholder="Admin" bsSize="sm" />
							</FormGroup>
							<Label for="role-stat">Role status</Label>
							<CustomInput type="switch" id="fleet-manager" name="customSwitch" label="Active" />
						</Form>
						<FormGroup className="text-right">
							<Button type="button" className="my-3 primary-btn" onClick={this.handleNextPage}>Next</Button>
						</FormGroup>
					</div>

					<div className={`${is_visible ? '' : 'd-none'} accesspoints-section`}>
						<Col xs="12" md={{ size: 4, offset: 4 }}>
							<h6 className="h6 mb-3 font-weight-bold primary_text">2. ACCESS POINTS</h6>
							<div className="all-user-access-section">
								<Table responsive borderless className="m-0">
									<thead>
										<tr>
											<td>DESCRIPTION</td>
											<td className="text-center">MOBILE</td>
											<td className="text-center">WEB</td>
										</tr>
									</thead>
									<tbody>
										{access_points_data}
									</tbody>
								</Table>
								<div className="clearfix">
									<div className="float-left">
										<Button type="button" className="my-4 btn btn-light" onClick={this.handleNextPage}>Previous</Button>
									</div>
									<div className="float-right">
										<a href="/dashboard/" type="button" className="my-4 btn primary-btn">Create</a>
									</div>
								</div>
							</div>
						</Col>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default CreateRole;