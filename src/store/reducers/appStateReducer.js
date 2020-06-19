import * as actionTypes from '../actions/actionTypes';

export const initialState = {
    renting: false,
    loading: false,
    error: false,
    errorMsg: null,
    rented: false,
    fetched: false,
    deleted: false,
    checkingOrders: false,
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.START_CONFIRMATION:
            return {
                ...state,
                renting: true,
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
                checkingOrders: false,
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
        case actionTypes.RENT_SUCCESS:
            return {
                ...state,
                loading: false,
                rented: true,
                renting: false
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
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                fetched: true
            };
        case actionTypes.FETCH_USER_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                fetched: true
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
            }
        case actionTypes.CLEAR_ORDERS_ARR:
            return {
                ...state,
                fetched: false
            }
        case actionTypes.GET_ORDERS_OF_THE_DAY:
            return {
                ...state,
                checkingOrders: true,
            }
        default: 
            return state
    }
    
};