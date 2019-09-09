import React from 'react';
import { Link } from 'react-router-dom';

import './MainCard.css';
import Icon from '../Icon/Icon';

const MainCard = props => {
    
    return (
        <Link className='MainCard' to={props.to}>
            <div className='icon-div'>
                <Icon icon={props.icon} size='big' />
             </div>
            <h3>{props.text}</h3>
        </Link>
    )
}

export default MainCard;