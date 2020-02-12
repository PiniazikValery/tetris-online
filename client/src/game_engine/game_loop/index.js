import CollisionDetector from '../collision_detector';
import { setCurrentTetromino } from '../../actions';
import GameVerifier from './game_verifier';

class GameLoop {
    constructor(store) {
        this.store = store;
        this.gameLoopIsStoped = false;
        this.collisionDetector = new CollisionDetector(this.store);
        this.gameVerifier = new GameVerifier(this.store, this.collisionDetector);
        this.gameVerifier.start();
    }

    start() {
        setInterval(() => {
            if (!this.gameLoopIsStoped) {
                let { currentTetromino } = this.store.getState();
                if (this.collisionDetector.isCollides(
                    currentTetromino,
                    {
                        x: 0,
                        y: 1
                    }
                )) {
                    if (!currentTetromino.y) {
                        this.gameLoopIsStoped = true;
                        setTimeout(() => {
                            this.gameLoopIsStoped = false;
                            let { currentTetromino } = this.store.getState();
                            this.store.dispatch(setCurrentTetromino({ ...currentTetromino, y: currentTetromino.y + 1 }))
                        }, 1000);
                    } else {
                        this.store.dispatch(setCurrentTetromino({ ...currentTetromino, y: currentTetromino.y + 1 }));
                    }
                }
            }
        }, 10);
    }
}

export default GameLoop;
