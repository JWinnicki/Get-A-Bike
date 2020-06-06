import React from 'react';
import {connect} from 'react-redux';

import styles from './ModalContent.module.scss';
import Spinner from '../Spinner/Spinner';
import DayCard from '../../views/CheckIfAvailable/CheckIfAvailableComponents/DayCard/DayCard';
import RentalSummary from '../../views/RentFormContainer/RentFormContainerComponents/RentalSummary/RentalSummary';
import ModalMessage from '../ModalMessage/ModalMessage';
import { cancelConfirmation, submitForm, rentBike, fetchSelectedModelOrders, fetchOrdersFail } from '../../store/actions';

const ModalContent = props => {

    const isRenting = () => props.renting && !props.error;
    const isCheckingAvailability = () => props.checkingOrders && !props.error && props.fetched;
    const isLoading = () => props.loading && !props.error;

 
    const renderModalContent = () => {
        if(isLoading()) {
            return (
                <div className={styles.messageContainer}>
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

    return (
        <>
            {renderModalContent()}
        </>
        
    );
}

const mapPropsToState = state => {
    return {
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
      onCancelOrder: () => dispatch(cancelConfirmation()),
      onSubmitForm: form => dispatch(submitForm(form)),
      onRentBike: form => dispatch(rentBike(form)),
      onFetchOrders: selectedModel => dispatch(fetchSelectedModelOrders(selectedModel)),
      onFetchOrdersFail: error => dispatch(fetchOrdersFail(error))
    }
  }

export default connect(mapPropsToState, mapDispatchToProps)(ModalContent);