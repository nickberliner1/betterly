import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class EditCvForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			email: '',
			password: ''
		};
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin() {
		this.setState(prevState => ({
			loggedIn: !prevState.loggedIn,
			email: "",
			password: ""
		}))
	}

	render() {
		return (
			
			<div className="form">
				<div className="arrow-up"></div>

				{!this.state.loggedIn 
				
				? 

				// Form for if the user is not logged in yet (no validation)
				<div className="form-container">
					<Form>
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
							onClick={this.handleLogin}
							className="login-button"
						>Sign in</Button>
					</Form>
				</div>

				:
				
				// For for editing the CV after the user logged in 
				<div className="form-container">
					<Form>
						<Form.Group size="lg" controlId="name">
							<Form.Control 
								autoFocus
								onChange={this.props.handleNameInput}
								placeholder="Name"
							></Form.Control>
						</Form.Group>
						<Button
							block size="lg"
							type="submit"
							onClick={this.props.onLoginOpen}
							className="login-button"
						>Save</Button>
					</Form>
				</div>

				}

			</div>
		);
	}
}
