import React from 'react';

import './MainCardsList.css';
import MainCard from '../Main-card/MainCard';

const MainCardsList = props => {
    
    return (
        <div className='MainCardsList'>
            <MainCard text='Motorcycles' icon='motorcycle' to='/motorcycles' />
            <MainCard text='Check if available' icon='timetable' to='/check_if_available' />
            <MainCard text='Offer' icon='money-1' to='/offer' />
            <MainCard text='Locations & Contact' icon='map-pin-empty' to='/cities' />
        </div>
    )
}

export default MainCardsList;