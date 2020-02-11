'use strict';

const Config = {
    ROWS: 20,
    COLS: 10,
    COLORS: [
        'blue',
        'green',
        'gray',
        'orange',
        'pink',
        'red',
        'black'
    ],
    KEYS: {
        LEFT: 37,
        RIGHT: 39,
        DOWN: 40
    },
    DROP_SPEED: 50
}

Object.freeze(Config);

export default Config;
