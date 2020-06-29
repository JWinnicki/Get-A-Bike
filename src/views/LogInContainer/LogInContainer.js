import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import styles from './LogInContainer.module.scss';
import OptionToggle from '../../components/OptionToggle/OptionToggle';
import RegisterForm from './LogInComponents/RegisterForm/RegisterForm';


const LogInContainer = ({token, userId}) => {

    const [isRegistered, setIsRegistered] = useState(true);

    const toggleForm = value => {
        setIsRegistered(value)
    }

    return (
        <div className={styles.LogInContainer}>
            {token && userId && <Redirect to='/' />}
            <div className={styles.LogInContainerToggleContainer}>
                <OptionToggle 
                    isRegistered={isRegistered}
                    toggleForm={toggleForm}
                />
            </div>
            <div className={styles.LogInContainerFormContainer}>
                <div className={styles.LogInContainerFormBackground}>
                    <RegisterForm isRegistered={isRegistered} />
                </div>
            </div>
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