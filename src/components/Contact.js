import React, { useState } from 'react';
import ListItem from './ListItem';
import Button from 'react-bootstrap/Button';

const Contact = (props) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div>
            {
                props.contact &&
                props.contact.map((contact, index) => {
                    return (
                        <>
                            <ListItem 
                                key={index} 
                                value={contact}
                            />
                            {edit ? 
                            <Button onClick={() => {
                                props.handleDeleteContact(index)
                            }}>Delete</Button>
                            : null }
                        </>
                    )
                })
            }
            <Button onClick={handleEdit}>{edit ? 'Done' : 'Add Contact'}</Button>
            {edit ? 
            <>
                <Button onClick={props.handleAddContact}>Save</Button>
                <input
                    name="add-contact"
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

export default Contact;
