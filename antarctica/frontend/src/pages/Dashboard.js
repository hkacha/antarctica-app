import React from 'react';

import profile from '../profile.png';
import { Form, FormGroup, Input, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, CustomInput, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHome, faMapMarkerAlt, faBell, faFileAlt, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';

import config_data from '../antarctica-data.json';

class Dashboard extends React.Component {

	constructor(props){
		super(props);
		this.state = {}
	}

	render(){

		let roles = config_data.roles;
		let user_access = config_data.user_access;
		
		let roles_data = roles.map((item, index) => {
			return (
				<Col className="mb-3" key={index}>
					<Card>
						<CardBody className="text-center">
							<CardTitle>{item.shortname}</CardTitle>
							<CardSubtitle>{item.role_type}</CardSubtitle>
							<CardText>{item.access_points} access points</CardText>
							<ul className="list-inline">
								{
									item.users.map((subitem, subindex) => {
										if(subindex < 4){
											return (
												<li className="list-inline-item mr-0 profile" key={subindex}>
													<img src={profile} alt="" />
												</li>
											)
										}
									})
								}
								<li className="list-inline-item mr-0">
									&nbsp;&nbsp;+{item.users.length - 4} more
								</li>
							</ul>
							<CustomInput type="switch" id="admin" name="customSwitch" label="Active" />
						</CardBody>
					</Card>
				</Col>
			)
		})

		let user_access_data = user_access.map((item, index) => {
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
					<td className="text-center"><CustomInput type="checkbox" id={`${item.description}-supervisor`} /></td>
					<td className="text-center"><CustomInput type="checkbox" id={`${item.description}-super-admin`} /></td>
					<td className="text-center"><CustomInput type="checkbox" id={`${item.description}-fleet-manager`} /></td>
					<td className="text-center"><CustomInput type="checkbox" id={`${item.description}-driver`} /></td>
					<td className="text-center"><CustomInput type="checkbox" id={`${item.description}-admin`} /></td>
				</tr>
			)
		})

		return(
			<div className="main-section">
				<div className="container-fluid px-4">
					<div className="header-section mb-3">
						<div className="clearfix">
							<div className="float-left">
								<h5 className="primary_text mb-1">Active user roles &nbsp;<FontAwesomeIcon icon={faAngleDown} /></h5>
								<h6 className="secondary_text smfont">Total of <span className="primary_text">{roles.length}</span> roles</h6>
							</div>
							<div className="float-right">
								<a href="/create-role/" className="btn btn-light">+ Add role</a>
							</div>
						</div>
					</div>
					<div className="search-section mb-3">
						<Row>
							<Col md={3}>
								<Form>
									<FormGroup>
										<Input type="text" name="username" id="username" placeholder="Search" className="smfont" />
									</FormGroup>
								</Form>
							</Col>
						</Row>
					</div>
					<div className="all-user-section mb-3">
						<Row>
							{roles_data}
						</Row>
					</div>
					<div className="all-user-access-section">
						<h5 className="secondary_text mb-4">All user access</h5>
						<Table responsive borderless className="m-0">
							<thead>
								<tr>
									<td>DESCRIPTION</td>
									<td className="text-center">SUPERVISOR</td>
									<td className="text-center">SUPER ADMIN</td>
									<td className="text-center">FLEET MANAGER</td>
									<td className="text-center">DRIVER</td>
									<td className="text-center">ADMIN</td>
								</tr>
							</thead>
							<tbody>
								{user_access_data}
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard;