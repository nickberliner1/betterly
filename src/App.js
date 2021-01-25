import React from 'react';

import Cv from './components/Cv';
import MyNavbar from './components/MyNavbar';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			color: ``,
			newInput: '',
			name: 'Nick Berliner',
			title: 'Front-End Developer',
			experience: [
				`Freelance Front-End Developer`,
				`Intern Developer`,
				`Brand Specialist`
			],
			skills: [
				`HTML/CSS`,
				`JavaScript`,
				`React`,
				`Vue`
			],
			education: [
				`University of Milan`,
				`OpenClassrooms`
			],
			contact: [
				`+39 347 031 7404`,
				`nickberliner1@gmail.com`
			]
		}
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin() {
		this.setState(prevState => ({
			isLoggedIn: !prevState.isLoggedIn,
		}));
		document.getElementById("navbar-form").reset();
	}

	handleColorChange = (color) => {
		this.setState({
			color: color.hex
		})
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

	handleAddExperience = () => {
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

	handleAddSkills = () => {
		this.setState({
			skills: [...this.state.skills, this.state.newInput],
		})
	}

	handleDeleteSkills = (key) => {
		this.state.skills.splice(key, 1);
		this.setState({
			skills: this.state.skills
		})
	}

	handleAddEducation = () => {
		this.setState({
			education: [...this.state.education, this.state.newInput],
		})
	}

	handleDeleteEducation = (key) => {
		this.state.education.splice(key, 1);
		this.setState({
			education: this.state.education
		})
	}

	handleAddContact = () => {
		this.setState({
			contact: [...this.state.contact, this.state.newInput],
		})
	}

	handleDeleteContact = (key) => {
		this.state.contact.splice(key, 1);
		this.setState({
			contact: this.state.contact
		})
	}

	render() {
		return (
			<div className="App">
				<MyNavbar
					isLoggedIn={this.state.isLoggedIn}
					color={this.state.color}
					handleColorChange={this.handleColorChange}
					handleLogin={this.handleLogin}
					handleNameInput={this.handleNameInput}
					handleTitleInput={this.handleTitleInput}
				/>
				<Cv
					color={this.state.color}
					handleColorChange={this.handleColorChange}
					name={this.state.name}
					title={this.state.title}
					experience={this.state.experience}
					skills={this.state.skills}
					contact={this.state.contact}
					education={this.state.education}
					isLoggedIn={this.state.isLoggedIn}
					newInput={this.state.newInput}
					handleGeneralInput={this.handleGeneralInput}
					handleAddExperience={this.handleAddExperience}
					handleDeleteExperience={this.handleDeleteExperience}
					handleAddEducation={this.handleAddEducation}
					handleDeleteEducation={this.handleDeleteEducation}
					handleAddSkills={this.handleAddSkills}
					handleDeleteSkills={this.handleDeleteSkills}
					handleAddContact={this.handleAddContact}
					handleDeleteContact={this.handleDeleteContact}
				/>
			</div>
		)
	}
}
	
	