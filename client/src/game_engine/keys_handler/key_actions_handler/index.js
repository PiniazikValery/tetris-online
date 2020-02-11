import { replaceCurrentTetromino, setCurrentTetromino } from '../../../actions';
import config from '../../../config';
import { cloneDeep } from 'lodash';
import CollisionDetector from '../../collision_detector';
import ActionsArray from '../observable_actions_array';

class KeyActionsHandler {
    constructor(store) {
        this.store = store;
        this.actionsArray = new ActionsArray([]);
        this.collisionDetector = new CollisionDetector(store);
        this.actionsArray.addEventListener('itemadded', () => this.handleActions());
    }

    handleActions() {
        this.handleMoving();
        this.handleRotation();
        this.actionsArray.clear();
    }

    handleMoving() {
        let offset = {
            x: 0,
            y: 0
        }
        let { currentTetromino } = this.store.getState();
        this.actionsArray.forEach(element => {
            switch (element.keyCode) {
                case config.KEYS.DOWN: {
                    if (this.collisionDetector.isCollides(
                        currentTetromino,
                        {
                            x: offset.x,
                            y: offset.y + 1
                        }
                    )) {
                        offset.y++;
                    }
                    break;
                }
                case config.KEYS.LEFT: {
                    if (this.collisionDetector.isCollides(
                        currentTetromino,
                        {
                            x: offset.x - 1,
                            y: offset.y
                        })) {
                        offset.x--;
                    }
                    break;
                }
                case config.KEYS.RIGHT: {
                    if (this.collisionDetector.isCollides(
                        currentTetromino,
                        {
                            x: offset.x + 1,
                            y: offset.y
                        })) {
                        offset.x++;
                    }
                    break;
                }
                // for testing
                case 38: {
                    if (this.collisionDetector.isCollides(
                        currentTetromino,
                        {
                            x: offset.x,
                            y: offset.y - 1
                        })) {
                        offset.y--;
                    }
                    break;
                }
                // for testing
                default: {
                    break;
                }
            }
        });
        this.store.dispatch(replaceCurrentTetromino(currentTetromino.x + offset.x, currentTetromino.y + offset.y));
    }

    handleRotation() {
        let { currentTetromino } = this.store.getState();
        let safeCurrentTetromino = cloneDeep(currentTetromino);
        this.actionsArray.forEach(action => {
            if (action.keyCode === config.KEYS.ROTATE) {
                let originShape = cloneDeep(safeCurrentTetromino.shape);
                for (let y = 0; y < safeCurrentTetromino.shape.length; ++y) {
                    for (let x = 0; x < y; ++x) {
                        [safeCurrentTetromino.shape[x][y], safeCurrentTetromino.shape[y][x]] =
                            [safeCurrentTetromino.shape[y][x], safeCurrentTetromino.shape[x][y]];
                    }
                }
                safeCurrentTetromino.shape.forEach(row => row.reverse());
                if (!this.collisionDetector.isCollides(safeCurrentTetromino)) {
                    safeCurrentTetromino.shape = originShape;
                }
            }
        })
        this.store.dispatch(setCurrentTetromino(safeCurrentTetromino));
    }
}

export default KeyActionsHandler;
