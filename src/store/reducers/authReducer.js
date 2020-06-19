import * as actionTypes from '../actions/actionTypes';

export const initialState = {
    error: false,
    errorMsg: null,
    loading: false,
    token: null,
    userId: null
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
                error: false,
                errorMsg: null
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                errorMsg: null,
                token: action.token,
                userId: action.userId
            }
        case actionTypes.AUTH_FAIL: 
            return {
                ...state,
                error: true,
                errorMsg: action.errorMsg,
                loading: false
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null
            }
        default: 
            return state
    }
    
};