import React from 'react';
import {Field} from 'formik';

import styles from './DateSelectLong.module.scss';

const DateSelectLong = ({touched, errors, values}) => {

    const createNumbersArr = (start, end) => {
        const numbersArr = [];
        for(let i = start; i <= end; i++) {
            numbersArr.push(i);
        }
        return numbersArr;
    }

    const today = new Date();

    const calculateMonthLength = (year, month) => {
        return new Date(year, month, 0).getDate();
    }

    const renderError = () => {
        if(touched && errors) {
            return (
                <div className={styles.ErrorContainer}>
                    <p className={styles.ErrorMessage}>{errors}</p>
                </div> 
            );
        }
    }

    return (
        <React.Fragment>
            {renderError()}
            <div className={touched && errors ? styles.DateSelectError : styles.DateSelect}>
                <div className={styles.DateSelectSection}>
                    <div className={styles.DateSelectSectionText}>Start:</div>
                    <div className={styles.DateSelectContainer}>
                        <Field component='select' name='startYear' className={styles.DateSelectInput}>
                            {createNumbersArr(today.getFullYear(),today.getFullYear() + 3).map(el => {
                                return <option key={el} value={el}>{el}</option>
                            })}
                        </Field>
                        <Field component='select' name='startMonth' className={styles.DateSelectInput}>
                            {createNumbersArr(1,12).map(el => {
                                return <option key={el} value={el}>{el}</option>
                            })}
                        </Field>
                        <Field component='select' name='startDay' className={styles.DateSelectInput}>
                            {createNumbersArr(1, calculateMonthLength(values.startYear, values.startMonth)).map(el => {
                                return <option key={el} value={el}>{el}</option>
                            })}
                        </Field>
                    </div>
                </div>
                <div className={styles.DateSelectSection}>
                    <div className={styles.DateSelectSectionText}>End:</div>
                    <div className={styles.DateSelectContainer}>
                        <Field component='select' name='endYear' className={styles.DateSelectInput}>
                            {createNumbersArr(today.getFullYear(),today.getFullYear() + 3).map(el => {
                                return <option key={el} value={el}>{el}</option>
                            })}
                        </Field>
                        <Field component='select' name='endMonth' className={styles.DateSelectInput}>
                            {createNumbersArr(1,12).map(el => {
                                return <option key={el} value={el}>{el}</option>
                            })}
                        </Field>
                        <Field component='select' name='endDay' className={styles.DateSelectInput}>
                            {createNumbersArr(1, calculateMonthLength(values.endYear, values.endMonth)).map(el => {
                                return <option key={el} value={el}>{el}</option>
                            })}
                        </Field>
                    </div>
                </div>
            </div>
        </React.Fragment>       
    );
}

export default DateSelectLong;