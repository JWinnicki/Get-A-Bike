import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './LogInContainer.css';
import OptionToggle from '../../components/OptionToggle/OptionToggle';
import RegisterForm from './LogInComponents/RegisterForm/RegisterForm';


const LogInContainer = ({token, userId}) => {

    const [isRegistered, setIsRegistered] = useState(true);

    const toggleForm = value => {
        setIsRegistered(value)
    }

    return (
        <div className='LogIn-container'>
            <div className='LogIn-toggle'>
                <OptionToggle 
                    isRegistered={isRegistered}
                    toggleForm={toggleForm}
                />
            </div>
            <div className='LogIn-form__container'>
                <div className='LogIn-form__background'>
                    <RegisterForm isRegistered={isRegistered} />
                </div>
            </div>
            {(token && userId) && <Redirect to='/' />}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(LogInContainer);