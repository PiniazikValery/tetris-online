import { setCurrentTetromino, mergeTetromino } from '../../../actions';
import { changeGameVerifierActivationStatus } from '../../../actions';

class GameVerifier {
    constructor(store, collisionHandler) {
        this.collisionHandler = collisionHandler;
        this.store = store;
    }

    start() {
        setInterval(() => {
            if (this.store.getState().gameEngine.gameVerifierActivated) {
                let { currentTetromino } = this.store.getState();
                if (!this.collisionHandler.isCollides(
                    currentTetromino,
                    {
                        x: 0,
                        y: 1
                    }
                )) {

                    this.store.dispatch(changeGameVerifierActivationStatus());
                    setTimeout(() => {
                        let { currentTetromino } = this.store.getState();
                        if (!this.collisionHandler.isCollides(
                            currentTetromino,
                            {
                                x: 0,
                                y: 1
                            }
                        )) {
                            this.store.dispatch(mergeTetromino(this.collisionHandler.hardDrop(currentTetromino)));
                            this.store.dispatch(setCurrentTetromino({ ...currentTetromino, y: 0, x: 3 }));
                        }
                        this.store.dispatch(changeGameVerifierActivationStatus());
                    }, 1000);
                }
            }
        }, 10);
    }
}

export default GameVerifier;
