import React from 'react';

import './Icon.css';

const Icon = props => {
    
    return (
        <svg className={`icon-${props.icon} ${props.color ? props.color : 'icon'} ${props.size} ${props.rotate ? props.rotate : null}`}>
            <use xlinkHref={`/sprite.svg#${props.icon}`} />
        </svg>
    )
}

export default Icon;