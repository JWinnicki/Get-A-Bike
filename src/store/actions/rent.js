import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const submitForm = form => {
    return {
        type: actionTypes.SUBMIT_FORM,
        payload: form
    }
}

export const startConfirmation = form => {
    return {
        type: actionTypes.START_CONFIRMATION,
        payload: form
    }
}

export const cancelConfirmation = () => {
    return {
        type: actionTypes.CANCEL_CONFIRMATION
    }
}

export const rentStart = () => {
    return {
        type: actionTypes.RENT_START
    }
}

export const rentFail = error => {
    return {
        type: actionTypes.RENT_FAIL,
        error: true,
        errorMsg: error
    }
}

export const rentSuccess = (orderData, id) => {
    return {
        type: actionTypes.RENT_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const rentBike = orderData => {
    return async dispatch => {
        dispatch(rentStart());
        try{
            const response = await axios.post(`/orders.json`, orderData);
            dispatch(rentSuccess(orderData, response.data.name));
        } catch(error) {
            if(error.response === undefined) {
                dispatch(rentFail(null));
            } else {
                dispatch(rentFail(error.response.data.error));
            }
        }
    }
}