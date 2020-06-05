import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import './RegisterForm.css';
import Icon from '../../../../components/Icon/Icon';
import { auth } from '../../../../store/actions';

const RegisterForm = (/* props,  */{ /// destrukturyzacja props'ów
    values,
    errors,
    touched,
    isSubmitting,
    isRegistered, // to jest mój props
    errorMsg
}) => {

    /* const renderOptional = () => {
        return (
            <div className='RegisterForm-optionalContainer'>
                {<HiddenMessageComponent><p>Fields below are optional. They will be used to automatically update similar fields in renting form. You can update this information any time in your Profile.</p></HiddenMessageComponent>}
                {<p>They will be used to automatically update similar fields in renting form.</p>
                <p>You can update this information any time in your Profile.</p>}
                <div className='RegisterForm-margin'>
                    { errors.name && <p>{errors.name}</p> }
                    <Field type='text' name='name' placeholder='Name (Optional)' className={touched.name && errors.name ? 'RegisterForm-textInput RegisterForm-textInput--error' : 'RegisterForm-textInput'} />
                </div>
                <div>
                    { errors.surname && <p>{errors.surname}</p> }
                    <Field type='text' name='surname' placeholder='Surname (Optional)' className={touched.surname && errors.surname ? 'RegisterForm-textInput RegisterForm-textInput--error' : 'RegisterForm-textInput'} />
                </div>
                <div>
                    { errors.phone && <p>{'Incorrect format'}</p> }
                    <Field type='text' name='phone' placeholder='Phone (Optional)' className={touched.phone && errors.phone ? 'RegisterForm-textInput RegisterForm-textInput--error' : 'RegisterForm-textInput'} />
                </div>
            </div>
        );
    } */

    const renderInformation = () => {
        return (
            <div className='RegisterForm-informationDiv'>
                <div className='RegisterForm-informationIcon'>
                    <Icon size='tiny' icon='information' />
                </div>
                <p>If you are not interested in creating new account feel free to use dummy account (email: test1@test.com, password: test11)</p>
            </div>
        );
    }

    return (
        <Form className='RegisterForm-Form'>
            {renderInformation()}
            {<p className='RegisterForm-errorMsg'>{errorMsg !== null ? errorMsg.replace(/_/g, ' ') : null}</p>}
            <div>
                { touched.email && errors.email && <p className='RegisterForm-errorMsg'>{errors.email}</p> }
                <Field type='email' name='email' placeholder='Email' className={touched.email && errors.email ? 'RegisterForm-textInput RegisterForm-textInput--error' : 'RegisterForm-textInput'} />
            </div>
            <div>
                { touched.password && errors.password && <p className='RegisterForm-errorMsg'>{errors.password}</p> }
                <Field type={isRegistered === true ? 'password' : 'text'} name='password' placeholder='Password' className={touched.password && errors.password ? 'RegisterForm-textInput RegisterForm-textInput--error' : 'RegisterForm-textInput'} />
            </div>
            {/* isRegistered === true ? null : renderOptional() */}
            <div className='RegisterForm-checkboxContainer'>
                <Field type='checkbox' name='allowLocalStorage' checked={values.allowLocalStorage} id='allowLocalStorage' />
                <label htmlFor='allowLocalStorage'>
                    <p className='RegisterForm-checkboxText'>Keep logged-in for 60 minutes. This feature will use local storage.</p>
                </label>
            </div>
            <div className='RegisterForm-btnContainer'>
                <button className='RegisterForm-btn' type='submit' disabled={isSubmitting}>{isRegistered === true ? 'Log In' : 'Create'}</button>
            </div>
            {/* isRegistered === true ? renderInformation() : null */}
        </Form>
    );
}

const FormikRegisterForm = withFormik({
    mapPropsToValues: props => ({
        email: '',
        password: '',
        isRegistered: props.isRegistered,
        name: '',
        surname: '',
        phone: '',
        allowLocalStorage: false,
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email is not valid').required('Email is required!'),
        password: Yup.string().min(6, 'At least 6 digits').required('Password is required!'),
        name: Yup.string().min(2, 'Too short!').max(30, 'Too long!'),
        surname: Yup.string().min(2, 'Too short!').max(30, 'Too long!'),
        phone: Yup.number().min(5, 'At least 5 digits').positive()
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
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