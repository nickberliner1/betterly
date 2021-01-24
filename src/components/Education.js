import React, { useState } from 'react';
import ListItem from './ListItem';
import Button from 'react-bootstrap/Button';

const Education = (props) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div>
            {
                props.education &&
                props.education.map((education, index) => {
                    return (
                        <>
                            <ListItem 
                                key={index} 
                                value={education}
                            />
                            {edit ? 
                            <Button onClick={() => {
                                props.handleDeleteEducation(index)
                            }}>Delete</Button>
                            : null }
                        </>
                    )
                })
            }
            <Button onClick={handleEdit}>{edit ? 'Done' : 'Add Education'}</Button>
            {edit ? 
            <>
                <Button onClick={props.handleAddEducation}>Save</Button>
                <input
                    name="add-education"
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

export default Education;
