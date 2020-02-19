import { CONSTANTS } from '../index'

export const changeGameLoopActivationStatus = value => ({
    type: CONSTANTS.CHANGE_GAME_LOOP_ACTIVATION_STATUS,
    payload: {
        value
    }
});

export const changeGameVerifierActivationStatus = value => ({
    type: CONSTANTS.CHANGE_GAME_VERIFIER_ACTIVATION_STATUS,
    payload: {
        value
    }
});
