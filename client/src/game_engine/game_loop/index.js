import CollisionHandler from '../collision_handler';
import { setCurrentTetromino } from '../../actions';
import store from '../../store';

class GameLoop {
    constructor() {
        this.collisionHandler = new CollisionHandler();
    }

    start() {
        clearInterval(this.loop);
        this.loop = setInterval(() => {
            let { currentTetromino } = store.getState();
            if (this.collisionHandler.isCollides(
                currentTetromino,
                {
                    x: 0,
                    y: 1
                }
            )) {
                store.dispatch(setCurrentTetromino({ ...currentTetromino, y: currentTetromino.y + 1 }));
            }
        }, store.getState().game.speed);
    }

    stop() {
        clearInterval(this.loop);
    }
}

export default GameLoop;
