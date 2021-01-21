import React from 'react';
import EditCvForm from './EditCvForm';
import Logo from './Logo';

import { Transition } from 'react-transition-group';
import Button from 'react-bootstrap/Button';

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
                {/* <Logo /> */}
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
                            <EditCvForm
                                onLoginOpen={onLoginOpen}
                            />
                        </div> 
                        
                    )}

                </Transition>
            </div>
        </div>
    )
}