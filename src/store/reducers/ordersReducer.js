import * as actionTypes from '../actions/actionTypes';

export const initialState = {
    orders: [],
    order: {},
    userOrders: [],
    ordersOfTheDay: [],
    dayInfo: {}
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.START_CONFIRMATION:
            return {
                ...state,
                order: action.payload,
            }
        case actionTypes.CANCEL_CONFIRMATION:
            return {
                ...state,
                ordersOfTheDay: [],
                dayInfo: {}
            }
        case actionTypes.RENT_SUCCESS:
            return {
                ...state,
                orders: {...state.orders, [action.orderData.selectedModel]: {...state.orders[action.orderData.selectedModel], [action.orderId]: action.orderData}},
            };
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
            };
        case actionTypes.FETCH_USER_ORDERS_SUCCESS:
            return {
                ...state,
                userOrders: action.fetchedOrders,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                userOrders: []
            }
        case actionTypes.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                userOrders: state.userOrders.filter(el => el.id !== action.orderId)
            }
        case actionTypes.CLEAR_ORDERS_ARR:
            return {
                ...state,
                orders: [],
                userOrders: [],
                ordersOfTheDay: [],
            }
        case actionTypes.GET_ORDERS_OF_THE_DAY:
            return {
                ...state,
                ordersOfTheDay: action.orders,
                dayInfo: action.dayInfo
            }
        default: 
            return state
    }
};