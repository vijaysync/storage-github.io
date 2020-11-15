import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authreducer } from './reducer/authreducer';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();


const reducer = combineReducers({
    authreducer
});

export default createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);