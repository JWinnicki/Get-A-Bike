import React from 'react';

import styles from './Main.module.scss';
import MainCardsList from './MainCardList/MainCardsList';


const Main = () => (
    <div className={styles.Main}>
        <h1 className={styles.MainTitle}>Rent your dream motorcyckle!</h1>
        <div className={styles.MainCardsContainer}>
            <MainCardsList />
        </div>
    </div>
);

export default Main;