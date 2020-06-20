import React from 'react';

import styles from './CalendarNavigation.module.scss';
import Icon from '../../../../components/Icon/Icon';

const CalendarNavigation = ({
    rawMotorcyclesArr, 
    selectedBike, 
    selectedMonth, 
    selectedYear, 
    selectModel, 
    selectMonth, 
    selectYear, 
    clickButton
}) => {

    const renderFiltered = () => {
        const motoArr = rawMotorcyclesArr.map(el => {
            return {model: el.model, brand: el.brand}
        });

        const brands = ['Honda', 'Kawasaki', 'Suzuki', 'Yamaha'];
        const filterArr = brand => {
            const arr = motoArr.filter(el => {
                return el.brand === brand;
            });

            return arr.map(el => {
                return el.model;
            })
        }

        return brands.map(brand => {
            return (
                <optgroup label={brand} key={brand}>
                    {filterArr(brand).map(el => {
                        return <option key={el}>{el}</option>
                    })}
                </optgroup>
            );
        })
    }

    const renderMonths = () => {
        const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        return monthsNames.map((el, index) => {
            return <option value={index} key={index}>{el}</option>
        })
    }

    const renderYears = () => {
        const actualYear = new Date().getFullYear();

        return [actualYear - 1, actualYear, actualYear + 1, actualYear + 2, actualYear + 3].map(el => {
            return <option key={el} value={el}>{el}</option>
        })
    }



    return (
        <div className={styles.CalendarNavigation}>
            <div className={styles.CalendarNavigationSection}>
                <select value={selectedBike} className={styles.CalendarNavigationSelect} onChange={selectModel}>
                    <option>Please select model</option>
                    {renderFiltered()}
                </select>
            </div>
            <div className={styles.CalendarNavigationSection}>
                <button className={styles.CalendarNavigationButton} onClick={() => clickButton('prev')}>
                    <Icon icon='arrow-right' size='tiny' rotate='deg180' color='white' />
                </button>
                <select className={styles.CalendarNavigationSelect} value={selectedMonth} onChange={selectMonth}>
                    {renderMonths()}
                </select>
                <select className={styles.CalendarNavigationSelect} value={selectedYear} onChange={selectYear}>
                    {renderYears()}
                </select>
                <button className={styles.CalendarNavigationButton} onClick={() => clickButton('next')}>
                    <Icon icon='arrow-right' size='tiny' color='white' />
                </button>
            </div>
        </div>
    );
}

export default CalendarNavigation;