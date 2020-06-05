import React from 'react';
import { connect } from 'react-redux';

import './CheckIfAvailable.css';
import Icon from '../../components/Icon/Icon';
import { fetchSelectedModelOrders, clearOrdersArr } from '../../store/actions/index';
//import CalendarItem from '../CalendarItem/CalendarItem';
import Calendar from './CheckIfAvailableComponents/Calendar/Calendar';

class CheckIfAvailable extends React.Component {

    state = {
        selectedBike: 'Please select model',
        selectedMonth: new Date().getMonth(), //miesiące są numerowane od 0
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

    /* onChangeModelHandler = e => {
        this.setState({selectedBike: e.target.value});
    } */
    
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
                //console.log('dodawanie I opcja');
            } else if(Number(this.state.selectedMonth) === 11 && Number(this.state.selectedYear) < new Date().getFullYear() + 3) {
                this.setState({
                    selectedMonth: 0,
                    selectedYear: Number(this.state.selectedYear) + 1
                });
                //console.log('dodawanie II opcja');
            } else {
                //console.log('dodawanie III opcja');
            }
        } else {
            if(Number(this.state.selectedMonth) > 0) {
                this.setState({selectedMonth: Number(this.state.selectedMonth) - 1});
                //console.log('odejmowanie I opcja');
            } else if(Number(this.state.selectedMonth) === 0 && Number(this.state.selectedYear) >= new Date().getFullYear()) {
                this.setState({
                    selectedMonth: 11,
                    selectedYear: Number(this.state.selectedYear) - 1
                });
                //console.log('odejmowanie II opcja');
            } else {
                //console.log('odejmowanie III opcja');
            }
        }
    }

    render() {
        return (
            <div className='CheckIfAvailable-container'>
                <div className='CheckIfAvailable-content'>
                    <div className='CheckIfAvailable-header'>
                        <select value={this.state.selectedBike} className='input-select CheckIfAvailable--brandSelect' onChange={this.onChangeModelHandler}>
                            <option>Please select model</option>
                            {this.renderFiltered()}
                        </select>
                    </div>
                    <div className='CheckIfAvailable-calendar'>
                        <div className='CheckIfAvailable-navigation'>
                            <button className='calendarNav-button' onClick={() => this.onClickButtonHandler('prev')}><Icon icon='arrow-right' size='tiny' rotate='deg180' color='white' /></button>
                            <select className='input-select no-margin CheckIfAvailable-select' value={this.state.selectedMonth} onChange={this.onChangeMonthHandler}>
                                {this.renderMonths()}
                            </select>
                            <select className='input-select no-margin CheckIfAvailable-select' value={this.state.selectedYear} onChange={this.onChangeYearHandler}>
                                {this.renderYears()}
                            </select>
                            <button className='calendarNav-button' onClick={() => this.onClickButtonHandler('next')}><Icon icon='arrow-right' size='tiny' color='white' /></button>
                        </div>
                        <Calendar 
                            selectedMonth={this.state.selectedMonth} 
                            selectedYear={this.state.selectedYear} 
                            selectedBike={this.state.selectedBike}
                            /* orders={this.state.orders} */
                        />
                    </div>
                    <div className='CheckIfAvailable-description'>
                        <div className='CheckIfAvailable-description--div'>
                            <div className='CheckIfAvailable-description--box'></div>
                            <p className='CheckIfAvailable-description-p'> - available</p>
                        </div>
                        <div className='CheckIfAvailable-description--div'>
                            <div className='CheckIfAvailable-description--box yellow-box'></div>
                            <p className='CheckIfAvailable-description-p'> - partly available</p>
                        </div>
                        <div className='CheckIfAvailable-description--div'>
                            <div className='CheckIfAvailable-description--box red-box'></div>
                            <p className='CheckIfAvailable-description-p'> - not available</p>
                        </div>
                    </div>
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