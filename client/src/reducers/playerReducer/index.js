import { CONSTANTS } from '../../actions';
import config from '../../config';
import io from "socket.io-client";

const initialState = {
    socket: undefined,
    score: 0,
    power: 0,
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.CONNECT_PLAYER_TO_SERVER: {
            return { ...state, socket: io(config.SERVER_URL) }
        }
        case CONSTANTS.INCREASE_SCORE: {
            return { ...state, score: ++state.score };
        }
        case CONSTANTS.INCREASE_POWER: {
            return { ...state, power: state.power + 50 };
        }
        case CONSTANTS.DECREASE_POWER: {
            let { amount } = action.payload;
            return { ...state, power: state.power - amount };
        }
        case CONSTANTS.RESET_SCORE: {
            return { ...state, score: 0 };
        }
        case CONSTANTS.RESET_POWER: {
            return { ...state, power: 0 };
        }
        default: {
            return state;
        }
    }
}

export default playerReducer;
