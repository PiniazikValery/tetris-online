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
}

export default CollisionDetector;
