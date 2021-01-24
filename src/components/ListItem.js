import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ListItem(props) {
    
    return (
        <>
            <li>
                {props.value}
            </li>
        </>
    )
}

export default ListItem;