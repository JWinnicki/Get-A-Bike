import React from 'react';
import {Field} from 'formik';
import PropTypes from 'prop-types';

import styles from './TextInputContainer.module.scss';

const TextInputContainer = ({name, type, placeholder, touched, errors}) => {

    const renderError = () => {
        if(touched && errors) {
            return <p className={styles.ContainerError}>{errors}</p>
        }
    }

    return (
        <div className={styles.Container}>
            {renderError()}
            <Field className={touched && errors ? styles.ContainerInputError : styles.ContainerInput} name={name} type={type} placeholder={placeholder} />
        </div>
    );
}

TextInputContainer.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
    placeholder: PropTypes.string,
    errors: PropTypes.string,
    touched: PropTypes.bool
}
  
TextInputContainer.defaultProps = {
    type: 'text',
}

export default TextInputContainer;