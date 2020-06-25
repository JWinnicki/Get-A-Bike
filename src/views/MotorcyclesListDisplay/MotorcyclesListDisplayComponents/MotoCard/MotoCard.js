import React from 'react';
import {Link} from 'react-router-dom';

import styles from './MotoCard.module.scss';

const MotoCard = ({
    image,
    name,
    subType,
    type,
    power,
    engineSize
}) => (
        <div className={styles.MotoCard}>
            <div className={styles.MotoCardImgContainer}>
                <img className={styles.MotoCardImg} src={image} alt='moto' />
            </div>
             <div className={styles.MotoCardTitleContainer}>
                <h3 className={styles.MotoCardTitleText}>{name}</h3>
            </div>
            <div className={styles.MotoCardDescription}>
                <p className={styles.MotoCardDescriptionText}>Type: {subType !== null ? `${type} / ${subType}`:`${type}`}</p>
                <p className={styles.MotoCardDescriptionText}>Engine size: {engineSize} cm<sup>3</sup></p>
                <p className={styles.MotoCardDescriptionText}>Power: {power} hp</p>
            </div>
            <Link className={styles.MotoCardButton} to={`/rent/${name}`}>RENT NOW</Link>
        </div>
    );

export default MotoCard;