import React from 'react';
import {connect} from 'react-redux';

import styles from './CheckIfAvailable.module.scss';
import {fetchSelectedModelOrders, clearOrdersArr} from '../../store/actions/index';
import Calendar from './Calendar/Calendar';
import CalendarDescription from './CalendarDescription/CalendarDescription';
import CalendarNavigation from './CalendarNavigation/CalendarNavigation';

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
                    <CalendarNavigation
                        rawMotorcyclesArr={this.props.rawMotorcyclesArr}
                        selectedBike={this.state.selectedBike}
                        selectedYear={this.state.selectedYear}
                        selectedMonth={this.state.selectedMonth}
                        selectModel={this.onChangeModelHandler}
                        selectMonth={this.onChangeMonthHandler}
                        selectYear={this.onChangeYearHandler}
                        clickButton={this.onClickButtonHandler}
                    />
                    <div className={styles.CheckIfAvailableCalendar}>
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