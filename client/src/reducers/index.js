import { combineReducers } from "redux";
import cellsReducer from './cellsReducer';
import currentTetrominoReducer from './currentTetrominoReducer';

export default combineReducers({
    cells: cellsReducer,
    currentTetromino: currentTetrominoReducer
});
