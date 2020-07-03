import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import styles from './BasicButton.module.scss';

const BasicButton = ({tag, size, color, children, ...props}) => {
    const tagType = tag === 'link' ? styles.BasicButtonLink : styles.BasicButton;
    const styleArr = [tagType, styles[color], styles[size]].join(' ');

    const renderButton = () => {
        if(tag === 'link') {
            return (
                <Link className={styleArr} {...props}>
                    {children}
                </Link>
            ); 
        } else {
            return (
                <button className={styleArr} {...props}>
                    {children}
                </button>
            );
        }
    }
return renderButton()   
}

BasicButton.propTypes = {
    tag: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.string.isRequired
}
  
BasicButton.defaultProps = {
    tag: 'button',
    color: 'black',
    size: 'medium'
}

export default BasicButton;