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
        get HOLDABLE_KEYS() { return [this.LEFT, this.RIGHT, this.DOWN, 38] },
        LEFT: 37,
        RIGHT: 39,
        DOWN: 40,
        ROTATE: 32
    },
    DROP_SPEED: 60
}

Object.freeze(Config);

export default Config;
