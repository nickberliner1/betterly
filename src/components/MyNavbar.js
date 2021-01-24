import React from 'react';
import EditCvForm from './EditCvForm';

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

export default function MyNavbar(props){
    const [showLogin, setShowLogin] = React.useState(false);
    const onLoginOpen = () => setShowLogin(!showLogin);

    return (
        <div>
            <div className="my-navbar">
                <Button 
                    onClick={onLoginOpen}
                    className="login-button"
                >
                {!props.isLoggedIn ? 'Log In' : 'Edit CV'}
                </Button>
            </div>

            <div className="login-form-area">
                <Transition in={showLogin} timeout={duration}>

                    {showLogin => (

                        <div style={{
                                ...defaultStyle, 
                                ...transitionStyles[showLogin]
                            }}>
                            <EditCvForm
                                onLoginOpen={onLoginOpen}
                                isLoggedIn={props.isLoggedIn}
                                handleLogin={props.handleLogin}
                                handleNameInput={props.handleNameInput}
                                handleTitleInput={props.handleTitleInput}
                            />
                        </div> 
                        
                    )}

                </Transition>
            </div>
        </div>
    )
}