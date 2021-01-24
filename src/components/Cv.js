import React from 'react';
import Experience from './Experience';

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
                    <h4>{this.props.title}</h4>
                </div>
                <div className="cv-body">
                    <section className="experience">
                        <h5>Experience</h5>
                        <ul>
                            <Experience 
                                experience={this.props.experience}
                                onChange={this.props.newInput}
                                handleGeneralInput={this.props.handleGeneralInput}
                                handleAddExperience={this.props.handleAddExperience}
                                handleDeleteExperience={this.props.handleDeleteExperience}
                            />
                        </ul>
                    </section>
                    <section className="skills">
                        <h5>Skills</h5>
                    </section>
                    <section className="education">
                        <h5>Education</h5>
                    </section>
                    <section className="contact">
                        <h5>Contact Info</h5>
                    </section>
                </div>
            </div>
        )
    }
}