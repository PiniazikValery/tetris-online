import { CONSTANTS } from '../../actions';

const initialState = {
    socketId: undefined,
    inboxAttacks: []
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
        default: {
            return state;
        }
    }
}

export default opponentReducer;
