import { cloneDeep } from 'lodash';
import { changeGameLoopActivationStatus } from '../../actions';
import store from '../../store';
import config from '../../config';

class CollisionHandler {
    isCollides(tetromino, offset = { x: 0, y: 0 }) {
        let { cells } = store.getState();
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
                        return (!(tetroYPosition >= 0 && tetroYPosition < config.ROWS) || !(tetroXPosition >= 0 && tetroXPosition < config.COLS));
                    }
                }))
            } else {
                return false;
            }
        }));
    }

    getAvaliableClosePosition(tetromino) {
        let tetrominoCopy = cloneDeep(tetromino);
        for (let x = 0; x < tetrominoCopy.shape.length; x++) {
            tetrominoCopy.x = tetrominoCopy.x + x;
            if (this.isCollides(tetrominoCopy)) {
                return tetrominoCopy;
            }
            tetrominoCopy.x = tetrominoCopy.x - x * 2;
            if (this.isCollides(tetrominoCopy)) {
                return tetrominoCopy;
            }
            tetrominoCopy.x = tetrominoCopy.x + x;
            tetrominoCopy.y = tetrominoCopy.y - x;
            if (this.isCollides(tetrominoCopy)) {
                return tetrominoCopy;
            }
            tetrominoCopy.y = tetrominoCopy.y + x;
        }
        return undefined;
    }

    hardDrop(tetromino) {
        let workTetromino = cloneDeep(tetromino);
        while (this.isCollides(workTetromino)) {
            workTetromino.y++;
        }
        workTetromino.y--;
        store.dispatch(changeGameLoopActivationStatus());
        setTimeout(() => store.dispatch(changeGameLoopActivationStatus()), 1000);
        return workTetromino;
    }
}

export default CollisionHandler;
