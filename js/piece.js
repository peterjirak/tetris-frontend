
/*
 * See constants for the list of 6 tetrominos plus one for none
 *
 * Tetromino Rotations
 * TETROMINO T:
 *     ROTATION 0:
 *         GRID:
 *             1 1 1
 *             0 1 0
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 * 
 *     ROTATION 1:
 *         GRID:
 *             0 1
 *             1 1
 *             0 1
 *         WIDTH: 2
 *         HEIGHT: 3
 * 
 *     ROTATION 2:
 *         GRID:
 *             0 1 0
 *             1 1 1
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 *     ROTATION 3:
 *         GRID:
 *             1 0
 *             1 1
 *             1 0
 *         WIDTH: 2
 *         HEIGHT: 3
 * 
 * TETROMINO L:
 *     ROTATION 0:
 *         GRID:
 *             2 0
 *             2 0
 *             2 2
 *         WIDTH: 2
 *         HEIGHT: 3
 * 
 *     ROTATION 1:
 *         GRID:
 *             2 2 2
 *             2 0 0
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 *    ROTATION 2:
 *         GRID:
 *             2 2
 *             0 2
 *             0 2
 *         WIDTH: 2
 *         HEIGHT: 3
 * 
 *    ROTATION 3:
 *         GRID:
 *             0 0 2
 *             2 2 2
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 * TETROMINO SKEW:
 *    ROTATION 0:
 *         GRID:
 *             0 3
 *             3 3
 *             3 0
 *         WIDTH: 2
 *         HEIGHT: 3
 *
 *    ROTATION 1:
 *         GRID:
 *             3 3 0
 *             0 3 3
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 * TETROMINO SQUARE:
 *    ROTATION 0:
 *         GRID:
 *             4 4
 *             4 4
 *         WIDTH: 2
 *         HEIGHT: 2
 *
 * TETROMINO STRAIGHT:
 *    ROTATION 0:
 *         GRID:
 *             5 5 5 5
 *         WIDTH: 4
 *         HEIGHT: 1
 * 
 *    ROTATION 1:
 *         GRID:
 *             5
 *             5
 *             5
 *             5
 *         WIDTH: 1
 *         HEIGHT: 4
 * 
 * TETROMINO MIRROR_L:
 *     ROTATION 0:
 *         GRID:
 *             0 6
 *             0 6
 *             6 6
 *         WIDTH: 2
 *         HEIGHT: 3
 * 
 *     ROTATION 1:
 *         GRID:
 *             6 0 0
 *             6 6 6
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 *    ROTATION 2:
 *         GRID:
 *             6 6
 *             6 0
 *             6 0
 *         WIDTH: 2
 *         HEIGHT: 3
 * 
 *    ROTATION 3:
 *         GRID:
 *             6 6 6
 *             0 0 6
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 * TETROMINO MIRROR_SKEW:
 *    ROTATION 0:
 *         GRID:
 *             7 0
 *             7 7
 *             0 7
 *         WIDTH: 2
 *         HEIGHT: 3
 *
 *    ROTATION 1:
 *         GRID:
 *             0 7 7
 *             7 7 0
 *             
 *         WIDTH: 2
 *         HEIGHT: 3
 */

class Piece {
    static tetrominoRotations = {};
    static _chooseRandomTetromino() {
        // [TutorialsPoint - JavaScript - How to generate random numbers between two numbers in JavaScript?](https://www.tutorialspoint.com/How-to-generate-random-numbers-between-two-numbers-in-JavaScript#:~:text=How%20to%20generate%20random%20numbers%20between%20two%20numbers%20in%20JavaScript%3F&text=To%20generate%20a%20random%20number,)%20to%201%20(exclusive).)
        const which = Math.floor(Math.random() * (max-min) + min);
        return TETROMINOS[which];
    }
    constructor(args) {
        const tetrominoType = !args || !args.tetrominoType ? Piece._chooseRandomTetromino() : args.tetrominoType;
    }
}
