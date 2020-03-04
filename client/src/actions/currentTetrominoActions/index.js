import { CONSTANTS } from '../index';

export const setCurrentTetromino = (newTetromino) => ({
    type: CONSTANTS.SET_CURRENT_TETROMINO,
    payload: newTetromino
});

export const refreshTetromino = (anywayRefresh) => {
    return (dispatch, getState) => {
        let { game } = getState();
        if (anywayRefresh) {
            dispatch({ type: CONSTANTS.REFRESH_TETROMINO });
            dispatch({ type: CONSTANTS.REFRESHED });
        } else {
            if (!game.isGameOver) {
                dispatch({ type: CONSTANTS.REFRESH_TETROMINO });
                dispatch({ type: CONSTANTS.REFRESHED });
            }
        }
    }
};
