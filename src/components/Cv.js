import React from 'react';

export default class Cv extends React.Component {
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
            <div>
                <h1>{this.state.name}</h1>
                <input 
                    placeholder="Enter Name"
                    onChange={this.handleInput}
                />
            </div>
        )
    }
}