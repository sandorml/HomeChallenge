import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux'
import SagaApp from './sagas';

const sagaMid = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(sagaMid));

sagaMid.run(SagaApp)




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
