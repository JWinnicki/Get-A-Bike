import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({togglePath}) => {

    const [showMenu, setShowMenu] = useState(false);

    const onClickHandler = () => {
        setShowMenu(prev => !prev)
    }

    return(
        <React.Fragment>
            <button onClick={onClickHandler} className={showMenu ? styles.BurgerMenuButtonActive : styles.BurgerMenuButton}>
                <span className={styles.BurgerMenuButtonContent}></span>
            </button>
            <div onClick={onClickHandler} className={showMenu ? styles.BurgerMenuActive : styles.BurgerMenu}>
                <button className={styles.BurgerMenuListButton}>
                    <span className={styles.BurgerMenuListButtonContent}></span>
                </button>
                <ul className={styles.BurgerMenuList}>
                    <li className={styles.BurgerMenuListItem}><Link className={styles.BurgerMenuListItemLink} to='/'>Home</Link></li>
                    <li className={styles.BurgerMenuListItem}><Link className={styles.BurgerMenuListItemLink} to='/motorcycles'>Motorcycles</Link></li>
                    <li className={styles.BurgerMenuListItem}><Link className={styles.BurgerMenuListItemLink} to='/check_if_available'>Check If Available</Link></li>
                    <li className={styles.BurgerMenuListItem}><Link className={styles.BurgerMenuListItemLink} to='/cities'>Cities</Link></li>
                    <li className={styles.BurgerMenuListItem}><Link className={styles.BurgerMenuListItemLink} to='/offer'>Offer</Link></li>
                    <li className={styles.BurgerMenuListItem}><Link className={styles.BurgerMenuListItemLink} to={togglePath}>{togglePath === '/login' ? 'Log In' : 'Profile'}</Link></li>
                 </ul>
            </div>
        </React.Fragment>
    );
}

export default BurgerMenu;