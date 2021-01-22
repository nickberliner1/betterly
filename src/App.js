import { Nav } from 'react-bootstrap';
import React from 'react';

import './App.css';
import './components/styles/navbar.css';
import './components/styles/cv.css';
import './components/styles/edit-cv-form.css';

import Cv from './components/Cv';
import MyNavbar from './components/MyNavbar';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Nick'
		}
	}

    handleInput = (e) => {
        this.setState({
            name: e.target.value
        })
    }

	render() {
		return (
			<div className="App">
				<MyNavbar
					handleInput={this.handleInput}
				/>
				<Cv
					name={this.state.name}
				/>
			</div>
		)
	}
}
	
	