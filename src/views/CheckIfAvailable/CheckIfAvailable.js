import React from 'react';
import { connect } from 'react-redux';

import styles from './CheckIfAvailable.module.scss';
import Icon from '../../components/Icon/Icon';
import { fetchSelectedModelOrders, clearOrdersArr } from '../../store/actions/index';
import Calendar from './CheckIfAvailableComponents/Calendar/Calendar';
import CalendarDescription from './CheckIfAvailableComponents/CalendarDescription/CalendarDescription';

class CheckIfAvailable extends React.Component {

    state = {
        selectedBike: 'Please select model',
        selectedMonth: new Date().getMonth(),
        selectedYear: new Date().getFullYear(),
        orders: null
    }

    componentDidMount() {
        this.props.onClearOrders();
    }

    renderFiltered = () => {
        const motoArr = this.props.rawMotorcyclesArr.map(el => {
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

        return brands.map( brand => {
            return (
                <optgroup label={brand} key={brand}>
                    {filterArr(brand).map(el => {
                        return <option key={el}>{el}</option>
                    })}
                </optgroup>
            );
        })
    }

    renderMonths = () => {
        const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        return monthsNames.map((el, index) => {
            return <option value={index} key={index}>{el}</option>
        })
    }

    renderYears = () => {
        const actualYear = new Date().getFullYear();

        return [actualYear - 1, actualYear, actualYear + 1, actualYear + 2, actualYear + 3].map(el => {
            return <option key={el} value={el}>{el}</option>
        })
    }
    
    onChangeModelHandler = async e => {
        this.setState({selectedBike: e.target.value});
        if(e.target.value !== 'Please select model') {
            const response = await this.props.onFetchOrders(e.target.value);
            this.setState({orders: response});
        }
    }

    onChangeMonthHandler = e => {
        this.setState({selectedMonth: e.target.value});
    }

    onChangeYearHandler = e => {
        this.setState({selectedYear: e.target.value});
    }

    onClickButtonHandler = direction => {
        if(direction === 'next') {
            if(Number(this.state.selectedMonth) < 11) {
                this.setState({selectedMonth: Number(this.state.selectedMonth) + 1});
            } else if(Number(this.state.selectedMonth) === 11 && Number(this.state.selectedYear) < new Date().getFullYear() + 3) {
                this.setState({
                    selectedMonth: 0,
                    selectedYear: Number(this.state.selectedYear) + 1
                });
            }
        } else {
            if(Number(this.state.selectedMonth) > 0) {
                this.setState({selectedMonth: Number(this.state.selectedMonth) - 1});
            } else if(Number(this.state.selectedMonth) === 0 && Number(this.state.selectedYear) >= new Date().getFullYear()) {
                this.setState({
                    selectedMonth: 11,
                    selectedYear: Number(this.state.selectedYear) - 1
                });
            }
        }
    }

    render() {
        return (
            <div className={styles.CheckIfAvailable}>
                <div className={styles.CheckIfAvailableContent}>
                    <div className={styles.CheckIfAvailableHeader}>
                        <select value={this.state.selectedBike} className={styles.CheckIfAvailableSelect} onChange={this.onChangeModelHandler}>
                            <option>Please select model</option>
                            {this.renderFiltered()}
                        </select>
                    </div>
                    <div className={styles.CheckIfAvailableCalendar}>
                        <div className={styles.CheckIfAvailableNavigation}>
                            <button className={styles.CheckIfAvailableButton} onClick={() => this.onClickButtonHandler('prev')}><Icon icon='arrow-right' size='tiny' rotate='deg180' color='white' /></button>
                            <select className={styles.CheckIfAvailableSelect} value={this.state.selectedMonth} onChange={this.onChangeMonthHandler}>
                                {this.renderMonths()}
                            </select>
                            <select className={styles.CheckIfAvailableSelect} value={this.state.selectedYear} onChange={this.onChangeYearHandler}>
                                {this.renderYears()}
                            </select>
                            <button className={styles.CheckIfAvailableButton} onClick={() => this.onClickButtonHandler('next')}><Icon icon='arrow-right' size='tiny' color='white' /></button>
                        </div>
                        <Calendar 
                            selectedMonth={this.state.selectedMonth} 
                            selectedYear={this.state.selectedYear} 
                            selectedBike={this.state.selectedBike}
                        />
                    </div>
                    <CalendarDescription />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rawMotorcyclesArr: state.motorcycles.motorcycles,
        orders: state.orders.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: selectedModel => dispatch(fetchSelectedModelOrders(selectedModel)),
        onClearOrders: () => dispatch(clearOrdersArr())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckIfAvailable);