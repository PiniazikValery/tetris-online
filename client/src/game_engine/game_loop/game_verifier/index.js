import { setCurrentTetromino } from '../../../actions';

class GameVerifier {
    constructor(store, collisionDetector) {
        this.collisionDetector = collisionDetector;
        this.store = store;
        this.verifierIsStoped = false;
    }

    start() {
        setInterval(() => {
            if (!this.verifierIsStoped) {
                let { currentTetromino } = this.store.getState();
                if (!this.collisionDetector.isCollides(
                    currentTetromino,
                    {
                        x: 0,
                        y: 1
                    }
                )) {
                    this.verifierIsStoped = true;
                    this.dropTimeOut = setTimeout(() => {
                        this.verifierIsStoped = false;
                        this.store.dispatch(setCurrentTetromino({ ...currentTetromino, y: 0 }))
                    }, 1000);
                }
            }
        }, 100);
    }
}

export default GameVerifier;
