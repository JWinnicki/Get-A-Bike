import React from 'react';

import './Icon.css';
import sprite from './sprite.svg';

const Icon = ({icon, color, size, rotate}) => {
    
    return (
        <svg 
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            className={`icon-${icon} ${color ? color : 'icon'} ${size} ${rotate ? rotate : ''}`}
        >
            <use xlinkHref={`${sprite}#${icon}`} />
        </svg>
    )
}

export default Icon;