import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { cellsMiddleware, defensiveSkillsMiddleware } from '../middlewares';

const store = createStore(rootReducer, applyMiddleware(cellsMiddleware, defensiveSkillsMiddleware));

export default store;
