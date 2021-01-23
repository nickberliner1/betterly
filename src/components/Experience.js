import React, { useState } from 'react';
import ListItem from './ListItem';

const Experience = (props) => {
    return (
        <div>
            {
                props.experience &&
                props.experience.map((experience, index) => {
                    return (
                        <ListItem key={index} value={experience} />
                    )
                })
            }
        </div>
    )
};

export default Experience;