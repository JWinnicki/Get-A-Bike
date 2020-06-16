import React from 'react';
import {Link} from 'react-router-dom';

import './MainCard.css';
import Icon from '../../../../components/Icon/Icon';

const MainCard = ({to, icon, text}) => {
    
    return (
        <Link className='MainCard' to={to}>
            <div className='icon-div'>
                <Icon icon={icon} size='big' />
             </div>
            <h3>{text}</h3>
        </Link>
    )
}

export default MainCard;