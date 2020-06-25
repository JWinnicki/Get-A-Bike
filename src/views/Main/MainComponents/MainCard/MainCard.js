import React from 'react';
import {Link} from 'react-router-dom';

import styles from './MainCard.module.scss';
import Icon from '../../../../components/Icon/Icon';

const MainCard = ({to, icon, text}) => {
    
    return (
        <Link className={styles.MainCard} to={to}>
            <div className={styles.MainCardIconContainer}>
                <Icon icon={icon} size='big' />
             </div>
            <h3 className={styles.MainCardText}>{text}</h3>
        </Link>
    )
}

export default MainCard;