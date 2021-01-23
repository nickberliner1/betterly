import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ListItem(props) {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    return (
        <>
        {edit ? 
            <li>
                <input 
                    type="text" 
                    value={props.value}
                /> 
                <Button onClick={handleEdit}>
                Save
                </Button>
            </li>
        :
            <li onClick={handleEdit} offCl>
                {props.value}
            </li>
        }
        </>
    )
}

export default ListItem;