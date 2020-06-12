import React from 'react';
import { connect } from 'react-redux';

import styles from './Calendar.module.scss';
import CalendarItem from '../CalendarItem/CalendarItem';

const Calendar = ({selectedBike, selectedMonth, selectedYear, orders}) => {

    const createDaysArr = () => {
        
        const basicArr = [];
        const basicNumOfDays = new Date(Number(selectedYear), Number(selectedMonth) + 1, 0).getDate();
        for(let i=1; i <= basicNumOfDays; i++) {
            basicArr.push({number: i, actual: true, year: selectedYear, month: selectedMonth, orders: []});
        }

        let firstDayNumOfWeek = null;
        if(new Date(selectedYear, selectedMonth, 1).getDay() !== 0) {
            firstDayNumOfWeek = new Date(selectedYear, selectedMonth, 1).getDay();
        } else {
                firstDayNumOfWeek = 7;
        }
        let lastDayNumOfWeek = null
        if(new Date(selectedYear, Number(selectedMonth) + 1, 0).getDay() !== 0) {
            lastDayNumOfWeek = new Date(selectedYear, Number(selectedMonth) + 1, 0).getDay();
        } else {
            lastDayNumOfWeek = 7;
        }

        const prevArrLength = Number(firstDayNumOfWeek) - 1;
        const prevMonthNumOfDays = new Date(Number(selectedYear), Number(selectedMonth), 0).getDate();
        const prevMonthStart = prevMonthNumOfDays - prevArrLength + 1

        const prevArr = []
        for(let i = prevMonthStart; i <= prevMonthNumOfDays; i++) {
            prevArr.push({number: i, actual: false, year: Number(selectedMonth) === 0 ? Number(selectedYear) - 1 : selectedYear, month: Number(selectedMonth) === 0 ? 11 : Number(selectedMonth) - 1, orders: []});
        }


        const nextArrLength = 7 - lastDayNumOfWeek;
        const nextArr = [];
        for(let i = 1; i <= nextArrLength; i++) {
            nextArr.push({number: i, actual: false, year: Number(selectedMonth) === 11 ? Number(selectedYear) + 1 : selectedYear, month: Number(selectedMonth) === 11 ? 0 : Number(selectedMonth) + 1, orders: []});
        }

        return [...prevArr, ...basicArr, ...nextArr];
    }

    const renderDayItems = () => {

        const finalArr = createDaysArr();

        if(orders.length === 0) {
            finalArr.forEach(el => {
                el.available = 'available';
            });
        } else {
            for(let i = 0; i <= orders.length - 1; i++) {
                for(let j = 0; j <= finalArr.length - 1; j++) {
                    if( new Date(orders[i].end.endYear, orders[i].end.endMonth - 1, orders[i].end.endDay, orders[i].end.endHour).getTime() < new Date(finalArr[j].year, finalArr[j].month, finalArr[j].number, 6).getTime() || new Date(orders[i].start.startYear, orders[i].start.startMonth - 1, orders[i].start.startDay, orders[i].start.startHour).getTime() > new Date(finalArr[j].year, finalArr[j].month, finalArr[j].number, 22).getTime() ) {
                        if(finalArr[j].available === undefined) {
                            finalArr[j].available = 'available';
                        }
                    } else if( new Date(orders[i].start.startYear, orders[i].start.startMonth - 1, orders[i].start.startDay, orders[i].start.startHour).getTime() >= new Date(finalArr[j].year, finalArr[j].month, finalArr[j].number, 6).getTime() && new Date(orders[i].end.endYear, orders[i].end.endMonth - 1, orders[i].end.endDay, orders[i].end.endHour).getTime() <= new Date(finalArr[j].year, finalArr[j].month, finalArr[j].number, 22).getTime() ) {
                        finalArr[j].available = 'partly';
                        finalArr[j].orders.push(orders[i]);
                        const lengthArr = finalArr[j].orders.map(el => {
                            return el.end.endHour - el.start.startHour;
                        });
                        const ttlLength = lengthArr.reduce((accumulator, currentValue) => accumulator + currentValue);
                        ttlLength >= 16 ? finalArr[j].available = 'not' : finalArr[j].available = 'partly';
                    } else {
                        finalArr[j].available = 'not';
                        finalArr[j].orders.push(orders[i]);
                    }
                }
            }
        } 

        return finalArr.map(el => {
            return <CalendarItem selectedBike={selectedBike} orders={el.orders} selectedMonth={el.month} selectedYear={el.year} number={el.number} available={el.available} actual={el.actual} key={`${el.number}${el.actual}`}/>
        })

    }

    
    return (
        <div className={styles.Calendar}>
            {renderDayItems()}
        </div>
    );
    
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders
    }
}

export default connect(mapStateToProps)(Calendar);