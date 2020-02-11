import { CONSTANTS } from '../index';

export const replaceCurrentTetromino = (x, y) => ({
    type: CONSTANTS.REPLACE_CURRENT_TETROMINO,
    payload: {
        x, y
    }
});

export const setCurrentTetromino = (newTetromino) => ({
    type: CONSTANTS.SET_CURRENT_TETROMINO,
    payload: newTetromino
});
