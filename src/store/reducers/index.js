import { combineReducers } from 'redux';

import motorcyclesReducer from './motorcyclesReducer';
import ordersReducer from './ordersReducer';
import authReducer from './authReducer';


export default combineReducers({
    motorcycles: motorcyclesReducer,
    orders: ordersReducer,
    auth: authReducer
});