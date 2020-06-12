import React from 'react';

import styles from './OptionToggle.module.scss';

const OptionToggle = ({isRegistered, toggleForm}) => {

    return(
        <div className={styles.OptionToggle}>
            <ul className={styles.OptionToggleList}>
                <li className={styles.OptionToggleListItem}>
                    <button className={isRegistered ? styles.OptionToggleButtonActive : styles.OptionToggleButton} onClick={() => toggleForm(true)}>Log In</button>
                </li>
                <li className={styles.OptionToggleListItem}>
                    <button className={!isRegistered ? styles.OptionToggleButtonActive : styles.OptionToggleButton} onClick={() => toggleForm(false)}>Create Account</button>
                </li>
            </ul>
        </div>
    );
}

export default OptionToggle;