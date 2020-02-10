import { replaceCurrentTetromino } from '../../actions';
import config from '../../config';
import ActionsArray from '../observable_actions_array';

class KeyActionsHandler {
    constructor(store) {
        this.store = store;
        this.actionsArray = new ActionsArray([]);
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
                    offset.y++;
                    break;
                }
                case config.KEYS.LEFT: {
                    offset.x--;
                    break;
                }
                case config.KEYS.RIGHT: {
                    offset.x++;
                    break;
                }
                default: {
                    break;
                }
            }
        });
        this.actionsArray.clear();
        this.store.dispatch(replaceCurrentTetromino(currentTetromino.x + offset.x, currentTetromino.y + offset.y));
    }
}

export default KeyActionsHandler;
