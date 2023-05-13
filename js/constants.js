//constants.js
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const GRID_WIDTH = 2;

const NONE = 'NONE';
const T = 'T';
const L = 'L';
const SQUARE = 'SQUARE';
const STRAIGHT = 'STRAIGHT';
const MIRROR_L = 'MIRROR_L';
const MIRROR_SKEW = 'MIRROR_SKEW';

const TETROMINOS = [ NONE, T, L, SQUARE, STRAIGHT, MIRROR_L, MIRROR_SKEW ];

const TETROMINOS_VALUE_BY_NAME = {
    NONE: 0,
    T: 1,
    L: 2,
    SQUARE: 3,
    STRAIGHT: 4,
    MIRROR_L: 5,
    MIRROR_SKEW: 6
};

const TEA_GREEN = 'TEA_GREEN';
const LIGHT_GREEN = 'LIGHT_GREEN';

const palette = {
    [TEA_GREEN]: '#D6FFD8',
    [LIGHT_GREEN]: '#AFFEB1'
};
