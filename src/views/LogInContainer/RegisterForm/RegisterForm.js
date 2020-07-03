import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';

import styles from './RegisterForm.module.scss';
import Icon from '../../../components/Icon/Icon';
import {auth} from '../../../store/actions';
import BasicButton from '../../../components/BasicButton/BasicButton';
import TextInputContainer from '../../../components/TextInputContainer/TextInputContainer';

const RegisterForm = ({
    values,
    errors,
    touched,
    isSubmitting,
    isRegistered,
    errorMsg
}) => {


    return (
        <Form className={styles.RegisterForm}>
            <div className={styles.RegisterFormInformationContainer}>
                <div className={styles.RegisterFormInformationText}>
                    <Icon size='tiny' icon='information' />
                </div>
                <p>If you are not interested in creating new account feel free to use dummy account (email: test1@test.com, password: test11)</p>
            </div>
            <p className={styles.RegisterFormErrorMessage}>{errorMsg !== null && errorMsg.replace(/_/g, ' ')}</p>
            <TextInputContainer name='email' type='email' touched={touched.email} errors={errors.email} placeholder='Email'/>
            <TextInputContainer name='password' type={isRegistered ? 'password' : 'text'} touched={touched.password} errors={errors.password} placeholder='Password'/>
            <div className={styles.RegisterFormCheckboxContainer}>
                <Field type='checkbox' name='allowLocalStorage' checked={values.allowLocalStorage} id='allowLocalStorage' />
                <label htmlFor='allowLocalStorage'>
                    <p className={styles.RegisterFormCheckboxText}>Keep logged-in for 60 minutes. This feature will use local storage.</p>
                </label>
            </div>
            <div className={styles.RegisterFormButtonContainer}>
                <BasicButton type='submit' disabled={isSubmitting}>{isRegistered === true ? 'Log In' : 'Create'}</BasicButton>
            </div>
        </Form>
    );
}

const FormikRegisterForm = withFormik({
    mapPropsToValues: ({isRegistered}) => ({
        email: '',
        password: '',
        isRegistered: isRegistered,
        allowLocalStorage: false,
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email is not valid').required('Email is required!'),
        password: Yup.string().min(6, 'At least 6 digits').required('Password is required!'),
    }),
    handleSubmit(values, {setSubmitting, props}) {
        props.onAuth(values.email, values.password, values.isRegistered, values.allowLocalStorage);
        setSubmitting(false);
    },
    enableReinitialize: true
})(RegisterForm);

const mapStateToProps = state => {
    return {
        errorMsg: state.auth.errorMsg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isRegistered, allowLocalStorage) => dispatch(auth(email, password, isRegistered, allowLocalStorage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormikRegisterForm);