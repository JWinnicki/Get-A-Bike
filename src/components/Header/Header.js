import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';
import Logo from '../../img/Logos/Logo-second.png';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

class Header extends Component {
    
    selectOption = selectedOption => {
        return this.props.location.pathname.includes(selectedOption) ? true : false;
    }
/* 
                    <Link to='/check_if_available' className={`Header-links__item ${this.selectOption('/check_if_available') ? 'Header-links__item--active' : null}`}>Check If Available</Link> */
    render() {

        let togglePath = this.props.token === null ? `/login` : `/profile`;
        return (
            <div className='Header'>
                <div className='Header-links'>
                    <Link to={togglePath} className={`Header-links__item ${this.selectOption(togglePath) ? 'Header-links__item--active' : null}`}>{this.props.token === null ? `Log In` : `Profile`}</Link>
                    <Link to='/motorcycles' className={`Header-links__item ${this.selectOption('/motorcycles') ? 'Header-links__item--active' : null}`}>Motorcycles</Link>
                    <Link to='/check_if_available' className={`Header-links__item ${this.selectOption('/check_if_available') ? 'Header-links__item--active' : null}`}>Check If Available</Link>
                    <Link to='/offer' className={`Header-links__item ${this.selectOption('/offer') ? 'Header-links__item--active' : null}`}>Offer</Link>
                    <Link to='/cities' className={`Header-links__item ${this.selectOption('/cities') ? 'Header-links__item--active' : null}`}>Cities</Link>
                    <Link to='/' className={`Header-links__item`}>Home</Link>  
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
}

 const mapStateToProps = state => {
     return {
         token: state.auth.token
     }
 }

export default withRouter(connect(mapStateToProps)(Header));