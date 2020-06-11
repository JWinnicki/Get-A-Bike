import React from 'react';

//import './Backdrop.css';
import styles from './Backdrop.module.scss';

const Backdrop = ({show}) => show && <div className={styles.Backdrop} />


export default Backdrop;