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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
        case CONSTANTS.REMOVE_FIRST_ROW: {
            let resultCells = clone(state);
            resultCells.splice(state.length - 1, 1);
            for (let i = 0; i < 1; i++) {
                resultCells.unshift(Array(config.COLS).fill(0));
            }
            return resultCells;
        }
        case CONSTANTS.MERGE_TETROMINO: {
            let { tetromino } = action.payload;
            let workCells = cloneDeep(state);
            tetromino.shape.forEach((tetroRow, tetroRowIndex) => tetroRow.forEach((tetroCell, tetroColIndex) => {
                if (tetroCell) {
                    try {
                        workCells[tetroRowIndex + tetromino.y][tetroColIndex + tetromino.x] = tetromino.shape[tetroRowIndex][tetroColIndex];
                    } catch { }
                }
            }));
            return workCells;
        }
        case CONSTANTS.ADD_TRASH_ROW: {
            let { count } = action.payload;
            let resultCells = clone(state);
            let generateTrashRow = () => {
                let result = Array(config.COLS).fill(8);
                result[Math.floor(Math.random() * config.COLS)] = 0;
                return result;
            };
            resultCells.splice(0, count);
            for (let i = 1; i <= count; i++) {
                resultCells.push(generateTrashRow());
            }
            return resultCells;
        }
        default: {
            return state;
        }
    }
}

export default cellsReducer;
