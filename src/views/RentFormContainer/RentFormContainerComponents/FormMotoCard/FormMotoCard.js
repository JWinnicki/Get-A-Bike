import React from 'react';

import styles from './FormMotoCard.module.scss';

const FormMotoCard = ({image, name, subType, type, engineSize, power}) => (
    <div className={styles.FormMotoCard}>
        <div className={styles.FormMotoCardImgContainer}>
            <img className={styles.FormMotoCardImg} src={image} alt='moto'/>
        </div>
        <div className={styles.FormMotoCardTitleContainer}>
            <h3 className={styles.FormMotoCardTitleText}>{name}</h3>
        </div>
        <div>
            <p className={styles.FormMotoCardDescriptionText}>Type: {subType !== null ? `${type} / ${subType}`:`${type}`}</p>
            <p className={styles.FormMotoCardDescriptionText}>Engine size: {engineSize} cm<sup>3</sup></p>
            <p className={styles.FormMotoCardDescriptionText}>Power: {power} hp</p>
        </div>
    </div>
);

export default FormMotoCard;