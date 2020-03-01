import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { loseMiddleware, defensiveSkillsMiddleware } from '../middlewares';

const store = createStore(rootReducer, applyMiddleware(loseMiddleware, defensiveSkillsMiddleware, thunk));

export default store;
