import React from 'react';

import styles from './RentalSummary.module.scss';
import Icon from '../../../../components/Icon/Icon';
import BasicButton from '../../../../components/atoms/BasicButton/BasicButton';

const RentalSummary = ({order, submitForm, cancelOrder, fetchOrders, fetchOrdersFail}) => {
    const {end, start, rentalOption, city, selectedModel} = order;

    const calculateTotal = () => {

        if(rentalOption === 'short') {

            const totalHours = end.endHour - start.startHour;
            
            if(totalHours <= 2) {
                return totalHours * 12;
            } else if (totalHours >= 3 && totalHours <= 5) {
                return totalHours * 11;
            } else {
                return totalHours * 10;
            }

        } else { /// wynik w milisekundach trzeba podzielić przez 86 400 000, uzyskamy wtedy wynik w dniach
            const totalDays = Math.round(Math.abs((new Date(end.endYear, end.endMonth, end.endDay).getTime() - new Date(start.startYear, start.startMonth, start.startDay).getTime() + 86400000) / 86400000));

            if(totalDays <= 3) {
                return totalDays * 155;
            } else if(totalDays >= 4 && totalDays <= 7) {
                return totalDays * 152;
            } else if(totalDays >= 8 && totalDays <= 21) {
                return totalDays * 150;
            } else {
                return totalDays * 148;
            }
        }

    }

    const onSubmitForm = async () => {
        const response = await fetchOrders(selectedModel)

        const checkIfEvery = () => {
            return response.every(el => {
                return (new Date(end.endYear, end.endMonth, end.endDay, end.endHour).getTime() <= new Date(el.start.startYear, el.start.startMonth, el.start.startDay, el.start.startHour).getTime() || new Date(start.startYear, start.startMonth, start.startDay, start.startHour).getTime() >= new Date(el.end.endYear, el.end.endMonth, el.end.endDay, el.end.endHour).getTime());
            });
        }

        if(checkIfEvery()) {
            submitForm(order);
        } else {
            fetchOrdersFail('Motorcycle not availible');
        }

    }
    return (
        <div className={styles.RentalSummary}>
            <h1 className={styles.RentalSummaryTitle}>Rental Summary</h1>
            <div className={styles.RentalSummaryDetailsContainer}>
                <div>
                    <ul className={styles.RentalSummaryList}>
                        <li className={styles.RentalSummaryListItem}>
                            <div className={styles.RentalSummaryListItemIcon} ><Icon icon='arrow-right' size='tiniest'/></div>
                            <p className={styles.RentalSummaryListItemText}>Model: {selectedModel}</p>
                        </li>
                         <li className={styles.RentalSummaryListItem}>
                            <div className={styles.RentalSummaryListItemIcon} ><Icon icon='arrow-right' size='tiniest'/></div>
                            <p className={styles.RentalSummaryListItemText}>City: {city}</p>
                        </li>
                        <li className={styles.RentalSummaryListItem}>
                            <div className={styles.RentalSummaryListItemIcon} ><Icon icon='arrow-right' size='tiniest'/></div>
                            <p className={styles.RentalSummaryListItemText}>Start: {rentalOption === 'short' ? `${start.startHour}:00, ${start.startDay < 10 ? '0' + start.startDay : start.startDay}.${start.startMonth < 10 ? '0' + start.startMonth : start.startMonth}.${start.startYear}` : `${start.startDay < 10 ? '0' + start.startDay : start.startDay}.${start.startMonth < 10 ? '0' + start.startMonth : start.startMonth}.${start.startYear}`}</p>
                        </li>
                        <li className={styles.RentalSummaryListItem}>
                            <div className={styles.RentalSummaryListItemIcon} ><Icon icon='arrow-right' size='tiniest'/></div>
                            <p className={styles.RentalSummaryListItemText}>End: {rentalOption === 'short' ? `${end.endHour}:00, ${end.endDay < 10 ? '0' + end.endDay : end.endDay}.${end.endMonth < 10 ? '0' + end.endMonth : end.endMonth}.${end.endYear}` : `${end.endDay < 10 ? '0' + end.endDay : end.endDay}.${end.endMonth < 10 ? '0' + end.endMonth : end.endMonth}.${end.endYear}`}</p>
                        </li>
                        <li className={styles.RentalSummaryListItem}>
                            <div className={styles.RentalSummaryListItemIcon} ><Icon icon='arrow-right' size='tiniest'/></div>
                            <p className={styles.RentalSummaryListItemText}>Total: {calculateTotal()}$</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.RentalSummaryButtonsContainer}> 
                <BasicButton onClick={onSubmitForm} color='green'>Confirm</BasicButton>
                <BasicButton onClick={cancelOrder} color='red'>Cancel</BasicButton>
            </div>
        </div>
    );
}

export default RentalSummary;