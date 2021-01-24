import React, { useState } from 'react';
import ListItem from './ListItem';
import Button from 'react-bootstrap/Button';

const Skills = (props) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div>
            {
                props.skills &&
                props.skills.map((skills, index) => {
                    return (
                        <>
                            <ListItem 
                                key={index} 
                                value={skills}
                            />
                            {edit ? 
                            <Button onClick={() => {
                                props.handleDeleteSkills(index)
                            }}>Delete</Button>
                            : null }
                        </>
                    )
                })
            }
            <Button onClick={handleEdit}>{edit ? 'Done' : 'Add Skills'}</Button>
            {edit ? 
            <>
                <Button onClick={props.handleAddSkills}>Save</Button>
                <input
                    name="add-skills"
                    type="text"
                    value={props.newInput}
                    onChange={props.handleGeneralInput}
                    placeholder="Add a new role"
                /> 
            </>
            : null}
        </div>
    )
};

export default Skills;
