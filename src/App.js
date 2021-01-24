import React from 'react';

import Cv from './components/Cv';
import MyNavbar from './components/MyNavbar';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			newInput: '',
			name: 'Nick Berliner',
			title: 'Front-End Developer',
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

	handleTitleInput = (e) => {
		this.setState({
			title: e.target.value
		})
	}

	handleGeneralInput = (e) => {
		this.setState({
			newInput: e.target.value
		})
	}

	handleAddExperience = (e) => {
		this.setState({
			experience: [...this.state.experience, this.state.newInput],
		})
	}

	handleDeleteExperience = (key) => {
		this.state.experience.splice(key, 1);
		this.setState({
			experience: this.state.experience
		})
	}

	render() {
		return (
			<div className="App">
				<MyNavbar
					isLoggedIn={this.state.isLoggedIn}
					handleLogin={this.handleLogin}
					handleNameInput={this.handleNameInput}
					handleTitleInput={this.handleTitleInput}
				/>
				<Cv
					name={this.state.name}
					title={this.state.title}
					experience={this.state.experience}
					isLoggedIn={this.state.isLoggedIn}
					newInput={this.state.newInput}
					handleGeneralInput={this.handleGeneralInput}
					handleAddExperience={this.handleAddExperience}
					handleDeleteExperience={this.handleDeleteExperience}
				/>
			</div>
		)
	}
}
	
	