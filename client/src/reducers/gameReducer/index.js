import { CONSTANTS } from '../../actions';
import config from '../../config';

const initialState = {
    speed: config.GAME_SPEED,
    isGameOver: true
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.INCREASE_SPEED: {
            return { ...state, speed: state.speed - (state.speed / 4) * 0.10 };
        }
        case CONSTANTS.RESET_SPEED: {
            return { ...state, speed: 1000 };
        }
        case CONSTANTS.SET_GAME_OVER: {
            return { ...state, isGameOver: action.payload.value };
        }
        default: {
            return state;
        }
    }
}

export default gameReducer;
