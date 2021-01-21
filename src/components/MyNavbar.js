import React from 'react';
import EditCvForm from './EditCvForm';

import { Transition } from 'react-transition-group';
import { Button, Navbar } from 'react-bootstrap';

const duration = 120;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  float: `right`,
  zIndex: 5,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

export default function MyNavbar(){
    const [showLogin, setShowLogin] = React.useState(false);
    const onLoginOpen = () => setShowLogin(!showLogin);

    return (
        <div>
            {/* <Navbar  
                collapseOnSelect
                className="my-navbar"
                sticky="top"
            > */}
            <div className="my-navbar">
                <Button 
                    onClick={onLoginOpen}
                    className="login-button"
                >
                    Login
                </Button>
            </div>
            {/* </Navbar> */}

            <div className="login-form-area">
                <Transition in={showLogin} timeout={duration}>

                    {showLogin => (

                        <div style={{
                                ...defaultStyle, 
                                ...transitionStyles[showLogin]
                            }}>
                            <EditCvForm />
                        </div> 
                        
                    )}

                </Transition>
            </div>
        </div>
    )
}