import { changeGameVerifierActivationStatus, setCurrentTetromino, mergeTetromino } from '../../actions';
import CollisionHandler from '../collision_handler';
import store from '../../store';

class GameVerifier {
    constructor() {
        this.collisionHandler = new CollisionHandler();
    }

    verify() {
        let { currentTetromino } = store.getState();
        if (!this.collisionHandler.isCollides(
            currentTetromino,
            {
                x: 0,
                y: 1
            }
        )) {
            store.dispatch(changeGameVerifierActivationStatus());
            this.settingTimeout = setTimeout((y) => {
                let { currentTetromino } = store.getState();
                if (currentTetromino.y === y) {
                    if (!this.collisionHandler.isCollides(
                        currentTetromino,
                        {
                            x: 0,
                            y: 1
                        }
                    )) {
                        store.dispatch(mergeTetromino(this.collisionHandler.hardDrop(currentTetromino)));
                        store.dispatch(setCurrentTetromino({ ...currentTetromino, y: 0, x: 3 }));
                    }
                }
                store.dispatch(changeGameVerifierActivationStatus());
            }, 1000, currentTetromino.y);
        }
    }
}

export default GameVerifier;
