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

		};
	}

	render() {
		return (
			
			<div className="form">
				<div className="arrow-up"></div>
				<div className="form-container">
					<Form 
						// onSubmit={handleSubmit}
					>
						<Form.Group size="lg" controlId="email">
							<Form.Control
								autoFocus
								placeholder="Email or Username"
								type="email"
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
						<Button block size="lg" type="submit">
						Sign in
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}
