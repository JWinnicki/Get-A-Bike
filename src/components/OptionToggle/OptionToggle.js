import React from 'react';

import './OptionToggle.css';

const OptionToggle = props => {

    const toggleToLogIn = () => {
        props.toggleToLogIn()
    }

    const toggleToRegister = () => {
        props.toggleToRegister()
    }

    return(
        <div className='OptionToggle-container'>
            <ul className='OptionToggle-list'>
                <li className='OptionToggle-item'>
                    <button className={props.isRegistered === true ? 'OptionToggle-button OptionToggle-button--active' : 'OptionToggle-button'} onClick={toggleToLogIn} >Log In</button>
                </li>
                <li className='OptionToggle-item'>
                    <button className={props.isRegistered === false ? 'OptionToggle-button OptionToggle-button--active' : 'OptionToggle-button'} onClick={toggleToRegister} >Create Account</button>
                </li>
            </ul>
        </div>
    );
}

export default OptionToggle;