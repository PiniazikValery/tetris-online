import { CONSTANTS } from '../index';

export const replaceCurrentTetromino = (x, y) => ({
    type: CONSTANTS.REPLACE_CURRENT_TETROMINO,
    payload: {
        x, y
    }
});
