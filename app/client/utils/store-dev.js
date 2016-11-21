
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducers } from 'reducers';

const reducer = combineReducers(reducers);

import { DevTools } from './main-dev';

let store;

export function makeStore(initialState = {}, middlewares = [reduxThunk]) {
    /* eslint no-undef: 0*/
    const persistParam = window.location.href.match(/[?&]debug_session=([^&]+)\b/);

    const finalCreateStore = compose(
        applyMiddleware(...middlewares),
        DevTools.instrument(),
        /* eslint global-require: 0*/
        require('redux-devtools').persistState(persistParam),
    )(createStore);

    store = finalCreateStore(reducer, initialState);

    return store;
}

export function dispatch(action) {
    store.dispatch(action);
}
