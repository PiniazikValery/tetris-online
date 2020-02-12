import { CONSTANTS } from '../../actions';

const initialState = {
    x: 3,
    y: 0,
    shape: [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ]
};

const currentTetrominoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.SET_CURRENT_TETROMINO: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export default currentTetrominoReducer;
