import { CONSTANTS } from '../../actions';
import { cloneDeep } from 'lodash';
import config from '../../config';

const initialState = {
    x: 3,
    y: 0,
    shape: (function () {
        return config.SHAPES[Math.floor(Math.random() * config.SHAPES.length)];
    })(),
    nextRndShapes: (function () {
        let result = [];
        for (let i = 1; i <= 5; i++) {
            result.push(config.SHAPES[Math.floor(Math.random() * config.SHAPES.length)]);
        }
        return result;
    })()
};

const currentTetrominoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.SET_CURRENT_TETROMINO: {
            return action.payload;
        }
        case CONSTANTS.REFRESH_TETROMINO: {
            let result = cloneDeep(state);
            result.shape = result.nextRndShapes[0];
            result.x = config.COLS / 2 - result.shape.length / 2;
            result.y = 0;
            result.nextRndShapes.shift();
            result.nextRndShapes.pop();
            result.nextRndShapes.push(config.SHAPES[Math.floor(Math.random() * config.SHAPES.length)]);
            return result;
        }
        default: {
            return state;
        }
    }
}

export default currentTetrominoReducer;
