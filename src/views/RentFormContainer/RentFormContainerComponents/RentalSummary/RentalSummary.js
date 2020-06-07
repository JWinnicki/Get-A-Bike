import React from 'react';

import './RentalSummary.css';
import Icon from '../../../../components/Icon/Icon';
import BasicButton from '../../../../components/atoms/BasicButton/BasicButton';

const RentalSummary = props => {

    const calculateTotal = () => {

        if(props.order.rentalOption === 'short') {

            const totalHours = props.order.end.endHour - props.order.start.startHour;
            
            if(totalHours <= 2) {
                return totalHours * 12;
            } else if (totalHours >= 3 && totalHours <= 5) {
                return totalHours * 11;
            } else {
                return totalHours * 10;
            }

        } else { /// wynik w milisekundach trzeba podzielić przez 86 400 000, uzyskamy wtedy wynik w dniach :)
            const totalDays = Math.round(Math.abs((new Date(props.order.end.endYear, props.order.end.endMonth, props.order.end.endDay).getTime() - new Date(props.order.start.startYear, props.order.start.startMonth, props.order.start.startDay).getTime() + 86400000) / 86400000));

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
        if(props.order.start !== undefined) {
            return (
                <div className='details-main'>
                    <div className='details-section'>
                        <ul className='details-section--list'>
                            <li className='details-section--listItem'>
                                <div className='details-section--icon' ><Icon icon='arrow-right' size='tiniest'/></div>
                                <p className='details-section--listItem__text'>Model: {props.order.selectedModel}</p>
                            </li>
                            <li className='details-section--listItem'>
                                <div className='details-section--icon' ><Icon icon='arrow-right' size='tiniest'/></div>
                                <p className='details-section--listItem__text'>City: {props.order.city}</p>
                            </li>
                            <li className='details-section--listItem'>
                                <div className='details-section--icon' ><Icon icon='arrow-right' size='tiniest'/></div>
                                <p className='details-section--listItem__text'>Start: {props.order.rentalOption === 'short' ? `${props.order.start.startHour}:00, ${props.order.start.startDay < 10 ? '0' + props.order.start.startDay : props.order.start.startDay}.${props.order.start.startMonth < 10 ? '0' + props.order.start.startMonth : props.order.start.startMonth}.${props.order.start.startYear}` : `${props.order.start.startDay < 10 ? '0' + props.order.start.startDay : props.order.start.startDay}.${props.order.start.startMonth < 10 ? '0' + props.order.start.startMonth : props.order.start.startMonth}.${props.order.start.startYear}`}</p>
                            </li>
                            <li className='details-section--listItem'>
                                <div className='details-section--icon' ><Icon icon='arrow-right' size='tiniest'/></div>
                                <p className='details-section--listItem__text'>End: {props.order.rentalOption === 'short' ? `${props.order.end.endHour}:00, ${props.order.end.endDay < 10 ? '0' + props.order.end.endDay : props.order.end.endDay}.${props.order.end.endMonth < 10 ? '0' + props.order.end.endMonth : props.order.end.endMonth}.${props.order.end.endYear}` : `${props.order.end.endDay < 10 ? '0' + props.order.end.endDay : props.order.end.endDay}.${props.order.end.endMonth < 10 ? '0' + props.order.end.endMonth : props.order.end.endMonth}.${props.order.end.endYear}`}</p>
                            </li>
                            <li className='details-section--listItem'>
                                <div className='details-section--icon' ><Icon icon='arrow-right' size='tiniest'/></div>
                                <p className='details-section--listItem__text'>Total: {calculateTotal()}$</p>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            props.cancelOrder();
        }
    }

    const submitForm = async () => {
        const response = await props.fetchOrders(props.order.selectedModel)

        const checkIfEvery = () => {
            return response.every(el => {
                return (new Date(props.order.end.endYear, props.order.end.endMonth, props.order.end.endDay, props.order.end.endHour).getTime() <= new Date(el.start.startYear, el.start.startMonth, el.start.startDay, el.start.startHour).getTime() || new Date(props.order.start.startYear, props.order.start.startMonth, props.order.start.startDay, props.order.start.startHour).getTime() >= new Date(el.end.endYear, el.end.endMonth, el.end.endDay, el.end.endHour).getTime());
            });
        }

        if(checkIfEvery()) {
            props.submitForm(props.order);
        } else {
            props.fetchOrdersFail('Motorcycle not availible');
        }

    }
    return (
        <div className='RentalSummary'>
            <h1>Rental Summary</h1>
            {renderDetails()}
            <div className='buttons-container'> 
                <BasicButton onClick={submitForm} color='green'>Confirm</BasicButton>
                <BasicButton onClick={props.cancelOrder} color='red'>Cancel</BasicButton>
            </div>
        </div>
    );
}

export default RentalSummary;