import { CONSTANTS } from '../../actions';

const initialState = {
    socketId: undefined,
    inputAttacks: []
}

const opponentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.SET_OPPONENT: {
            let { socketId } = action.payload;
            return { ...state, socketId };
        }
        case CONSTANTS.REMOVE_OPPONENT: {
            return { ...state, socketId: undefined };
        }
        case CONSTANTS.ADD_INPUT_ATTACK: {
            let { attackType } = action.payload;
            return { ...state, inputAttacks: [...state.inputAttacks, attackType] };
        }
        default: {
            return state;
        }
    }
}

export default opponentReducer;
