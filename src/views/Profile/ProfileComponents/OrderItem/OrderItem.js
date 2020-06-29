import React from 'react';

import styles from './OrderItem.module.scss';
import Icon from '../../../../components/Icon/Icon';

const OrderItem = ({start, end, city, rentalOption, displayDeleteBtn, clicked, orderId, model}) => {
    
    const renderList = () => {
        if(start) {
            return(
                <ul className={styles.OrderItemList}>
                    <li className={styles.OrderItemListItem}>Date: {rentalOption === 'short' ? `${start.startDay > 9 ? start.startDay : `0${start.startDay}`}.${start.startMonth > 9 ? start.startMonth : `0${start.startMonth}`}.${start.startYear}, ${start.startHour > 9 ? `${start.startHour}:00` : `0${start.startHour}:00`}-${end.endHour > 9 ? `${end.endHour}:00` : `0${end.endHour}:00`}` : `${start.startDay > 9 ? start.startDay : `0${start.startDay}`}.${start.startMonth > 9 ? start.startMonth : `0${start.startMonth}`}.${start.startYear}-${end.endDay > 9 ? end.endDay : `0${end.endDay}`}.${end.endMonth > 9 ? end.endMonth : `0${end.endMonth}`}.${end.endYear}`}</li>
                    <li className={styles.OrderItemListItem}>City: {city}</li>
                </ul>
            );
        }
    }

    const renderDeleteBtn = () => {
        if(displayDeleteBtn) {
            return (
                <div className={styles.OrderItemButtonContainer}>
                    <button className={styles.OrderItemButton} onClick={() => clicked(orderId)}>
                        <Icon size='small' icon='delete' color='white'/>
                    </button>
                </div>
            );
        }
    }

    return (
        <div className={styles.OrderItem}>
            <div className={styles.OrderItemContent}>
                <h1>Model: {model}</h1>
                {renderList()}
            </div>
            {renderDeleteBtn()}
        </div>
    );
}

export default OrderItem;
