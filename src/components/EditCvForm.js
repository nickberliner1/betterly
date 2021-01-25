import React from "react";

import { CirclePicker } from 'react-color';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class EditCvForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			// color: {
			// 	hex: `#fffff`,
			// }
		};
	}

	handleSubmit = (e) => {
		e.preventDefault()
	}

	// handleColorChange = (color) => {
	// 	this.setState({
	// 		color: color.hex
	// 	})
	// }

	render() {
		return (
			
			<div className="form">
				<div className="arrow-up"></div>

				{!this.props.isLoggedIn 
				
				? 

				// Form for if the user is not logged in yet (no validation)
				<div className="form-container">
					<Form 
						id="navbar-form" 
						onSubmit={this.handleSubmit}
					>
						<Form.Group size="lg" controlId="email">
							<Form.Control
								autoFocus
								placeholder="Email or Username"
								type="email"
							/>
						</Form.Group>
						<Form.Group size="lg" controlId="password">
							<Form.Control
								autoFocus
								placeholder="Password"
								type="password"
							/>
						</Form.Group> 
						<Button 
							type="reset"
							block size="lg" 
							onClick={this.props.handleLogin}
						>Sign in</Button>
					</Form>
				</div>

				:
				
				// For for editing the CV after the user logged in 
				<div className="form-container">
					<Form 
						id="navbar-form"
						onSubmit={this.handleSubmit}
					>
						<Form.Group size="lg" controlId="name">
							<Form.Control 
								autoFocus
								onChange={this.props.handleNameInput}
								placeholder="Name"
							></Form.Control>
							<hr />
							<Form.Control 
								autoFocus
								onChange={this.props.handleTitleInput}
								placeholder="Title"
							></Form.Control>
						</Form.Group>
						<hr />
						<h5>Change Background Color</h5>
						<CirclePicker 
							color={this.props.color} 
							onChange={this.props.handleColorChange}
						/>
						<hr />
						<Button
							block size="lg"
							type="submit"
							onClick={this.props.onLoginOpen}
						>Save</Button>
						<Button
							block size="lg"
							type="submit"
							onClick={this.props.handleLogin}
						>Logout</Button>
					</Form>
				</div>

				}

			</div>
		);
	}
}
