import { CONSTANTS } from '../../actions';
import config from '../../config';

const initialState = {
    score: 0,
    speed: config.GAME_SPEED,
    power: 0,
    isGameOver: true
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.INCREASE_SCORE: {
            return { ...state, score: ++state.score };
        }
        case CONSTANTS.INCREASE_SPEED: {
            return { ...state, speed: state.speed - (state.speed / 4) * 0.10 };
        }
        case CONSTANTS.RESET_SCORE: {
            return { ...state, score: 0 };
        }
        case CONSTANTS.RESET_SPEED: {
            return { ...state, speed: 1000 };
        }
        case CONSTANTS.INCREASE_POWER: {
            return { ...state, power: state.power + 50 };
        }
        case CONSTANTS.DECREASE_POWER: {
            let { amount } = action.payload;
            return { ...state, power: state.power - amount };
        }
        case CONSTANTS.SET_GAME_OVER: {
            return { ...state, isGameOver: action.payload.value };
        }
        case CONSTANTS.RESET_POWER: {
            return { ...state, power: 0 };
        }
        default: {
            return state;
        }
    }
}

export default gameReducer;
