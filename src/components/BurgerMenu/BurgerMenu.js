import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BurgerMenu.module.scss';

class BurgerMenu extends React.Component {

    state = {
        showMenu: false
    }

    onClickHandler = () => {
        this.setState({showMenu: !this.state.showMenu});
    }
    
    render() {
        return(
            <React.Fragment>
                <button onClick={this.onClickHandler} className={this.state.showMenu ? styles.BurgerMenuButtonActive : styles.BurgerMenuButton}>
                    <span className={styles.BurgerMenuButtonContent}></span>
                </button>
                <div onClick={this.onClickHandler} className={this.state.showMenu ? styles.BurgerMenuActive : styles.BurgerMenu}>
                    <button onClick={this.onClickHandler} className={styles.BurgerMenuListButton}>
                        <span className={styles.BurgerMenuListButtonContent}></span>
                    </button>
                    <ul onClick={this.onClickHandler} className={styles.BurgerMenuList}>
                        <li className={styles.BurgerMenuListItem}><Link className={styles.BurgerMenuListItemLink} to='/'>Home</Link></li>
                        <li className={styles.BurgerMenuListItem}><Link className={styles.BurgerMenuListItemLink} to='/motorcycles'>Motorcycles</Link></li>
                        <li className={styles.BurgerMenuListItem}><Link className={styles.BurgerMenuListItemLink} to='/check_if_available'>Check If Available</Link></li>
                        <li className={styles.BurgerMenuListItem}><Link className={styles.BurgerMenuListItemLink} to='/cities'>Cities</Link></li>
                        <li className={styles.BurgerMenuListItem}><Link className={styles.BurgerMenuListItemLink} to='/offer'>Offer</Link></li>
                        <li className={styles.BurgerMenuListItem}><Link className={styles.BurgerMenuListItemLink} to={this.props.togglePath}>{this.props.togglePath === '/login' ? 'Log In' : 'Profile'}</Link></li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default BurgerMenu;