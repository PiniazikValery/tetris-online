import { CONSTANTS } from '../index'

export const increaseScore = () => ({
    type: CONSTANTS.INCREASE_SCORE
});

export const increaseSpeed = () => ({
    type: CONSTANTS.INCREASE_SPEED
});

export const resetScore = () => ({
    type: CONSTANTS.RESET_SCORE
});

export const resetSpeed = () => ({
    type: CONSTANTS.RESET_SPEED
});
