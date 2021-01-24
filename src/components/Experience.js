import React, { useState } from 'react';
import ListItem from './ListItem';
import Button from 'react-bootstrap/Button';

const Experience = (props) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div>
            {
                props.experience &&
                props.experience.map((experience, index) => {
                    return (
                        <>
                            <ListItem 
                                key={index} 
                                value={experience}
                            />
                            <Button onClick={() => {
                                props.handleDeleteExperience(index)
                            }}>Delete</Button>
                        </>
                    )
                })
            }
            <Button onClick={handleEdit}>{edit ? 'Done' : 'Add Experience'}</Button>
            {edit ? 
            <>
                <Button onClick={props.handleAddExperience}>Save</Button>
                <input
                    name="add-experience"
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

export default Experience;




// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// const Experience = (props) => {

//     const [edit, setEdit] = useState(false);

//     const handleEdit = () => {
//         setEdit(true);
//     }

//     const handleSave = () => {
//         setEdit(false);
//     }
//     // const [experienceItem, setExperienceItem] = useState(experience.value);

//     // const handleInput = (e) => {
//     //     setExperienceItem(e.target.value);
//     // }
    
//     return (
//         <div>
//             {
//                 props.experience &&
//                 props.experience.map((experience, index) => {
//                     return (
//                         <li onClick={handleEdit}>
//                                 {edit ? <Form.Control 
//                                     key={index}
//                                     onChange={props.handleExperienceInput}
//                                 ></Form.Control>
//                                 : null}
                            
//                                 {props.experience[index]}
                            
//                         </li>
//                     )
//                 })
//             }

//             {edit ? 
//                 <Button onClick={handleSave}>
//                     Save
//                 </Button> 
//                 : 
//                 null
//             }
//         </div>
//     )
// };

// export default Experience;