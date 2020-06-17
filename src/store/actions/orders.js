import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const fetchOrdersSuccess = orders => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = error => {
    return {
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
            dispatch(fetchOrdersSuccess(response.data));
        } catch(error) {
            if(error.response === undefined) {
                dispatch(fetchOrdersFail(null));
            } else {
                dispatch(fetchOrdersFail(error.response.data.error));
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
            const fetchedOrders = [];

            for ( let key in response.data ) {
                fetchedOrders.push( {
                    ...response.data[key],
                    id: key
                } );
            }
            dispatch(fetchUserOrdersSuccess(fetchedOrders));
        } catch(error) {
            if(error.response === undefined) {
                dispatch(fetchOrdersFail(null));
            } else {
                dispatch(fetchOrdersFail(error.response.data.error));
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
            const fetchedOrders = [];

            for ( let key in response.data ) {
                fetchedOrders.push( {
                    ...response.data[key],
                    id: key
                } );
            }
            dispatch(fetchOrdersSuccess(fetchedOrders));
            return fetchedOrders;
        } catch(error) {
            if(error.response === undefined) {
                dispatch(fetchOrdersFail(null));
            } else {
                dispatch(fetchOrdersFail(error.response.data.error));
            }
        }
    }
}

////////////////////////////////////////////


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
            } else {
                dispatch(deleteItemFail(error.response.data.error));
            }

        }   
    }
}

///////////////////////////////////////////////////////////////////

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