'use strict';

//constants.js
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const GRID_WIDTH = 1;
const BORDER_WIDTH = 5;

const BORDER = 'BORDER';
const FILL = 'FILL';

const NONE = 'NONE';
const T = 'T';
const L = 'L';
const SKEW = 'SKEW';
const SQUARE = 'SQUARE';
const STRAIGHT = 'STRAIGHT';
const MIRROR_L = 'MIRROR_L';
const MIRROR_SKEW = 'MIRROR_SKEW';

const TETROMINOS = [ NONE, T, L, SKEW, SQUARE, STRAIGHT, MIRROR_L, MIRROR_SKEW ];

const TETROMINOS_VALUE_BY_NAME = {
    NONE: 0,
    T: 1,
    L: 2,
    SKEW: 3,
    SQUARE: 4,
    STRAIGHT: 5,
    MIRROR_L: 6,
    MIRROR_SKEW: 7
};

const TEA_GREEN = 'TEA_GREEN';
const LIGHT_GREEN = 'LIGHT_GREEN';
const FRENCH_ROSE = 'FRENCH_ROSE';
const CYCLAMEN = 'CYCLAMEN';
const AZURE = 'AZURE';
const JORDY_BLUE = 'JORDY_BLUE';
const PERSIMMON = 'PERSIMMON';
const SANDY_BROWN = 'SANDY_BROWN';
const MAIZE = 'MAIZE';
const XANTHOUS = 'XANTHOUS';
const VERONICA = 'VERONICA';
const INDIGO = 'INDIGO';
const IMPERIAL_RED = 'IMPERIAL_RED';
const ENGINEERING_ORANGE = 'ENGINEERING_ORANGE';
const ICE_BLUE = 'ICE_BLUE';
const ROBIN_EGG_BLUE = 'ROBIN_EGG_BLUE';

const GRID_COLOR = LIGHT_GREEN;
const EMPTY_CELL_COLOR = TEA_GREEN;

const TETROMINO_COLORS = {
    [NONE]: {
        [BORDER]: EMPTY_CELL_COLOR,
        [FILL]: EMPTY_CELL_COLOR
    },
    [T]: {
        [BORDER]: INDIGO,
        [FILL]: VERONICA
    },
    [L]: {
        [BORDER]: PERSIMMON,
        [FILL]: SANDY_BROWN
    },
    [SKEW]: {
        [BORDER]: ENGINEERING_ORANGE,
        [FILL]: IMPERIAL_RED
    },
    [SQUARE]: {
        [BORDER]: XANTHOUS,
        [FILL]: MAIZE
    },
    [STRAIGHT]: {
        [BORDER]: ROBIN_EGG_BLUE,
        [FILL]: ICE_BLUE
    },
    [MIRROR_L]: {
        [BORDER]: AZURE,
        [FILL]: JORDY_BLUE
    },
    [MIRROR_SKEW]: {
        [BORDER]: FRENCH_ROSE,
        [FILL]: CYCLAMEN
    }
};

const palette = {
    [TEA_GREEN]: '#D6FFD8',
    [LIGHT_GREEN]: '#AFFEB1',
    [FRENCH_ROSE]: '#F63C80',
    [CYCLAMEN]: '#FC73A1',
    [PERSIMMON]: '#E05C15',
    [SANDY_BROWN]: '#FDA35D',
    [MAIZE]: '#F6E051',
    [XANTHOUS]: '#FDB849',
    [VERONICA]: '#A62BF3',
    [INDIGO]: '#65099A',
    [IMPERIAL_RED]: '#F33F45',
    [ENGINEERING_ORANGE]: '#C00C12',
    [ICE_BLUE]: '#8DF7F7',
    [ROBIN_EGG_BLUE]: '#16DFDF',
    [JORDY_BLUE]: '#9DBCFB',
    [AZURE]: '#5083E2'
};
