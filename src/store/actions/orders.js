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

export const rentSucces = (orderData, id) => {
    return {
        type: actionTypes.RENT_SUCCES,
        orderId: id,
        orderData: orderData
    }
}

export const rentBike = orderData => {
    return async dispatch => {
        dispatch(rentStart());
        
        try{
            const response = await axios.post(`/orders.json`, orderData); //`/orders/${orderData.selectedModel}.json`
            //console.log(response);
            dispatch(rentSucces(orderData, response.data.name));
        } catch(error) {
            
            if(error.response === undefined) {
                dispatch(rentFail(null));
                //console.log(error);
            } else {
                dispatch(rentFail(error.response.data.error));
                //console.log(error.response.data.response);
            }
            
        }
    }
    /* return dispatch => {
        dispatch(rentStart());

        axios.post(`/orders/${orderData.selectedModel}`, orderData)
            .then( response => {
                console.log(response);
                dispatch(rentSucces(orderData, response.data.name));
            })
            .catch(error => {
                console.log(error);
                dispatch(rentFail(error));
            });
    } */
}

export const fetchOrdersSucces = orders => {
    return{
        type: actionTypes.FETCH_ORDERS_SUCCES,
        orders: orders
    };
};

export const fetchOrdersFail = error => {
    return{
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: true,
        errorMsg: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = () => {
    return async dispatch => {
        dispatch(fetchOrdersStart());

        try {
            const response = await axios.get(`/orders.json`);
            //console.log(response.data);
            dispatch(fetchOrdersSucces(response.data));
        } catch(error) {
            if(error.response === undefined) {
                dispatch(fetchOrdersFail(null));
                //console.log(error);
            } else {
                dispatch(fetchOrdersFail(error.response.data.error));
                //console.log(error.response.data.error);
            }
            
        }
    }
}

export const fetchUserOrdersSuccess = fetchedOrders => {
    return {
        type: actionTypes.FETCH_USER_ORDERS_SUCCESS,
        fetchedOrders: fetchedOrders
    }
}

export const fetchUserOrders = (token, userId) => {
    return async dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;

        try {
            const response = await axios.get(`/orders.json${queryParams}`);
            //console.log(response.data);
            const fetchedOrders = [];

            for ( let key in response.data ) {
                fetchedOrders.push( {
                    ...response.data[key],
                    id: key
                } );
            }
            dispatch(fetchUserOrdersSuccess(fetchedOrders));
            //console.log(fetchedOrders);
        } catch(error) {
            if(error.response === undefined) {
                dispatch(fetchOrdersFail(null));
                //console.log(error);
            } else {
                dispatch(fetchOrdersFail(error.response.data.error));
                //console.log(error.response.data.error);
            }
            
        }
    }
}

export const fetchSelectedModelOrders = selectedModel => {
    return async dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = `?orderBy="selectedModel"&equalTo="${selectedModel}"`;

        try {
            const response = await axios.get(`/orders.json${queryParams}`);
            //console.log(selectedModel);
            const fetchedOrders = [];

            for ( let key in response.data ) {
                fetchedOrders.push( {
                    ...response.data[key],
                    id: key
                } );
            }
            dispatch(fetchOrdersSucces(fetchedOrders));
            //console.log(fetchedOrders);
            return fetchedOrders;
        } catch(error) {
            if(error.response === undefined) {
                dispatch(fetchOrdersFail(null));
                //console.log(error);
            } else {
                dispatch(fetchOrdersFail(error.response.data.error));
                //console.log(error.response.data.error);
            }
            
        }
    }
}


export const deleteItemStart = () => {
    return {
        type: actionTypes.DELETE_ITEM_START
    }
}

export const deleteItemFail = error => {
    return {
        type: actionTypes.DELETE_ITEM_FAIL,
        errorMsg: error
    }
}

export const deleteItemSuccess = orderId => {
    return {
        type: actionTypes.DELETE_ITEM_SUCCESS,
        orderId: orderId
    }
}

export const deleteItem = orderId => {
    return async dispatch => {
        dispatch(deleteItemStart());

        try {

            axios.delete(`/orders/${orderId}.json`);
            dispatch(deleteItemSuccess(orderId));


        } catch(error) {

            if(error.response === undefined) {
                dispatch(deleteItemFail(null));
                //console.log(error);
            } else {
                dispatch(deleteItemFail(error.response.data.error));
                //console.log(error.response.data.error);
            }

        }   
    }
}

export const clearOrdersArr = () => {
    return {
        type: actionTypes.CLEAR_ORDERS_ARR
    }
}

export const getOrdersOfTheDay = (orders, dayInfo) => {
    return {
        type: actionTypes.GET_ORDERS_OF_THE_DAY,
        orders: orders,
        dayInfo: dayInfo
    }
}