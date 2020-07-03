import React from 'react';

import styles from './DayCard.module.scss';
import Icon from '../../../components/Icon/Icon';
import BasicButton from '../../../components/BasicButton/BasicButton';

const DayCard = ({dayInfo, orders, closeModal}) => {
    const {selectedDay, selectedMonth, selectedYear, availability, selectedBike} = dayInfo;

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
        if(orders.length > 0) {
            const sortedArr = orders.sort((a, b) => {
                return new Date(a.start.startYear, a.start.startMonth - 1, b.start.startDay, a.start.startHour).getTime() - new Date(b.start.startYear, b.start.startMonth - 1, b.start.startDay, b.start.startHour).getTime()
            });
            return (
                <div className={styles.DayCardListContainer}>
                    <ul className={styles.DayCardList}>
                        {sortedArr.map(el => {
                            const { startDay, startHour, startMonth, startYear } = el.start;
                            const { endDay, endHour, endMonth, endYear } = el.end;
                            const shortOrder = `${startDay < 10 ? "0" + startDay : startDay}.${startMonth < 10 ? "0" + (startMonth) : startMonth}.${startYear}, ${startHour}:00-${endHour}:00`;
                            const longOrder = `${startDay < 10 ? "0" + startDay : startDay}.${startMonth < 10 ? "0" + (startMonth) : startMonth}.${startYear} - ${endDay < 10 ? "0" + endDay : endDay}.${endMonth < 10 ? "0" + (endMonth) : endMonth}.${endYear}`;
                            return  <li className={styles.DayCardListItem} key={el.id}>
                                        <Icon size='tiniest' icon='arrow-right' />
                                        <p className={styles.DayCardListItemText}>{el.rentalOption === 'short' ? shortOrder : longOrder}</p>
                                    </li>
                        })}
                    </ul>
                </div>
            );
        } else {
            return <div className={styles.DayCardListItem}>None</div>
        }
    }

    return (
        <div className={[styles.DayCard, styles[availability]].join(' ')}>
            <div className={styles.DayCardHeader}>
                <h1 className={styles.DayCardHeaderPrimary}>{selectedBike}</h1>
                <h2 className={styles.DayCardHeaderSecondary}>{`${selectedDay < 10 ? "0" + selectedDay : selectedDay}.${Number(selectedMonth) + 1 < 10 ? "0" + Number(selectedMonth + 1) : Number(selectedMonth) + 1}.${selectedYear}`}</h2>
            </div>
            <div className={styles.DayCardOrdersContainer}>
                <p className={styles.DayCardOrdersContainerStatus}>Status: {renderStatus()}</p>
                <p className={styles.DayCardOrdersContainerText}>Current orders:</p>
                {renderOrders()}
            </div>
            <div className={styles.DayCardButtonsContainer}>
                {availability !== 'not' && <BasicButton onClick={closeModal} to={`/rent/${selectedBike}`} tag='link'>Rent This Bike!</BasicButton>}
                <BasicButton onClick={closeModal}>Close</BasicButton>
            </div>
        </div>
    );
}

export default DayCard;