import React from 'react';
import { connect } from 'react-redux';

import './CalendarItem.css';
import { getOrdersOfTheDay } from '../../store/actions/index';

const CalendarItem = props => {
    const onClickHandler = () => {
        
        const dayInfo = {
            selectedDay: props.number,
            selectedMonth: props.selectedMonth,
            selectedYear: props.selectedYear,
            availability: props.available,
            selectedBike: props.selectedBike
        }
        props.onShowDayCard(props.orders, dayInfo);
    }
    return (
        <div onClick={onClickHandler} className={`CalendarItem-container ${props.actual ? '' : 'CalendarItem-container-additional'} ${props.available}`}>
            <span className='CalendarItem-number'>{props.number}</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onShowDayCard: (orders, dayInfo) => dispatch(getOrdersOfTheDay(orders, dayInfo))
    }
}
export default connect(null, mapDispatchToProps)(CalendarItem);