import axios from 'axios';

import * as actionTypes from './actionTypes';
import apiKey from '../apiKey';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
        error: false
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFail = errorMsg => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: true,
        errorMsg: errorMsg
    }
}

export const logout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
    
}

export const auth = (email, password, isRegistered, allowLocalStorage) => {
    return async dispatch => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
        if(isRegistered) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
        }

        try {
            const response = await axios.post(url, authData);

            if(allowLocalStorage) {
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
            }

            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn));

        } catch(error) {
            if(error.response === undefined) {
                dispatch(authFail(null));
            } else {
                dispatch(authFail(error.response.data.error.message));
            }

        }
        
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout(( expirationDate.getTime() - new Date().getTime() ) / 1000));
            }

        }
    }
}