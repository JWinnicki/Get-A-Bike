import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './LogInContainer.css';
import OptionToggle from '../../components/OptionToggle/OptionToggle';
import RegisterForm from './LogInComponents/RegisterForm/RegisterForm';


class LogInContainer extends React.Component {

    state = {
        isRegistered: true
    }

    toggleForm = value => {
        this.setState({isRegistered: value});
    }

    render() {
        return (
            <div className='LogIn-container'>
                <div className='LogIn-toggle'>
                    <OptionToggle 
                        isRegistered={this.state.isRegistered}
                        toggleForm={this.toggleForm}
                    />
                </div>
                <div className='LogIn-form__container'>
                    <div className='LogIn-form__background'>
                        <RegisterForm isRegistered={this.state.isRegistered} />
                    </div>
                </div>
                {(this.props.token && this.props.userId) && <Redirect to='/' />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(LogInContainer);