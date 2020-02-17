import { CONSTANTS } from '../index';

export const setCurrentTetromino = (newTetromino) => ({
    type: CONSTANTS.SET_CURRENT_TETROMINO,
    payload: newTetromino
});

export const refreshTetromino = () => ({
    type: CONSTANTS.REFRESH_TETROMINO
});
