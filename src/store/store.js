import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const middlewares = [];

if(process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
}

middlewares.push(thunk,reduxImmutableStateInvariant());

const store = createStore(
    rootReducer, 
    applyMiddleware(...middlewares)
);

export default store;