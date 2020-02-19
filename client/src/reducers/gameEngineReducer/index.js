import { CONSTANTS } from '../../actions';

const initialState = {
    gameLoopActivated: true,
    gameVerifierActivated: true
}

const gameEngineReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_GAME_LOOP_ACTIVATION_STATUS: {
            return { ...state, gameLoopActivated: action.payload.value };
        }
        case CONSTANTS.CHANGE_GAME_VERIFIER_ACTIVATION_STATUS: {
            return { ...state, gameVerifierActivated: action.payload.value };
        }
        default: {
            return state;
        }
    }
}

export default gameEngineReducer;
