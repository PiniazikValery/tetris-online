import { changeGameVerifierActivationStatus, refreshTetromino, mergeTetromino, clearRows, increaseSpeed, increaseScore, increasePower } from '../../actions';
import { isCollides, hardDrop } from '../collision_handler';
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
            clearTimeout(this.settingTimeout);
            store.dispatch(changeGameVerifierActivationStatus(false));
            this.settingTimeout = setTimeout((y) => {
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
                        store.dispatch(mergeTetromino(hardDrop(currentTetromino)));
                        store.dispatch(refreshTetromino());
                    }
                }
                store.dispatch(changeGameVerifierActivationStatus(true));
            }, 1000, currentTetromino.y);

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
