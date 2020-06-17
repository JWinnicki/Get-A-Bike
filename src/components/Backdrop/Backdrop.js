import React from 'react';


import styles from './Backdrop.module.scss';

const Backdrop = ({show}) => show && <div className={styles.Backdrop} />


export default Backdrop;