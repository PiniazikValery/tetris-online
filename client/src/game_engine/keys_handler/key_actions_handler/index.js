import { replaceCurrentTetromino } from '../../../actions';
import config from '../../../config';
import CollisionDetector from '../../collision_detector';
import ActionsArray from '../observable_actions_array';

class KeyActionsHandler {
    constructor(store) {
        this.store = store;
        this.actionsArray = new ActionsArray([]);
        this.collisionDetector = new CollisionDetector(store);
        this.actionsArray.addEventListener('itemadded', () => this.handleAction(this.store, this.actionsArray));
    }

    handleAction() {
        let offset = {
            x: 0,
            y: 0
        }
        let { currentTetromino } = this.store.getState();
        this.actionsArray.forEach(element => {
            switch (element.keyCode) {
                case config.KEYS.DOWN: {
                    if (this.collisionDetector.detectWallsAndCellsCollision({
                        x: offset.x,
                        y: offset.y + 1
                    })) {
                        offset.y++;
                    }
                    break;
                }
                case config.KEYS.LEFT: {
                    if (this.collisionDetector.detectWallsAndCellsCollision({
                        x: offset.x - 1,
                        y: offset.y
                    })) {
                        offset.x--;
                    }
                    break;
                }
                case config.KEYS.RIGHT: {
                    if (this.collisionDetector.detectWallsAndCellsCollision({
                        x: offset.x + 1,
                        y: offset.y
                    })) {
                        offset.x++;
                    }
                    break;
                }
                default: {
                    if (this.collisionDetector.detectWallsAndCellsCollision({
                        x: offset.x,
                        y: offset.y - 1
                    })) {
                        offset.y--;
                    }
                    break;
                }
            }
        });
        this.actionsArray.clear();
        this.store.dispatch(replaceCurrentTetromino(currentTetromino.x + offset.x, currentTetromino.y + offset.y));
    }
}

export default KeyActionsHandler;
