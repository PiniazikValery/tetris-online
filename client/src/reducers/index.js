import { combineReducers } from "redux";
import cellsReducer from './cellsReducer';
import currentTetrominoReducer from './currentTetrominoReducer';
import gameEngineReducer from './gameEngineReducer';
import gameReducer from './gameReducer';
import playerReducer from './playerReducer';
import opponentReducer from './opponentReducer';

export default combineReducers({
    cells: cellsReducer,
    currentTetromino: currentTetrominoReducer,
    gameEngine: gameEngineReducer,
    game: gameReducer,
    player: playerReducer,
    opponent: opponentReducer
});
