import { cloneDeep } from 'lodash';
import config from '../../config';

class CollisionDetector {
    constructor(store) {
        this.store = store;
    }

    isCollides(tetromino, offset = { x: 0, y: 0 }) {
        let { cells } = this.store.getState();
        let safeCurrTetromino = cloneDeep(tetromino);
        let safeCells = cloneDeep(cells);
        safeCurrTetromino.x = safeCurrTetromino.x + offset.x;
        safeCurrTetromino.y = safeCurrTetromino.y + offset.y;
        return !safeCurrTetromino.shape.some((tetroRow, tetroRowIndex) => tetroRow.some((tetroCell, tetroColIndex) => {
            if (tetroCell) {
                let tetroXPosition = tetroColIndex + safeCurrTetromino.x;
                let tetroYPosition = tetroRowIndex + safeCurrTetromino.y;
                return safeCells.some((cellsRow, cellsRowIndex) => cellsRow.some((boardCell, cellsColIndex) => {
                    if (boardCell) {
                        return ((tetroXPosition === cellsColIndex) && (tetroYPosition === cellsRowIndex)) ? true : (!(tetroYPosition >= 0 && tetroYPosition < config.ROWS) || !(tetroXPosition >= 0 && tetroXPosition < config.COLS));
                    } else {
                        return false;
                    }
                }))
            } else {
                return false;
            }
        }));
    }
}

export default CollisionDetector;
