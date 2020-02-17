import { combineReducers } from "redux";
import cellsReducer from './cellsReducer';
import currentTetrominoReducer from './currentTetrominoReducer';
import gameEngineReducer from './gameEngineReducer';
import gameReducer from './gameReducer';

export default combineReducers({
    cells: cellsReducer,
    currentTetromino: currentTetrominoReducer,
    gameEngine: gameEngineReducer,
    game: gameReducer
});
