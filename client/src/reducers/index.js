import { combineReducers } from "redux";
import cellsReducer from './cellsReducer';
import currentTetrominoReducer from './currentTetrominoReducer';
import gameEngineReducer from './gameEngineReducer';

export default combineReducers({
    cells: cellsReducer,
    currentTetromino: currentTetrominoReducer,
    gameEngine: gameEngineReducer
});
