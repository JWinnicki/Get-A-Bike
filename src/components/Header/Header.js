import React from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Header.module.scss';
import Logo from '../../img/Logos/Logo-second.png';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = ({token}) => {
    
        const togglePath = token === null ? `/login` : `/profile`;

        return (
            <nav>
                <div className={styles.Header}>
                    <div className={styles.HeaderLinksContainer}>
                        <NavLink to='/' exact className={styles.HeaderLink} activeClassName={styles.HeaderLinkActive}>Home</NavLink> 
                        <NavLink to='/motorcycles' className={styles.HeaderLink} activeClassName={styles.HeaderLinkActive}>Motorcycles</NavLink>
                        <NavLink to='/check_if_available' className={styles.HeaderLink} activeClassName={styles.HeaderLinkActive}>Check If Available</NavLink>
                        <NavLink to='/offer' className={styles.HeaderLink} activeClassName={styles.HeaderLinkActive}>Offer</NavLink>
                        <NavLink to='/cities' className={styles.HeaderLink} activeClassName={styles.HeaderLinkActive}>Cities</NavLink>
                        <NavLink to={togglePath} className={styles.HeaderLink} activeClassName={styles.HeaderLinkActive}>{token === null ? `Log In` : `Profile`}</NavLink>
                    </div>
                    <div className={styles.HeaderBurgerMenu}>
                        <BurgerMenu togglePath={togglePath} />
                    </div>
                    <Link className={styles.HeaderLogoContainer} to='/'>
                        <img src={Logo} alt='logo' className={styles.HeaderLogoImage} /> 
                    </Link>
                </div>
            </nav>
        );
    
}

 const mapStateToProps = state => {
     return {
         token: state.auth.token
     }
 }

export default withRouter(connect(mapStateToProps)(Header));

