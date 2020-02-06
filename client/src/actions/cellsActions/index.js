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
