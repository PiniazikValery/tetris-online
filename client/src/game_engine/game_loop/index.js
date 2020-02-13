import CollisionHandler from '../collision_handler';
import { setCurrentTetromino, changeGameLoopActivationStatus } from '../../actions';
import GameVerifier from './game_verifier';

class GameLoop {
    constructor(store) {
        this.store = store;
        this.collisionHandler = new CollisionHandler(this.store);
        this.gameVerifier = new GameVerifier(this.store, this.collisionHandler);
        this.gameVerifier.start();
    }

    start() {
        setInterval(() => {
            if (this.store.getState().gameEngine.gameLoopActivated) {
                let { currentTetromino } = this.store.getState();
                if (this.collisionHandler.isCollides(
                    currentTetromino,
                    {
                        x: 0,
                        y: 1
                    }
                )) {
                    this.store.dispatch(setCurrentTetromino({ ...currentTetromino, y: currentTetromino.y + 1 }));
                }
            }
        }, 1000);
    }
}

export default GameLoop;
