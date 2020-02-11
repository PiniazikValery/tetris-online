import { cloneDeep } from 'lodash';
import config from '../../config';

class CollisionDetector {
    constructor(store) {
        this.store = store;
    }

    willBeWallCollision(offset) {
        let { currentTetromino } = this.store.getState();
        let safeCurrentTetromino = cloneDeep(currentTetromino);
        safeCurrentTetromino.x = safeCurrentTetromino.x + offset.x;
        safeCurrentTetromino.y = safeCurrentTetromino.y + offset.y;
        return !safeCurrentTetromino.shape.some((row, rowIndex) => row.some((cell, colIndex) => {
            if (cell) {
                let yPosition = rowIndex + safeCurrentTetromino.y;
                let xPosition = colIndex + safeCurrentTetromino.x;
                return !(yPosition >= 0 && yPosition < config.ROWS) || !(xPosition >= 0 && xPosition < config.COLS);
            } else {
                return false;
            }
        }));
    }

    willBeCellsCollision(offset) {
        let { currentTetromino, cells } = this.store.getState();
        let safeCurrTetromino = cloneDeep(currentTetromino);
        let safeCells = cloneDeep(cells);
        safeCurrTetromino.x = safeCurrTetromino.x + offset.x;
        safeCurrTetromino.y = safeCurrTetromino.y + offset.y;
        return !safeCurrTetromino.shape.some((tetroRow, tetroRowIndex) => tetroRow.some((tetroCell, tetroColIndex) => {
            if (tetroCell) {
                let tetroXPosition = tetroColIndex + safeCurrTetromino.x;
                let tetroYPosition = tetroRowIndex + safeCurrTetromino.y;
                return safeCells.some((cellsRow, cellsRowIndex) => cellsRow.some((boardCell, cellsColIndex) => {
                    if (boardCell) {
                        return (tetroXPosition === cellsColIndex) && (tetroYPosition === cellsRowIndex);
                    } else {
                        return false;
                    }
                }))
            } else {
                return false;
            }
        }));
    }

    detectWallsAndCellsCollision(offset) {
        return this.willBeCellsCollision(offset) && this.willBeWallCollision(offset);
    }
}

export default CollisionDetector;
