import { changeGameVerifierActivationStatus, refreshTetromino, mergeTetromino, clearRows, clearCells, increaseSpeed, resetSpeed, increaseScore, resetScore } from '../../actions';
import CollisionHandler from '../collision_handler';
import store from '../../store';

class GameVerifier {
    constructor() {
        this.collisionHandler = new CollisionHandler();
    }

    verifyTetrominoCollideCells() {
        let { currentTetromino } = store.getState();
        if (!this.collisionHandler.isCollides(
            currentTetromino,
            {
                x: 0,
                y: 1
            }
        )) {
            store.dispatch(changeGameVerifierActivationStatus());
            clearTimeout(this.settingTimeout);
            this.settingTimeout = setTimeout((y) => {
                let { currentTetromino } = store.getState();
                if (currentTetromino.y === y) {
                    if (!this.collisionHandler.isCollides(
                        currentTetromino,
                        {
                            x: 0,
                            y: currentTetromino.shape.length / 2
                        }
                    )) {
                        store.dispatch(mergeTetromino(this.collisionHandler.hardDrop(currentTetromino)));
                        store.dispatch(refreshTetromino());
                    }
                }
                store.dispatch(changeGameVerifierActivationStatus());
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
                console.log(store.getState().game.score);
            }
        });
    }

    verifyGameOver() {
        let { currentTetromino } = store.getState();
        if (!this.collisionHandler.isCollides(currentTetromino) && currentTetromino.y === 0) {
            store.dispatch(resetSpeed());
            store.dispatch(clearCells());
            store.dispatch(resetScore());
        }
    }
}

export default GameVerifier;
