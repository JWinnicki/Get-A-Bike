import React from 'react';

import styles from './CalendarDescription.module.scss';

const CalendarDescription = () => (
    <div className={styles.CheckIfAvailableDescription}>
        <div className={styles.CheckIfAvailableDescriptionContainer}>
            <div className={styles.CheckIfAvailableDescriptionBox}></div>
            <p className={styles.CheckIfAvailableDescriptionText}> - available</p>
        </div>
        <div className={styles.CheckIfAvailableDescriptionContainer}>
            <div className={styles.CheckIfAvailableDescriptionBoxYellow}></div>
            <p className={styles.CheckIfAvailableDescriptionText}> - partly available</p>
        </div>
        <div className={styles.CheckIfAvailableDescriptionContainer}>
            <div className={styles.CheckIfAvailableDescriptionBoxRed}></div>
            <p className={styles.CheckIfAvailableDescriptionText}> - not available</p>
        </div>
    </div>
)

export default CalendarDescription;