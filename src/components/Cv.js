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
                <div className="cv-header">
                    <h1>{this.props.name}</h1>
                </div>
                <div className="cv-body">
                    <section className="experience">
                        <h4>Experience</h4>
                        <p></p>
                    </section>
                    <section className="skills">
                        <h4>Skills</h4>
                    </section>
                    <section className="education">
                        <h4>Education</h4>
                    </section>
                    <section className="contact">
                        <h4>Contact Info</h4>
                    </section>
                </div>
            </div>
        )
    }
}