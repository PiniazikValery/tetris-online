import { CONSTANTS } from '../../actions';

const initialState = {
    x: 3,
    y: 0,
    shape: [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ]
};

const currentTetrominoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.REPLACE_CURRENT_TETROMINO: {
            let { x, y } = action.payload;
            return { ...state, x, y }
        }
        default: {
            return state;
        }
    }
}

export default currentTetrominoReducer;
