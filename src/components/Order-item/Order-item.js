import React from 'react';

import './Order-item.css';
import Icon from '../Icon/Icon';

const OrderItem = props => {
    
    const renderList = () => {
        if(props.start) {
            return(
                <ul className='OrderItem-list'>
                    <li className='OrderItem-list--item'>Date: {props.rentalOption === 'short' ? `${props.start.startHour}:00, ${props.start.startDay < 10 ? '0' + props.start.startDay : props.start.startDay}.${props.start.startMonth < 10 ? '0' + props.start.startMonth : props.start.startMonth}.${props.start.startYear}` : `${props.start.startDay < 10 ? '0' + props.start.startDay : props.start.startDay}.${props.start.startMonth < 10 ? '0' + props.start.startMonth : props.start.startMonth}.${props.start.startYear}`} - {props.rentalOption === 'short' ? `${props.end.endHour}:00, ${props.end.endDay < 10 ? '0' + props.end.endDay : props.end.endDay}.${props.end.endMonth < 10 ? '0' + props.end.endMonth : props.end.endMonth}.${props.end.endYear}` : `${props.end.endDay < 10 ? '0' + props.end.endDay : props.end.endDay}.${props.end.endMonth < 10 ? '0' + props.end.endMonth : props.end.endMonth}.${props.end.endYear}`}</li>
                    <li className='OrderItem-list--item'>City: {props.city}</li>
                </ul>
            );
        }
    }

    const renderDeleteBtn = () => {
        if(props.displayDeleteBtn) {
            return (
                <div className='OrderItem-btn--div'>
                    <button className='OrderItem-btn' onClick={() => props.clicked(props.orderId)}>
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
                <h1 className='OrderItem-h1'>Model: {props.model}</h1>
                {renderList()}
            </div>
            {renderDeleteBtn()}
        </div>
    );
}

export default OrderItem;
