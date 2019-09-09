import React from 'react';

import './MainCardsList.css';
import MainCard from '../Main-card/MainCard';

const MainCardsList = props => {
    
    return (
        <div className='MainCardsList'>
            <MainCard text='Motorcyckles' icon='motorcycle' to='/motorcycles' />
            <MainCard text='Offer' icon='money-1' to='/offer' />
            <MainCard text='Locations & Contact' icon='map-pin-empty' to='/cities' />
            <MainCard text='Check if available' icon='timetable' to='/check_if_available' />
        </div>
    )
}

export default MainCardsList;

/* <MainCard text='Motorcyckles' icon='motorcycle' />
            <MainCard text='Offer' icon='money-bag' />
            <MainCard text='Contact' icon='map-pin-full' />
            <MainCard text='Contact' icon='map-pin-empty' />
            <MainCard text='Reviews' icon='review' />
            <MainCard text='Offer' icon='money-bag-2' />
            <MainCard text='Reviews' icon='review-2' />
            <MainCard text='Reviews' icon='review-3' />
            <MainCard text='Reviews' icon='review-1' />
            <MainCard text='Offer' icon='currency' />
            <MainCard text='Offer' icon='coin-stack' />
            <MainCard text='Offer' icon='money-1' />
            <MainCard text='Offer' icon='money' />
            <MainCard text='Offer' icon='coins' /> */