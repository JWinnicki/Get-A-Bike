import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Cities from './components/Cities/Cities';
import BrandLogosList from './components/BrandLogosList/BrandLogosList';
import MotorcyclesListDisplay from './components/MotorcyclesListDisplay/MotorcyclesListDisplay';
import Offer from './components/Offer/Offer';
import RentFormContainer from './components/RentFormContainer/RentFormContainer';
import LogInContainer from './components/LogInContainer/LogInContainer';
import Profile from './components/Profile/Profile';
import {authCheckState} from './store/actions/index';
import Spinner from './components/Spinner/Spinner';
import Icon from './components/Icon/Icon';
import Modal from './components/Modal/Modal';
import RentalSummary from './components/RentalSummary/RentalSummary';
import CheckIfAvailable from './components/CheckIfAvailable/CheckIfAvailable';
import {
    cancelConfirmation,
    submitForm,
    rentBike,
    fetchSelectedModelOrders,
    fetchOrdersFail
} from './store/actions/orders';
import DayCard from './components/DayCard/DayCard';

class App extends Component {

    componentDidMount() {
        // Co to robi?
        this.props.onTryAutoLogIn();
    }

    render() {
        //Dlaczego Modal Msg nie jest oddzielnym komponentem
        //https://bradfrost.com/blog/post/atomic-web-design/
        const renderModalMsg = () => {
            //Za dużo tych ifów else isfów
            // Funkcja jest za długa
            //Proszę poczytać o czymś takim jak SOLID
            //To co jest w tych ifach jest na pierwsy rzut oka mało czytelne możemy to wyciągnąć do metody tak żeby inny programista mógł to na szybko przeczytać nie znając projektu
            if (this.props.error && !this.props.loading) {
                return (
                    <div>
                        <div className='error-div'>
                            <Icon size='medium' icon='exclamation-mark'/>
                            <p className='error-msg'>{this.props.errorMsg === null ? `Something went wrong!` : this.props.errorMsg}</p>
                        </div>
                        <div className='error-linkDiv'>
                            {this.props.errorMsg === 'Motorcycle not availible' ?
                                <p className='error-linkMsg'>Please click <Link onClick={this.props.onCancelOrder}
                                                                                className='error-link'
                                                                                to='/check_if_available'>here</Link> to
                                    check when motorcycle is available.</p> : null}
                        </div>
                    </div>

                );
                //Np. tutaj const isLoadingInProgress = () => this.props.loading && !this.props.error
            } else if (this.props.loading && !this.props.error) {
                return (
                    //Dlaczego to się nawywa error-div skoro tu nie ma errora tylko jest Spinner?
                    //Nie powinno się dodawać do nazwy klasy div. Zamiast tego error-container, error-wrapper
                    //Powinno to się nazywać message-container
                    <div className="error-div">
                        <Spinner/>
                    </div>
                )
            } else if (this.props.rented && !this.props.error) {
                return (
                    <div className='error-div'>
                        <Icon size='medium' icon='checked'/>
                        <p className='error-msg'>Motorcycle successfully rented!</p>
                    </div>
                );
            } else if (this.props.deleted && !this.props.error) {
                return (
                    <div className='error-div'>
                        <Icon size='medium' icon='checked'/>
                        <p className='error-msg'>Order successfully deleted!</p>
                    </div>
                );
            } else if (this.props.renting && !this.props.error) {
                return <RentalSummary
                    order={this.props.order}
                    cancelOrder={this.props.onCancelOrder}
                    submitForm={this.props.onRentBike}
                    fetchOrders={this.props.onFetchOrders}
                    rented={this.props.rented}
                    fetched={this.props.fetched}
                    loading={this.props.loading}
                    orders={this.props.orders}
                    error={this.props.error}
                    fetchOrdersFail={this.props.onFetchOrdersFail}
                />
            } else if (this.props.checkingOrders && !this.props.error && this.props.fetched) {
                return <DayCard
                    closeModal={this.props.onCancelOrder}
                    orders={this.props.ordersOfTheDay}
                    dayInfo={this.props.dayInfo}
                />
            } else if (this.props.checkingOrders && !this.props.error && !this.props.fetched) {
                return (
                    <div className='error-div'>
                        <Icon size='medium' icon='exclamation-mark'/>
                        <p className='error-msg'>Please select model</p>
                    </div>
                );
            }
        }

        return (
            <div className="container">
                <Modal show={this.props.showModal} modalClosed={this.props.onCancelOrder} modalWidth='50%'>
                    {/* this.props.error ? <p className='error-msg'>Something went wrong!</p> : <RentalSummary order={this.props.order} cancelOrder={this.props.onCancelOrder} submitForm={this.props.onRentBike} fetchOrders={this.props.onFetchOrders} rented={this.props.rented} fetched={this.props.fetched} /> */}
                    {renderModalMsg()}
                </Modal>
                <header>
                    <Header/>
                </header>
                <main>
                    <div className='Main'>
                        <Switch>
                            <Route path='/cities' exact component={Cities}/>
                            <Route path='/motorcycles' exact component={BrandLogosList}/>
                            <Route path='/motorcycles/:brand' exact component={MotorcyclesListDisplay}/>
                            <Route path='/offer' exact component={Offer}/>
                            <Route path='/review' exact component={Cities}/>
                            <Route path='/rent/:name' exact component={RentFormContainer}/>
                            <Route path='/login' exact component={LogInContainer}/>
                            <Route path='/profile' exact component={Profile}/>
                            <Route path='/check_if_available' component={CheckIfAvailable}/>
                            <Route path='/' exact component={Main}/>
                        </Switch>
                    </div>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //Co to?
        motoArr: state.motorcycles.motorcycles,
        //Do metody
        showModal: state.orders.renting || state.orders.error || state.orders.deleted || state.orders.checkingOrders,
        order: state.orders.order,
        orders: state.orders.orders,
        error: state.orders.error,
        errorMsg: state.orders.errorMsg,
        fetched: state.orders.fetched,
        rented: state.orders.rented,
        renting: state.orders.renting,
        loading: state.orders.loading,
        deleted: state.orders.deleted,
        checkingOrders: state.orders.checkingOrders,
        ordersOfTheDay: state.orders.ordersOfTheDay,
        dayInfo: state.orders.dayInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoLogIn: () => dispatch(authCheckState()),
        onCancelOrder: () => dispatch(cancelConfirmation()),
        onSubmitForm: form => dispatch(submitForm(form)),
        onRentBike: form => dispatch(rentBike(form)),
        onFetchOrders: selectedModel => dispatch(fetchSelectedModelOrders(selectedModel)),
        onFetchOrdersFail: error => dispatch(fetchOrdersFail(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
