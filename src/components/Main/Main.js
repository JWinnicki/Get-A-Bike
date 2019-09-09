import React, { Component } from 'react';

import './Main.css';
import MainCardsList from '../MainCardsList/MainCardsList';


class Main extends Component {
    render() {
        return(
            <div className='StartPage'>
                
                <h1 className='Main-title'>Rent your dream motorcyckle!</h1>
                <div className='Main-Cards'>
                    <MainCardsList />
                </div>
            </div>
        );
    }
}
export default Main;