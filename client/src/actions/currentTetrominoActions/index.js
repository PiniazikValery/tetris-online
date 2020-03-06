import { CONSTANTS } from '../index';
import { clearInputAttacks, addTrashRow } from '../index';
import config from '../../config';

export const setCurrentTetromino = (newTetromino) => ({
    type: CONSTANTS.SET_CURRENT_TETROMINO,
    payload: newTetromino
});

export const refreshTetromino = (anywayRefresh) => {
    return (dispatch, getState) => {
        let { game } = getState();
        if (anywayRefresh) {
            dispatchRefreshTetromino(dispatch, getState);
        } else {
            if (!game.isGameOver) {
                dispatchRefreshTetromino(dispatch, getState);
            }
        }
    }
};

const dispatchRefreshTetromino = (dispatch, getState) => {
    let { inputAttacks } = getState().opponent;
    inputAttacks.forEach(attackType => {
        switch (attackType) {
            case config.OFFENSIVE_SKILLS.ADD_TRASH_LINE.name: {
                dispatch(addTrashRow(1));
                break;
            }
            default: {
                break;
            }
        }
    });
    dispatch(clearInputAttacks());
    dispatch({ type: CONSTANTS.REFRESH_TETROMINO });
    dispatch({ type: CONSTANTS.REFRESHED });
}