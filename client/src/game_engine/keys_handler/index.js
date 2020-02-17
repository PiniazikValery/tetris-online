import KeyActionsHandler from '../key_actions_handler';
import config from '../../config';

class KeysHandler extends KeyActionsHandler {
    startKeysListening() {
        document.addEventListener('keydown', event => {
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
        });
        document.addEventListener('keyup', event => {
            if (this.SingleClick) {
                this.SingleClick = false;
                this.actionsArray.push(event);
            }
            if (this[`hold${event.keyCode}`]) {
                clearInterval(this[`hold${event.keyCode}`]);
                this[`hold${event.keyCode}`] = undefined;
            }
        });
    }
}
export default KeysHandler;
