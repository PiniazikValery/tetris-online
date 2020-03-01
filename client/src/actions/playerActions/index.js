import { CONSTANTS } from '../index';
import { setUpApi } from '../../websockets_api';
import io from "socket.io-client";
import config from '../../config';

export const connectPlayerToServer = () => {
    return (dispatch) => {
        const socket = setUpApi(io(config.SERVER_URL));
        dispatch({
            type: CONSTANTS.CONNECT_PLAYER_TO_SERVER,
            payload: {
                socket
            }
        })
    }
};

export const disconnectPlayerFromServer = () => {
    return (dispatch, getState) => {
        const { socket } = getState().player;
        socket.disconnect();
        dispatch({
            type: CONSTANTS.DISCONNECT_PLAYER_FROM_SERVER
        });
    }
};

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

export const setPlayerWin = winValue => ({
    type: CONSTANTS.SET_PLAYER_WIN,
    payload: {
        winValue
    }
});

export const setPlayerInSearch = inSearch => ({
    type: CONSTANTS.SET_PLAYER_IN_SEARCH,
    payload: {
        inSearch
    }
});
