import { CONSTANTS } from '../../actions';
import { cloneDeep } from 'lodash';
import { clone } from 'lodash';
import config from '../../config';

const initialState = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 5, 5, 5, 5, 5, 0, 0, 0],
    [5, 0, 5, 5, 5, 5, 0, 0, 0, 0],
    [5, 0, 5, 5, 5, 5, 5, 0, 0, 0],
    [5, 0, 5, 5, 5, 5, 5, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const cellsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.CLEAR_CELLS: {
            return Array(config.ROWS).fill().map(() => Array(config.COLS).fill(0));
        }
        case CONSTANTS.CLEAR_ROWS: {
            let { startIndex, count } = action.payload;
            let resultCells = clone(state);
            resultCells.splice(startIndex, count);
            for (let i = 0; i < count; i++) {
                resultCells.unshift(Array(config.COLS).fill(0));
            }
            return resultCells;
        }
        case CONSTANTS.MERGE_TETROMINO: {
            let { tetromino } = action.payload;
            let workCells = cloneDeep(state);
            tetromino.shape.forEach((tetroRow, tetroRowIndex) => tetroRow.forEach((tetroCell, tetroColIndex) => {
                if (tetroCell) {
                    workCells[tetroRowIndex + tetromino.y][tetroColIndex + tetromino.x] = 5;
                }
            }));
            return workCells;
        }
        default: {
            return state;
        }
    }
}

export default cellsReducer;
