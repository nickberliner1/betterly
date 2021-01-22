import React from 'react';

import Cv from './components/Cv';
import MyNavbar from './components/MyNavbar';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Nick Berliner'
		}
	}

    handleNameInput = (e) => {
        this.setState({
            name: e.target.value
        })
    }

	render() {
		return (
			<div className="App">
				<MyNavbar
					handleNameInput={this.handleNameInput}
				/>
				<Cv
					name={this.state.name}
				/>
			</div>
		)
	}
}
	
	