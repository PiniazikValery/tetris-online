import {
    offOnGameActivationWithDelay, offOnGameLoopWithDelay, refreshTetromino, mergeTetromino,
    clearRows, increaseSpeed, increaseScore,
    increasePower
} from '../../actions';
import { isCollides, getHardDropedTetromino } from '../collision_handler';
import store from '../../store';

class GameVerifier {
    verifyTetrominoCollideCells() {
        let { currentTetromino } = store.getState();
        let currentId = currentTetromino.id;
        if (!isCollides(
            currentTetromino,
            {
                x: 0,
                y: 1
            }
        )) {
            store.dispatch(offOnGameActivationWithDelay((params) => {
                let { y, currentId } = params;
                let { currentTetromino } = store.getState();
                let { id } = currentTetromino;
                if (currentTetromino.y >= y) {
                    if (!isCollides(
                        currentTetromino,
                        {
                            x: 0,
                            y: currentTetromino.shape.length / 2
                        }
                    ) && currentId === id) {
                        store.dispatch(mergeTetromino(getHardDropedTetromino(currentTetromino)));
                        store.dispatch(offOnGameLoopWithDelay(undefined, 1000));
                        store.dispatch(refreshTetromino());
                    }
                }
            }, 1000, { y: currentTetromino.y, currentId }));
        }
    }

    verifyLineClear() {
        let { cells } = store.getState();
        cells.forEach((row, y) => {
            if (row.every(value => value > 0)) {
                store.dispatch(clearRows(y, 1));
                store.dispatch(increaseSpeed());
                store.dispatch(increaseScore());
                store.dispatch(increasePower());
            }
        });
    }
}

export default GameVerifier;
