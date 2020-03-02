import { CONSTANTS } from '../../actions';

const initialState = {
    socket: undefined,
    score: 0,
    power: 0,
    win: undefined,
    inSearch: true
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.CONNECT_PLAYER_TO_SERVER: {
            const { socket } = action.payload;
            return { ...state, socket: socket }
        }
        case CONSTANTS.DISCONNECT_PLAYER_FROM_SERVER: {
            return { ...state, socket: undefined };
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
        case CONSTANTS.SET_PLAYER_WIN: {
            let { winValue } = action.payload;
            return { ...state, win: winValue };
        }
        case CONSTANTS.SET_PLAYER_IN_SEARCH: {
            let { inSearch } = action.payload;
            return { ...state, inSearch };
        }
        default: {
            return state;
        }
    }
}

export default playerReducer;
