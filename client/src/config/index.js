const Config = {
    ROWS: 20,
    COLS: 10,
    COLORS: [
        '#2832ec',
        '#37ebeb',
        '#eeec41',
        '#eba136',
        '#ed2c31',
        '#a034ea',
        '#39eb3d',
        'gray'
    ],
    KEYS: {
        get HOLDABLE_KEYS() { return [this.LEFT, this.RIGHT, this.DOWN] },
        LEFT: 37,
        RIGHT: 39,
        DOWN: 40,
        ROTATE: 32,
        HARD_DROP: 68
    },
    DROP_SPEED: 60,
    GAME_SPEED: 1000,
    SHAPES: [
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 3, 0, 0],
            [0, 3, 0, 0],
            [3, 3, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 4, 0, 0],
            [0, 4, 0, 0],
            [0, 4, 4, 0],
            [0, 0, 0, 0]
        ],
        [
            [5, 5],
            [5, 5],
        ],
        [
            [0, 6, 0, 0],
            [0, 6, 6, 0],
            [0, 0, 6, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 7, 0],
            [0, 7, 7, 0],
            [0, 7, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    DEFENSIVE_SKILLS: {
        REMOVE_FIRST_ROW: {
            key: 49,
            cost: 200
        }
    },
    OFFENSIVE_SKILLS: {
        ADD_TRASH_LINE: {
            name: 'ADD_TRASH_LINE',
            key: 50,
            cost: 200
        }
    },
    SERVER_URL: "http://localhost:5000"
}

Object.freeze(Config);

export default Config;
