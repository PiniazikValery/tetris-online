import { CONSTANTS } from '../index';

export const connectPlayerToServer = () => ({
    type: CONSTANTS.CONNECT_PLAYER_TO_SERVER
});

export const increaseScore = () => ({
    type: CONSTANTS.INCREASE_SCORE
});

export const resetScore = () => ({
    type: CONSTANTS.RESET_SCORE
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

export const resetPower = () => ({
    type: CONSTANTS.RESET_POWER
});
