import React from 'react';

import './CityDataComponent.css';
import Icon from '../../../components/Icon/Icon';

const CityDataComponent = props => {
    return (
        <div className='CityDataComponent'>
            <div className='card-title'>
                <div className='svg-div'><Icon icon='map-pin-full' size='small' className='title-svg' /></div>
                <div className='title-div'><h3>{props.cityName}</h3></div>
            </div>
            <div className='card-content'>
                <p>Address: {props.street}</p>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        </div>
    );
}

export default CityDataComponent;