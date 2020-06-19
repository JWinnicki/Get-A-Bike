import { combineReducers } from 'redux';

import motorcyclesReducer from './motorcyclesReducer';
import ordersReducer from './ordersReducer';
import authReducer from './authReducer';
import appStateReducer from './appStateReducer';


export default combineReducers({
    motorcycles: motorcyclesReducer,
    orders: ordersReducer,
    auth: authReducer,
    appState: appStateReducer
});



