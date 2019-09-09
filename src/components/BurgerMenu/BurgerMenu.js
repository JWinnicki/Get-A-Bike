import React from 'react';
import { Link } from 'react-router-dom';

import './BurgerMenu.css';

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
                <button onClick={this.onClickHandler} className={`BurgerMenu-button ${this.state.showMenu ? `BurgerMenu-button--active` : ''}`}>
                    <span className={`BurgerMenu-span ${this.state.showMenu ? `BurgerMenu-span--active` : ''}`}></span>
                </button>
                <div onClick={this.onClickHandler} className={`BurgerMenu-listDiv ${this.state.showMenu ? `BurgerMenu-listDiv--active` : ''}`}>
                    <button onClick={this.onClickHandler} className={`BurgerMenu-listButton ${this.state.showMenu ? `BurgerMenu-listButton--active` : ''}`}>
                        <span className={`BurgerMenu-listSpan ${this.state.showMenu ? `BurgerMenu-listSpan--active` : ''}`}></span>
                    </button>
                    <ul onClick={this.onClickHandler} className='BurgerMenu-list'>
                        <li className='BurgerMenu-item'><Link className={`BurgerMenu-link`} to='/'>Home</Link></li>
                        <li className='BurgerMenu-item'><Link className={`BurgerMenu-link`} to='/motorcycles'>Motorcycles</Link></li>
                        <li className='BurgerMenu-item'><Link className={`BurgerMenu-link`} to='/check_if_available'>Check If Available</Link></li>
                        <li className='BurgerMenu-item'><Link className={`BurgerMenu-link`} to='/cities'>Cities</Link></li>
                        <li className='BurgerMenu-item'><Link className={`BurgerMenu-link`} to='/offer'>Offer</Link></li>
                        <li className='BurgerMenu-item'><Link className={`BurgerMenu-link`} to={this.props.togglePath}>{this.props.togglePath === '/login' ? 'Log In' : 'Profile'}</Link></li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default BurgerMenu;