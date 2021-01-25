import React, { useState } from 'react';
import ListItem from './ListItem';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';

const Education = (props) => {
    const [edit, setEdit] = useState(false);

    const openEdit = () => {
        setEdit(true);
    }

    const closeEdit = () => {
        setEdit(false);
    }

    return (
        <div>
            {
                props.education &&
                props.education.map((education, index) => {
                    return (
                        <div 
                            className="item"
                            onClick={openEdit}
                        >
                            <ListItem 
                                key={index} 
                                value={education}
                            />
                            {edit ? 
                                <FontAwesomeIcon 
                                    icon={faTrash} 
                                    onClick={() => {
                                        props.handleDeleteEducation(index)
                                    }}
                                    style={{cursor: 'pointer', color: '#ad0000'}} // Red
                                />
                            : null }
                        </div>
                    )
                })
            }
            <div>
                {edit ? 
                <>
                    <div className="edit-options">
                    <FontAwesomeIcon 
                        icon={faCheck} 
                        onClick={closeEdit}
                        style={{cursor: 'pointer', color: '#00ab2b'}} // Green
                    />
                    <div style={{margin: '1.5em'}}></div>
                    <FontAwesomeIcon 
                        icon={faPlus} 
                        onClick={props.handleAddEducation}
                        style={{cursor: 'pointer', color: '#0043de'}} // Blue
                    />
                    </div>
                    <Form.Control
                        autoFocus
                        id="add-items"
                        type="text"
                        value={props.newInput}
                        onChange={props.handleGeneralInput}
                        placeholder="Add Education"
                    ></Form.Control>
                </>
                : 
                null
                }
            </div>
        </div>
    )
};

export default Education;
