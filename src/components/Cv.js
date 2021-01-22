import React from 'react';

export default class Cv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="cv-container">
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}