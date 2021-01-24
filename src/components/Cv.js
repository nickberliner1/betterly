import React from 'react';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';

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
                            <Experience 
                                experience={this.props.experience}
                                onChange={this.props.newInput}
                                handleGeneralInput={this.props.handleGeneralInput}
                                handleAddExperience={this.props.handleAddExperience}
                                handleDeleteExperience={this.props.handleDeleteExperience}
                            />
                    </section>
                    <section className="skills">
                        <h5>Skills</h5>
                            <Skills 
                                skills={this.props.skills}
                                onChange={this.props.newInput}
                                handleGeneralInput={this.props.handleGeneralInput}
                                handleAddSkills={this.props.handleAddSkills}
                                handleDeleteSkills={this.props.handleDeleteSkills}
                            />
                    </section>
                    <section className="education">
                        <h5>Education</h5>
                            <Education
                                education={this.props.education}
                                onChange={this.props.newInput}
                                handleGeneralInput={this.props.handleGeneralInput}
                                handleAddEducation={this.props.handleAddEducation}
                                handleDeleteEducation={this.props.handleDeleteEducation}
                            />
                    </section>
                    <section className="contact">
                        <h5>Contact Info</h5>
                            <Contact 
                                contact={this.props.contact}
                                onChange={this.props.newInput}
                                handleGeneralInput={this.props.handleGeneralInput}
                                handleAddContact={this.props.handleAddContact}
                                handleDeleteContact={this.props.handleDeleteContact}
                            />
                    </section>
                </div>
            </div>
        )
    }
}