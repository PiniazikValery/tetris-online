import KeyActionsHandler from '../key_actions_handler';
import config from '../../config';

class KeysHandler extends KeyActionsHandler {
    constructor() {
        super();
        this.onKeyDownAction = this.onKeyDownAction.bind(this);
        this.onKeyUpAction = this.onKeyUpAction.bind(this);
    }

    onKeyDownAction(event) {
        if (config.KEYS.HOLDABLE_KEYS.includes(event.keyCode)) {
            this.SingleClick = true;
            if (!this[`hold${event.keyCode}`]) {
                this[`hold${event.keyCode}`] = setInterval(() => {
                    this.SingleClick = false;
                    this.actionsArray.push(event);
                }, config.DROP_SPEED);
            }
        } else {
            this.actionsArray.push(event);
        }
    }

    onKeyUpAction(event) {
        if (this.SingleClick) {
            this.SingleClick = false;
            this.actionsArray.push(event);
        }
        if (this[`hold${event.keyCode}`]) {
            clearInterval(this[`hold${event.keyCode}`]);
            this[`hold${event.keyCode}`] = undefined;
        }
    }

    startKeysListening() {
        document.addEventListener('keydown', this.onKeyDownAction);
        document.addEventListener('keyup', this.onKeyUpAction);
        this.actionsArray.addEventListener('itemadded', this.handleHardDrop);
        this.actionsArray.addEventListener('itemadded', this.handleActions);
    }

    stopKeysListening() {
        document.removeEventListener('keydown', this.onKeyDownAction);
        document.removeEventListener('keyup', this.onKeyUpAction);
        this.actionsArray.removeEventListener('itemadded', this.handleHardDrop);
        this.actionsArray.removeEventListener('itemadded', this.handleActions);
    }
}
export default KeysHandler;
