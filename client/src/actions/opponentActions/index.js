import { CONSTANTS, decreasePower } from '../index';
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
        let { power } = getState().player;
        if (power >= config.OFFENSIVE_SKILLS.ADD_TRASH_LINE.cost) {
            dispatch(decreasePower(config.OFFENSIVE_SKILLS.ADD_TRASH_LINE.cost));
            getState().player.socket.emit('attack_other_player', {
                target: getState().opponent.socketId,
                attackType: config.OFFENSIVE_SKILLS.ADD_TRASH_LINE.name
            });
        }
    }
}

export const addInputAttack = attackType => ({
    type: CONSTANTS.ADD_INPUT_ATTACK,
    payload: {
        attackType
    }
});

export const clearInputAttacks = () => ({
    type: CONSTANTS.CLEAR_INPUT_ATTACKS
});
