import { CONSTANTS } from '../index';
import config from '../../config';

export const setOpponent = socketId => ({
    type: CONSTANTS.SET_OPPONENT,
    payload: {
        socketId
    }
});

export const removeOpponent = () => ({
    type: CONSTANTS.REMOVE_OPPONENT
});


export const sendTrashRowToOpponent = () => {
    return (dispatch, getState) => {
        getState().player.socket.emit('attack_other_player', {
            target: getState().opponent.socketId,
            attackType: config.OFFENSIVE_SKILLS.ADD_TRASH_LINE.name
        });
    }
}

export const addInputAttack = attackType => ({
    type: CONSTANTS.ADD_INPUT_ATTACK,
    payload: {
        attackType
    }
});