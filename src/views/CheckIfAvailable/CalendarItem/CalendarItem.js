import React from 'react';
import {connect} from 'react-redux';

import styles from './CalendarItem.module.scss';
import {getOrdersOfTheDay} from '../../../store/actions';

const CalendarItem = ({number, selectedBike, selectedMonth, selectedYear, available, actual, onShowDayCard, orders}) => {
    
    const onClickHandler = () => {
        const dayInfo = {
            selectedDay: number,
            selectedMonth: selectedMonth,
            selectedYear: selectedYear,
            availability: available,
            selectedBike: selectedBike
        }
        onShowDayCard(orders, dayInfo);
    }

    const style = [actual ? styles.CalendarItem : styles.CalendarItemAdditional, styles[available]].join(' ');

    return (
        <div onClick={onClickHandler} className={style}>
            <span className={styles.CalendarItemText}>{number}</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onShowDayCard: (orders, dayInfo) => dispatch(getOrdersOfTheDay(orders, dayInfo))
    }
}
export default connect(null, mapDispatchToProps)(CalendarItem);