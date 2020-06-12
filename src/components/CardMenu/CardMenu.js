import React from 'react';

import styles from './CardMenu.module.scss';

const CardMenu = ({options, clicked, selected}) => {

    const renderCards = () => {
        return options.map(el => {
            return(
                <li key={el}>
                    <button onClick={() => clicked(el)} className={selected === el ? styles.CardMenuItemButtonActive : styles.CardMenuItemButton}>{el}</button>
                </li>
            );
        })
    }

    return(
        <div className={styles.CardMenu}>
            <ul className={styles.CardMenuList}>
                {renderCards()}
            </ul>
        </div>
    );
}

export default CardMenu;