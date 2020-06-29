import React from 'react';

import styles from  './CityDataComponent.module.scss';
import Icon from '../../../components/Icon/Icon';

const CityDataComponent = ({cityName, street, phone, email}) => (
    <div className={styles.CityDataComponent}>
        <div className={styles.CityDataComponentTitleContainer}>
            <div className={styles.CityDataComponentIconContainer}>
                <Icon icon='map-pin-full' size='small' className='title-svg' />
            </div>
            <div className={styles.CityDataComponentTitle}>
                <h3 className={styles.CityDataComponentTitleText}>{cityName}</h3>
            </div>
        </div>
        <div className={styles.CityDataComponentContent}>
            <p className={styles.CityDataComponentContentText}>Address: {street}</p>
            <p className={styles.CityDataComponentContentText}>Phone: {phone}</p>
            <p className={styles.CityDataComponentContentText}>Email: {email}</p>
        </div>
    </div>
);

export default CityDataComponent;