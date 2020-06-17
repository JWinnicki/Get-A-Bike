import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './store/reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

const app = (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

