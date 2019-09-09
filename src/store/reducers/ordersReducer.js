import * as actionTypes from '../actions/actionTypes';


const initialState = {
    orders: [],
    renting: false,
    order: {},
    loading: false,
    error: false,
    errorMsg: null,
    rented: false,
    fetched: false,
    testValues: true,
    userOrders: [],
    deleted: false,
    ordersOfTheDay: [],
    checkingOrders: false,
    dayInfo: {}
}

export default (state=initialState, action) => {
    switch(action.type) {
        /* case actionTypes.SUBMIT_FORM:
            return {
                ...state,
                renting: false,
                order: action.payload,
                orders: state.orders.concat(action.payload),
                [action.payload.selectedModel]: state[action.payload.selectedModel].concat(action.payload)
            }; */
        case actionTypes.START_CONFIRMATION:
            return {
                ...state,
                renting: true,
                order: action.payload,
                rented: false
            }
        case actionTypes.CANCEL_CONFIRMATION:
            return {
                ...state,
                renting: false,
                error: false,
                errorMsg: null,
                deleted: false,
                rented: false,
                ordersOfTheDay: [],
                checkingOrders: false,
                dayInfo: {}
            }
        case actionTypes.RENT_START:
            return {
                ...state,
                loading: true,
                rented: false,
                error: false,
                errorMsg: null
            }
        case actionTypes.RENT_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.errorMsg,
                rented: false,
                renting: true
            }
        case actionTypes.RENT_SUCCES:
            /* const newOrder = {
                ...action.orderData,
                id: action.orderId
            } */

            return {
                ...state,
                orders: {...state.orders, [action.orderData.selectedModel]: {...state.orders[action.orderData.selectedModel], [action.orderId]: action.orderData}},
                loading: false,
                rented: true
            };
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true,
                fetched: false,
                error: false,
                errorMsg: null
            };
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.errorMsg,
                renting: true,
                fetched: false
        };
        case actionTypes.FETCH_ORDERS_SUCCES:
            return {
                ...state,
                loading: false,
                orders: action.orders,
                fetched: true
            };
        case actionTypes.FETCH_USER_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                userOrders: action.fetchedOrders,
                fetched: true
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                userOrders: []
            }
        case actionTypes.DELETE_ITEM_START:
            return {
                ...state,
                loading: true,
                error: false,
                errorMsg: null,
                deleted: false
            }
        case actionTypes.DELETE_ITEM_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.errorMsg,
                deleted: false
            }
        case actionTypes.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                errorMsg: null,
                deleted: true,
                userOrders: state.userOrders.filter(el => el.id !== action.orderId)
            }
        case actionTypes.CLEAR_ORDERS_ARR:
            return {
                ...state,
                orders: [],
                userOrders: [],
                ordersOfTheDay: [],
                fetched: false
            }
        case actionTypes.GET_ORDERS_OF_THE_DAY:
            return {
                ...state,
                ordersOfTheDay: action.orders,
                checkingOrders: true,
                dayInfo: action.dayInfo
            }
        default: 
            return state
    }
    
};