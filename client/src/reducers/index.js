import { combineReducers } from "redux";
import cellsReducer from './cellsReducer';

export default combineReducers({
    cells: cellsReducer
});
