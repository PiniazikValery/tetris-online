import { CONSTANTS } from '../index';

export const clearCells = () => ({
    type: CONSTANTS.CLEAR_CELLS
});

export const clearRows = (startIndex, count) => ({
    type: CONSTANTS.CLEAR_ROWS,
    payload: {
        startIndex,
        count
    }
});

export const mergeTetromino = tetromino => ({
    type: CONSTANTS.MERGE_TETROMINO,
    payload: {
        tetromino
    }
});

export const addTrashRow = () => ({
    type: CONSTANTS.ADD_TRASH_ROW
});
