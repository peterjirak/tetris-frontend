//constants.js
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const GRID_WIDTH = 1;

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

const palette = {
    [TEA_GREEN]: '#D6FFD8',
    [LIGHT_GREEN]: '#AFFEB1'
};
