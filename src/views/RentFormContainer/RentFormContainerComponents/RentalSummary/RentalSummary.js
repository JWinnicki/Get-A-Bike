import React from 'react';

import './RentalSummary.css';
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

    const renderDetails = () => {
        return (
            <div className='details-main'>
                <div className='details-section'>
                    <ul className='details-section--list'>
                        <li className='details-section--listItem'>
                            <div className='details-section--icon' ><Icon icon='arrow-right' size='tiniest'/></div>
                            <p className='details-section--listItem__text'>Model: {selectedModel}</p>
                        </li>
                         <li className='details-section--listItem'>
                            <div className='details-section--icon' ><Icon icon='arrow-right' size='tiniest'/></div>
                            <p className='details-section--listItem__text'>City: {city}</p>
                        </li>
                        <li className='details-section--listItem'>
                            <div className='details-section--icon' ><Icon icon='arrow-right' size='tiniest'/></div>
                            <p className='details-section--listItem__text'>Start: {rentalOption === 'short' ? `${start.startHour}:00, ${start.startDay < 10 ? '0' + start.startDay : start.startDay}.${start.startMonth < 10 ? '0' + start.startMonth : start.startMonth}.${start.startYear}` : `${start.startDay < 10 ? '0' + start.startDay : start.startDay}.${start.startMonth < 10 ? '0' + start.startMonth : start.startMonth}.${start.startYear}`}</p>
                        </li>
                        <li className='details-section--listItem'>
                            <div className='details-section--icon' ><Icon icon='arrow-right' size='tiniest'/></div>
                            <p className='details-section--listItem__text'>End: {rentalOption === 'short' ? `${end.endHour}:00, ${end.endDay < 10 ? '0' + end.endDay : end.endDay}.${end.endMonth < 10 ? '0' + end.endMonth : end.endMonth}.${end.endYear}` : `${end.endDay < 10 ? '0' + end.endDay : end.endDay}.${end.endMonth < 10 ? '0' + end.endMonth : end.endMonth}.${end.endYear}`}</p>
                        </li>
                        <li className='details-section--listItem'>
                            <div className='details-section--icon' ><Icon icon='arrow-right' size='tiniest'/></div>
                            <p className='details-section--listItem__text'>Total: {calculateTotal()}$</p>
                        </li>
                    </ul>
                 </div>
             </div>
        );
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
        <div className='RentalSummary'>
            <h1>Rental Summary</h1>
            {renderDetails()}
            <div className='buttons-container'> 
                <BasicButton onClick={onSubmitForm} color='green'>Confirm</BasicButton>
                <BasicButton onClick={cancelOrder} color='red'>Cancel</BasicButton>
            </div>
        </div>
    );
}

export default RentalSummary;