import React from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';
import Logo from '../../img/Logos/Logo-second.png';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = ({token}) => {
    
        const togglePath = token === null ? `/login` : `/profile`;

        return (
            <div className='Header'>
                <div className='Header-links'>
                    <NavLink to='/' exact className={`Header-links__item`} activeClassName='Header-links__item--active'>Home</NavLink> 
                    <NavLink to='/motorcycles' className={`Header-links__item`} activeClassName='Header-links__item--active'>Motorcycles</NavLink>
                    <NavLink to='/check_if_available' className={`Header-links__item`} activeClassName='Header-links__item--active'>Check If Available</NavLink>
                    <NavLink to='/offer' className={`Header-links__item`} activeClassName='Header-links__item--active'>Offer</NavLink>
                    <NavLink to='/cities' className={`Header-links__item`} activeClassName='Header-links__item--active'>Cities</NavLink>
                    <NavLink to={togglePath} className={`Header-links__item`} activeClassName='Header-links__item--active'>{token === null ? `Log In` : `Profile`}</NavLink>
                </div>
                <div className='Header-burgerMenu'>
                    <BurgerMenu togglePath={togglePath} />
                </div>
                <Link className='Header-logo__div' to='/'>
                    <img src={Logo} alt='logo' className='Header-logo__img' /> 
                </Link>
            </div>
        );
    
}

 const mapStateToProps = state => {
     return {
         token: state.auth.token
     }
 }

export default withRouter(connect(mapStateToProps)(Header));

