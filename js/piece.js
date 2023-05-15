
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
    static tetrominos = {
        [T]: {
            rotations: [
                {
                    grid:
                        [ [ 1, 1, 1 ],
                          [ 0, 1, 0 ] ],
                    width: 3,
                    height: 2
                },
                {
                    grid:
                        [ [ 0, 1 ],
                          [ 1, 1 ]
                          [ 0, 1 ] ],
                    width: 2,
                    height: 3
                },
                {
                    grid:
                        [ [ 0, 1, 0 ],
                          [ 1, 1, 1 ] ],
                    width: 3,
                    height: 2
                },
                {
                    grid:
                        [ [ 1, 0 ],
                          [ 1, 1 ]
                          [ 1, 0 ] ],
                    width: 2,
                    height: 3
                }
            ]
        },
        [L]: {
            rotations: [
                {
                    grid:
                        [ [ 2, 0 ],
                          [ 2, 0 ],
                          [ 2, 2 ] ],
                    width: 2,
                    height: 3
                },
                {
                    grid:
                        [ [ 2, 2, 2 ],
                          [ 2, 0, 0 ] ],
                    width: 3,
                    height: 2
                },
                {
                    grid:
                        [ [ 2, 2 ],
                          [ 0, 2 ],
                          [ 0, 2 ] ],
                    width: 2,
                    height: 3
                },
                {
                    grid:
                        [ [ 0, 0, 2 ],
                          [ 2, 2, 2 ] ],
                    width: 3,
                    height: 2
                }
            ]
        },
        [SKEW]: {
            rotations: [
                {
                    grid:
                        [ [ 0, 3 ],
                          [ 3, 3 ],
                          [ 3, 0 ] ],
                    width: 2,
                    height: 3
                },
                {
                    grid:
                        [ [ 3, 3, 0 ],
                          [ 0, 3, 3 ] ],
                    width: 3,
                    height: 2
                }
            ]
        },
        [SQUARE]: {
            rotations: [
                {
                    grid:
                        [ [ 4, 4 ],
                          [ 4, 4 ] ],
                    width: 2,
                    height: 2
                }
            ]
        },
        [STRAIGHT]: {
            rotations: [
                {
                    grid:
                        [ [ 5 ],
                          [ 5 ],
                          [ 5 ],
                          [ 5 ] ],
                    width: 1,
                    height: 4
                },
                {
                    grid:
                        [ [ 5, 5, 5, 5] ],
                    width: 4,
                    height: 1
                }
            ]
        },
        [MIRROR_L]: {
            rotations: [
                {
                    grid:
                        [ [ 0, 6 ],
                          [ 0, 6 ],
                          [ 6, 6 ] ],
                    width: 2,
                    height: 3
                },
                {
                    grid:
                        [ [ 6, 0, 0 ],
                          [ 6, 6, 6 ] ],
                    width: 3,
                    height: 2
                },
                {
                    grid:
                        [ [ 6, 6 ],
                          [ 6, 0 ],
                          [ 6, 0 ] ],
                    width: 2,
                    height: 3
                },
                {
                    grid:
                        [ [ 6, 6, 6 ],
                          [ 0, 0, 6 ] ],
                    width: 3,
                    height: 2
                }
            ]
        },
        [MIRROR_SKEW]: {
            rotations: [
                {
                    grid:
                        [ [ 7, 0 ],
                          [ 7, 7 ],
                          [ 0, 7 ] ],
                    width: 2,
                    height: 3
                },
                {
                    grid:
                        [ [ 0, 7, 7 ],
                          [ 7, 7, 0 ] ],
                    width: 3,
                    height: 2
                }
            ]
        }
    };
    static _chooseRandomTetromino() {
        // [TutorialsPoint - JavaScript - How to generate random numbers between two numbers in JavaScript?](https://www.tutorialspoint.com/How-to-generate-random-numbers-between-two-numbers-in-JavaScript#:~:text=How%20to%20generate%20random%20numbers%20between%20two%20numbers%20in%20JavaScript%3F&text=To%20generate%20a%20random%20number,)
        const which = Math.floor(Math.random() * ((TETROMINOS.length - 1 - 1) + 1) + 1);
        console.debug(`Piece._chooseRandomTetromino(): tetromino index: ${which}, ${TETROMINOS[which]}`);
        return TETROMINOS[which];
    }
    static _chooseRandomRotationIndex(tetrominoType) {
        const rotations = Piece.tetrominos[tetrominoType].rotations;
        const which = Math.floor(Math.random() * ((rotations.length - 1 - 0) +1) + 0);
        console.debug(`Piece._chooseRandomRotationIndex('${tetrominoType}'): rotation index: ${which})`);
        return which;
    }
    constructor(args) {
        const tetrominoType = !args || !args.tetrominoType ? Piece._chooseRandomTetromino() : args.tetrominoType;
        this.tetrominoType = tetrominoType;
        const rotation = !args || !args.rotation ? Piece._chooseRandomRotationIndex(tetrominoType) : args.rotation;
        this.rotation = rotation;
        const grid = Piece.tetrominos[tetrominoType].rotations[rotation].grid;
        const width = Piece.tetrominos[tetrominoType].rotations[rotation].width;
        const height = Piece.tetrominos[tetrominoType].rotations[rotation].height;
        this.grid = grid;
        this.width = width;
        this.height = height;
        this.leftX = Math.floor(Math.random() * ((COLS - 1 - width + 1 - 0) +1) + 0);
        this.upperY = 0 - height + 1; 
    }
    renderPiece(ctx) {
        const tetrominoType = this.tetrominoType;
        for (let i = this.upperY; i < this.upperY + this.height; i += 1) {
            if (i < 0) {
                continue;
            }
            for (let j = this.leftX; j < this.leftX + this.width; j += 1) {
                const contentCode = this.grid[i - this.upperY][j - this.leftX];
                const cellType = TETROMINOS[contentCode];
                renderSquare(ctx, cellType, i, j);
            }
        }
    }
}
