import { CONSTANTS, setGameOver } from '../../actions';

const cellsMiddleware = store => next => action => {
    switch (action.type) {
        case CONSTANTS.MERGE_TETROMINO: {
            if (!(action.payload.tetromino.y >= 0)) {
                return next(setGameOver(true));
            }
            return next(action);
        }
        default: {
            return next(action);
        }
    }
};

export default cellsMiddleware;
