import React from 'react';

import './OrderItem.css';
import Icon from '../../../../components/Icon/Icon';

const OrderItem = ({start, end, city, rentalOption, displayDeleteBtn, clicked, orderId, model}) => {
    
    const renderList = () => {
        if(start) {
            return(
                <ul className='OrderItem-list'>
                    <li className='OrderItem-list--item'>Date: {rentalOption === 'short' ? `${start.startDay > 9 ? start.startDay : `0${start.startDay}`}.${start.startMonth > 9 ? start.startMonth : `0${start.startMonth}`}.${start.startYear}, ${start.startHour > 9 ? `${start.startHour}:00` : `0${start.startHour}:00`}-${end.endHour > 9 ? `${end.endHour}:00` : `0${end.endHour}:00`}` : `${start.startDay > 9 ? start.startDay : `0${start.startDay}`}.${start.startMonth > 9 ? start.startMonth : `0${start.startMonth}`}.${start.startYear}-${end.endDay > 9 ? end.endDay : `0${end.endDay}`}.${end.endMonth > 9 ? end.endMonth : `0${end.endMonth}`}.${end.endYear}`}</li>
                    <li className='OrderItem-list--item'>City: {city}</li>
                </ul>
            );
        }
    }

    const renderDeleteBtn = () => {
        if(displayDeleteBtn) {
            return (
                <div className='OrderItem-btn--div'>
                    <button className='OrderItem-btn' onClick={() => clicked(orderId)}>
                        <Icon size='small' icon='delete' color='white' className='OrderItem-btn--icon' />
                    </button>
                </div>
            );
        } else {
            return null;
        }
    }

    return (
        <div className='OrderItem-container'>
            <div className='OrderItem-content'>
                <h1 className='OrderItem-h1'>Model: {model}</h1>
                {renderList()}
            </div>
            {renderDeleteBtn()}
        </div>
    );
}

export default OrderItem;
