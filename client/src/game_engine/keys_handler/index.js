import KeyActionsHandler from './key_actions_handler';
import config from '../../config';

class KeysHandler extends KeyActionsHandler {
    startKeysListening() {
        document.addEventListener('keydown', event => {
            if (event.keyCode === config.KEYS.DOWN) {
                this.SingleClick = true;
                if (!this.holdInterval) {
                    this.holdInterval = setInterval(() => {
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
            if (this.holdInterval) {
                clearInterval(this.holdInterval);
                this.holdInterval = undefined;
            }
        });
    }
}
export default KeysHandler;
