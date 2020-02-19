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

export const increasePower = () => ({
    type: CONSTANTS.INCREASE_POWER
});

export const decreasePower = amount => ({
    type: CONSTANTS.DECREASE_POWER,
    payload: {
        amount
    }
});

export const setGameOver = value => ({
    type: CONSTANTS.SET_GAME_OVER,
    payload: {
        value
    }
})
