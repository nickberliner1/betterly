import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");

// 	function validateForm() {
// 		return email.length > 0 && password.length > 0;
// 	}

// 	function handleSubmit(event) {
// 		event.preventDefault();
// 	}

export default class EditCvForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signedIn: false
		};
		this.handleSignIn = this.handleSignIn.bind(this);
	}

	handleSignIn() {
		this.setState(prevState => ({
			signedIn: !prevState.signedIn
		}))
	}

	render() {
		return (
			
			<div className="form">
				<div className="arrow-up"></div>

				{!this.state.signedIn ?  

				<div className="form-container">
					<Form 
						// onSubmit={handleSubmit}
					>
						<Form.Group size="lg" controlId="email">
							<Form.Control
								autoFocus
								placeholder="Email or Username"
								type=""
								// value={email}
							/>
						</Form.Group>
						<Form.Group size="lg" controlId="password">
							<Form.Control
								placeholder="Password"
								type="password"
								// value={password}
							/>
						</Form.Group> 
						<Button 
							block size="lg" 
							// type="submit"
							onClick={this.handleSignIn}
						>Sign in</Button>
					</Form>
				</div>

				:

				<div className="form-container">
					<Form>
						<Form.Group size="lg" controlId="name">
							<Form.Control 
								autoFocus
								autoCapitalize
								placeholder="Enter the Name"
							/>
						</Form.Group>
						<Button
							block size="lg"
							onClick={this.props.onLoginOpen}
						>Save</Button>
					</Form>
				</div>

				}

			</div>
		);
	}
}
