import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { cellsMiddleware } from '../middlewares';

const store = createStore(rootReducer, applyMiddleware(cellsMiddleware));

export default store;
