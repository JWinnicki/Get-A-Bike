import React from 'react';
import {connect} from 'react-redux';

import styles from './ModalContent.module.scss';
import Spinner from '../Spinner/Spinner';
import DayCard from '../../views/CheckIfAvailable/CheckIfAvailableComponents/DayCard/DayCard';
import RentalSummary from '../../views/RentFormContainer/RentFormContainerComponents/RentalSummary/RentalSummary';
import ModalMessage from '../ModalMessage/ModalMessage';
import {cancelConfirmation, submitForm, rentBike, fetchSelectedModelOrders, fetchOrdersFail} from '../../store/actions';

const ModalContent = props => {

    const isRenting = () => props.renting && !props.error;
    const isCheckingAvailability = () => props.checkingOrders && !props.error && props.fetched;
    const isLoading = () => props.loading && !props.error;

 
    const renderModalContent = () => {
        if(isLoading()) {
            return (
                <div className={styles.MessageContainer}>
                    <Spinner />
                </div>
              )
        } else if(isRenting()) {
            return <RentalSummary 
                        order={props.order} 
                        cancelOrder={props.onCancelOrder} 
                        submitForm={props.onRentBike} 
                        fetchOrders={props.onFetchOrders} 
                        rented={props.rented} 
                        fetched={props.fetched} 
                        loading={props.loading}
                        orders={props.orders}
                        error={props.error}
                        fetchOrdersFail={props.onFetchOrdersFail}
                    />
        } else if(isCheckingAvailability()) {
            return <DayCard
                        closeModal={props.onCancelOrder}
                        orders={props.ordersOfTheDay}
                        dayInfo={props.dayInfo}
                    />
        } else {
            return <ModalMessage
                        errorMsg={props.errorMsg}
                        error={props.error}
                        loading={props.loading}
                        rented={props.rented}
                        deleted={props.deleted}
                        fetched={props.fetched}
                        checkingOrders={props.checkingOrders}
                        cancelOrder={props.onCancelOrder}
                    />
        }
    }

    return renderModalContent();
}

const mapPropsToState = state => {
    const {orders, appState} = state;

    return {
        order: orders.order,
        orders: orders.orders,
        ordersOfTheDay: orders.ordersOfTheDay,
        dayInfo: orders.dayInfo,
        error: appState.error,
        errorMsg: appState.errorMsg,
        fetched: appState.fetched,
        rented: appState.rented,
        renting: appState.renting,
        loading: appState.loading,
        deleted: appState.deleted,
        checkingOrders: appState.checkingOrders,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onCancelOrder: () => dispatch(cancelConfirmation()),
      onSubmitForm: form => dispatch(submitForm(form)),
      onRentBike: form => dispatch(rentBike(form)),
      onFetchOrders: selectedModel => dispatch(fetchSelectedModelOrders(selectedModel)),
      onFetchOrdersFail: error => dispatch(fetchOrdersFail(error))
    }
  }

export default connect(mapPropsToState, mapDispatchToProps)(ModalContent);