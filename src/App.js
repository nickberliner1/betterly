import React from 'react';

import Cv from './components/Cv';
import MyNavbar from './components/MyNavbar';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			name: 'Nick Berliner',
			experience: [
							`Freelance Front-End Developer`,
							`Intern Developer`,
							`Brand Specialist`
						]
		}
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin() {
		this.setState(prevState => ({
			isLoggedIn: !prevState.isLoggedIn,
			email: "",
			password: ""
		}))
		let getForm = document.getElementsByName("login-form");
		getForm[0].reset();
	}

    handleNameInput = (e) => {
        this.setState({
            name: e.target.value
        })
	}
	
	handleExperienceInput = (index, e) => {
		// Make a copy of experience
		let updatedExperience = [...this.state.experience];
		
		// Update with modified input
		updatedExperience[index] = e.target.value;

		// Update state
        this.setState({
            experience: updatedExperience
        })
    }

	render() {
		return (
			<div className="App">
				<MyNavbar
					handleNameInput={this.handleNameInput}
					handleExperienceInput={this.handleExperienceInput}
					isLoggedIn={this.state.isLoggedIn}
					handleLogin={this.handleLogin}
				/>
				<Cv
					name={this.state.name}
					experience={this.state.experience}
					isLoggedIn={this.state.isLoggedIn}
				/>
			</div>
		)
	}
}
	
	