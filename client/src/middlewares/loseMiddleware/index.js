import { CONSTANTS, setGameOver, setPlayerWin } from '../../actions';
import { isCollides } from '../../game_engine/collision_handler';

const setOpponentsWin = store => {
    let { socket } = store.getState().player;
    let { socketId } = store.getState().opponent;
    if (socket && socketId) {
        socket.emit('player_lost', socketId);
    }
}

const loseMiddleware = store => next => action => {
    switch (action.type) {
        case CONSTANTS.MERGE_TETROMINO: {
            let { game } = store.getState();
            if (!game.isGameOver) {
                if ((!(action.payload.tetromino.y >= 0))) {
                    setOpponentsWin(store);
                    store.dispatch(setPlayerWin(false));
                    return next(setGameOver(true));
                }
            }
            return next(action);
        }
        case CONSTANTS.REFRESHED: {
            let { currentTetromino, game } = store.getState();
            if (!game.isGameOver) {
                if (!isCollides(currentTetromino) && currentTetromino.y === 0) {
                    setOpponentsWin(store);
                    store.dispatch(setPlayerWin(false));
                    return next(setGameOver(true));
                }
            }
            return next(action);
        }
        case CONSTANTS.ADD_TRASH_ROW: {
            let { count } = action.payload;
            let { cells } = store.getState();
            let { game } = store.getState();
            if (!game.isGameOver) {
                for (let i = 0; i < count; i++) {
                    cells[i].forEach(cell => {
                        if (cell) {
                            setOpponentsWin(store);
                            store.dispatch(setPlayerWin(false));
                            return next(setGameOver(true));
                        }
                    });
                }
            }
            return next(action);
        }
        default: {
            return next(action);
        }
    }
};

export default loseMiddleware;
