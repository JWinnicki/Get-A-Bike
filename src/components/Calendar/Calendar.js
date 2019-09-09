import React from 'react';
import { connect } from 'react-redux';

import './Calendar.css';
import CalendarItem from '../CalendarItem/CalendarItem';

class Calendar extends React.Component {

    state = {
        daysNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }


    renderDayNames = () => {
        return this.state.daysNames.map(el => {
            return (
                <div className='Calendar-dayName__div' key={el}>
                    <span className='Calendar-dayName__span'>{el}</span>
                </div>
            )
        });
    }

    createDaysArr = isExtended => {
        if(isExtended) {
            const basicArr = [];
            const basicNumOfDays = new Date(Number(this.props.selectedYear), Number(this.props.selectedMonth) + 1, 0).getDate();
            for(let i=1; i <= basicNumOfDays; i++) {
                basicArr.push({number: i, actual: true, year: this.props.selectedYear, month: this.props.selectedMonth, orders: []});
            }

            let firstDayNumOfWeek = null;
            if(new Date(this.props.selectedYear, this.props.selectedMonth, 1).getDay() !== 0) {
                firstDayNumOfWeek = new Date(this.props.selectedYear, this.props.selectedMonth, 1).getDay();
            } else {
                firstDayNumOfWeek = 7;
            }
            let lastDayNumOfWeek = null
            if(new Date(this.props.selectedYear, Number(this.props.selectedMonth) + 1, 0).getDay() !== 0) {
                lastDayNumOfWeek = new Date(this.props.selectedYear, Number(this.props.selectedMonth) + 1, 0).getDay();
            } else {
                lastDayNumOfWeek = 7;
            }

            const prevArrLength = Number(firstDayNumOfWeek) - 1;
            const prevMonthNumOfDays = new Date(Number(this.props.selectedYear), Number(this.props.selectedMonth), 0).getDate();
            const prevMonthStart = prevMonthNumOfDays - prevArrLength + 1

            const prevArr = []
            for(let i = prevMonthStart; i <= prevMonthNumOfDays; i++) {
                prevArr.push({number: i, actual: false, year: Number(this.props.selectedMonth) === 0 ? Number(this.props.selectedYear) - 1 : this.props.selectedYear, month: Number(this.props.selectedMonth) === 0 ? 11 : Number(this.props.selectedMonth) - 1, orders: []});
            }


            const nextArrLength = 7 - lastDayNumOfWeek;
            const nextArr = [];
            for(let i = 1; i <= nextArrLength; i++) {
                nextArr.push({number: i, actual: false, year: Number(this.props.selectedMonth) === 11 ? Number(this.props.selectedYear) + 1 : this.props.selectedYear, month: Number(this.props.selectedMonth) === 11 ? 0 : Number(this.props.selectedMonth) + 1, orders: []});
            }

            return [...prevArr, ...basicArr, ...nextArr];

        } else {
            const basicArr = [];
            const basicNumOfDays = new Date(Number(this.props.selectedYear), Number(this.props.selectedMonth) + 1, 0).getDate();
            for(let i=1; i <= basicNumOfDays; i++) {
                basicArr.push({number: i, actual: true, year: this.props.selectedYear, month: this.props.selectedMonth, orders: []});
            }

            return basicArr;
        }
    }

    renderDayItems = isExtended => {



        const finalArr = this.createDaysArr(isExtended);

        if(this.props.orders.length === 0) {
            finalArr.forEach(el => {
                el.available = 'available';
            });
        } else {
            for(let i = 0; i <= this.props.orders.length - 1; i++) {
                for(let j = 0; j <= finalArr.length - 1; j++) {
                    if( new Date(this.props.orders[i].end.endYear, this.props.orders[i].end.endMonth - 1, this.props.orders[i].end.endDay, this.props.orders[i].end.endHour).getTime() < new Date(finalArr[j].year, finalArr[j].month, finalArr[j].number, 6).getTime() || new Date(this.props.orders[i].start.startYear, this.props.orders[i].start.startMonth - 1, this.props.orders[i].start.startDay, this.props.orders[i].start.startHour).getTime() > new Date(finalArr[j].year, finalArr[j].month, finalArr[j].number, 22).getTime() ) {
                        if(finalArr[j].available === undefined) {
                            finalArr[j].available = 'available';
                        }
                    } else if( new Date(this.props.orders[i].start.startYear, this.props.orders[i].start.startMonth - 1, this.props.orders[i].start.startDay, this.props.orders[i].start.startHour).getTime() >= new Date(finalArr[j].year, finalArr[j].month, finalArr[j].number, 6).getTime() && new Date(this.props.orders[i].end.endYear, this.props.orders[i].end.endMonth - 1, this.props.orders[i].end.endDay, this.props.orders[i].end.endHour).getTime() <= new Date(finalArr[j].year, finalArr[j].month, finalArr[j].number, 22).getTime() ) {
                        finalArr[j].available = 'partly';
                        finalArr[j].orders.push(this.props.orders[i]);
                        const lengthArr = finalArr[j].orders.map(el => {
                            return el.end.endHour - el.start.startHour;
                        });
                        const ttlLength = lengthArr.reduce((accumulator, currentValue) => accumulator + currentValue);
                        ttlLength >= 16 ? finalArr[j].available = 'not' : finalArr[j].available = 'partly';
                    } else {
                        finalArr[j].available = 'not';
                        finalArr[j].orders.push(this.props.orders[i]);
                    }
                }
            }
        } 

        //console.log(this.props.orders);

        return finalArr.map(el => {
            return <CalendarItem selectedBike={this.props.selectedBike} orders={el.orders} selectedMonth={el.month} selectedYear={el.year} number={el.number} available={el.available} actual={el.actual} key={`${el.number}${el.actual}`}/>
        })

    }

    render() {
        return(
            <React.Fragment>
                <div className='Calendar-container'>
                    {/* this.renderDayNames() */}
                    {this.renderDayItems(true)}
                </div>
                <div className='Calendar-smallContainer'>
                    {this.renderDayItems(false)}
                </div>
            </React.Fragment>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders
    }
}

export default connect(mapStateToProps)(Calendar);