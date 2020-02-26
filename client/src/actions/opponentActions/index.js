import { CONSTANTS } from '../index';

export const setOpponent = socketId => ({
    type: CONSTANTS.SET_OPPONENT,
    payload: {
        socketId
    }
});

export const removeOpponent = () => ({
    type: CONSTANTS.REMOVE_OPPONENT
});
