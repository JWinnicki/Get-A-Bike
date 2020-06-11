import React from 'react';

import './DayCard.css';
import Icon from '../../../../components/Icon/Icon';
import BasicButton from '../../../../components/atoms/BasicButton/BasicButton';

const DayCard = props => {
    const { selectedDay, selectedMonth, selectedYear, availability, selectedBike } = props.dayInfo;

    const renderStatus = () => {
        if(availability === 'available') {
            return 'Available';
        } else if(availability === 'partly') {
            return 'Partly Available';
        } else {
            return 'Not Available';
        }
    };

    const renderOrders = () => {
        if(props.orders.length > 0) {
            const sortedArr = props.orders.sort((a, b) => {
                return new Date(a.start.startYear, a.start.startMonth - 1, b.start.startDay, a.start.startHour).getTime() - new Date(b.start.startYear, b.start.startMonth - 1, b.start.startDay, b.start.startHour).getTime()
            });
            return (
                <div className='DayCard-listDiv'>
                    <ul className='DayCard-list'>
                        {sortedArr.map(el => {
                            const { startDay, startHour, startMonth, startYear } = el.start;
                            const { endDay, endHour, endMonth, endYear } = el.end;
                            const shortOrder = `${startDay < 10 ? "0" + startDay : startDay}.${startMonth < 10 ? "0" + (startMonth) : startMonth}.${startYear}, ${startHour}:00-${endHour}:00`;
                            const longOrder = `${startDay < 10 ? "0" + startDay : startDay}.${startMonth < 10 ? "0" + (startMonth) : startMonth}.${startYear} - ${endDay < 10 ? "0" + endDay : endDay}.${endMonth < 10 ? "0" + (endMonth) : endMonth}.${endYear}`;
                            return <li className='DayCard-list--item' key={el.id}>
                                        <Icon size='tiniest' icon='arrow-right' />
                                        <p className='DayCard-list--item__text'>{el.rentalOption === 'short' ? shortOrder : longOrder}</p>
                                    </li>
                        })}
                    </ul>
                </div>
            );
        } else {
            return <div className='DayCard-list--item'>None</div>
        }
    }

    return (
        <div className={`DayCard-container DayCard-container--${availability}`}>
            <div className='DayCard-header'>
                <h1 className='DayCard-header--h1'>{selectedBike}</h1>
                <h2 className='DayCard-header--h2'>{`${selectedDay < 10 ? "0" + selectedDay : selectedDay}.${Number(selectedMonth) + 1 < 10 ? "0" + Number(selectedMonth + 1) : Number(selectedMonth) + 1}.${selectedYear}`}</h2>
            </div>
            <div className='DayCard-orders--div'>
                <p className='DayCard-orders--status'>Status: {renderStatus()}</p>
                <p className='DayCard-orders--p'>Current orders:</p>
                {renderOrders()}
            </div>
            <div className='DayCard-buttonsDiv'>
                {availability !== 'not' && <BasicButton onClick={props.closeModal} to={`/rent/${selectedBike}`} tag='link'>Rent This Bike!</BasicButton>}
                <BasicButton onClick={props.closeModal}>Close</BasicButton>
            </div>
        </div>
    );
}

export default DayCard;