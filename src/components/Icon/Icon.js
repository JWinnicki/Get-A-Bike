import React from 'react';

import './Icon.css';
import sprite from './sprite.svg';

const Icon = props => {
    
    return (
        <svg 
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            className={`icon-${props.icon} ${props.color ? props.color : 'icon'} ${props.size} ${props.rotate ? props.rotate : null}`}
        >
            <use xlinkHref={`${sprite}#${props.icon}`} />
        </svg>
    )
}

export default Icon;