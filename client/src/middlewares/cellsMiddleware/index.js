import { CONSTANTS, setGameOver } from '../../actions';

const cellsMiddleware = store => next => action => {
    switch (action.type) {
        case CONSTANTS.MERGE_TETROMINO: {
            if (action.payload.tetromino.y >= 0) {
                return next(action);
            } else {
                next(setGameOver(true));
            }
            break;
        }
        default: {
            return next(action);
        }
    }
};

export default cellsMiddleware;
