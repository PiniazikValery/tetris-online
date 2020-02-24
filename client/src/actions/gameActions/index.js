import { CONSTANTS } from '../index';

export const increaseSpeed = () => ({
    type: CONSTANTS.INCREASE_SPEED
});

export const resetSpeed = () => ({
    type: CONSTANTS.RESET_SPEED
});

export const setGameOver = value => ({
    type: CONSTANTS.SET_GAME_OVER,
    payload: {
        value
    }
})
