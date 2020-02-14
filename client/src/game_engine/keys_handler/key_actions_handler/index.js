import { setCurrentTetromino, mergeTetromino } from '../../../actions';
import config from '../../../config';
import { cloneDeep } from 'lodash';
import CollisionHandler from '../../collision_handler';
import ActionsArray from '../observable_actions_array';
import store from '../../../store';

class KeyActionsHandler {
    constructor() {
        this.actionsArray = new ActionsArray([]);
        this.collisionHandler = new CollisionHandler();
        this.actionsArray.addEventListener('itemadded', () => this.handleHardDrop());
        this.actionsArray.addEventListener('itemadded', () => this.handleActions());
    }

    handleActions() {
        this.handleMoving();
        this.handleRotation();
        this.actionsArray.clear();
    }

    handleHardDrop() {
        if (this.actionsArray.includesActionByKey(config.KEYS.HARD_DROP)) {
            let { currentTetromino } = store.getState();
            store.dispatch(mergeTetromino(this.collisionHandler.hardDrop(currentTetromino)));
            store.dispatch(setCurrentTetromino({ ...currentTetromino, y: 0, x: 3 }));
        }
    }

    handleMoving() {
        let offset = {
            x: 0,
            y: 0
        }
        let { currentTetromino } = store.getState();
        this.actionsArray.forEach(element => {
            switch (element.keyCode) {
                case config.KEYS.DOWN: {
                    if (this.collisionHandler.isCollides(
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
                    if (this.collisionHandler.isCollides(
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
                    if (this.collisionHandler.isCollides(
                        currentTetromino,
                        {
                            x: offset.x + 1,
                            y: offset.y
                        })) {
                        offset.x++;
                    }
                    break;
                }
                default: {
                    break;
                }
            }
        });
        store.dispatch(setCurrentTetromino({
            ...currentTetromino,
            x: currentTetromino.x + offset.x,
            y: currentTetromino.y + offset.y
        }));
    }

    handleRotation() {
        let { currentTetromino } = store.getState();
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
                let replacedTetromino = this.collisionHandler.getAvaliableClosePosition(safeCurrentTetromino);
                if (replacedTetromino) {
                    safeCurrentTetromino = { ...safeCurrentTetromino, x: replacedTetromino.x, y: replacedTetromino.y };
                } else {
                    safeCurrentTetromino.shape = originShape;
                }
            }
        })
        store.dispatch(setCurrentTetromino(safeCurrentTetromino));
    }
}

export default KeyActionsHandler;
