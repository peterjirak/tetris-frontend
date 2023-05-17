'use strict';

/*
 * See constants for the list of 6 tetrominos plus one for none
 *
 * Tetromino Rotations
 * TETROMINO T:
 *     ROTATION 0:
 *         PIECE_GRID:
 *             1 1 1
 *             0 1 0
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 * 
 *     ROTATION 1:
 *         PIECE_GRID:
 *             0 1
 *             1 1
 *             0 1
 *         WIDTH: 2
 *         HEIGHT: 3
 * 
 *     ROTATION 2:
 *         PIECE_GRID:
 *             0 1 0
 *             1 1 1
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 *     ROTATION 3:
 *         PIECE_GRID:
 *             1 0
 *             1 1
 *             1 0
 *         WIDTH: 2
 *         HEIGHT: 3
 * 
 * TETROMINO L:
 *     ROTATION 0:
 *         PIECE_GRID:
 *             2 0
 *             2 0
 *             2 2
 *         WIDTH: 2
 *         HEIGHT: 3
 * 
 *     ROTATION 1:
 *         PIECE_GRID:
 *             2 2 2
 *             2 0 0
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 *    ROTATION 2:
 *         PIECE_GRID:
 *             2 2
 *             0 2
 *             0 2
 *         WIDTH: 2
 *         HEIGHT: 3
 * 
 *    ROTATION 3:
 *         PIECE_GRID:
 *             0 0 2
 *             2 2 2
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 * TETROMINO SKEW:
 *    ROTATION 0:
 *         PIECE_GRID:
 *             0 3
 *             3 3
 *             3 0
 *         WIDTH: 2
 *         HEIGHT: 3
 *
 *    ROTATION 1:
 *         PIECE_GRID:
 *             3 3 0
 *             0 3 3
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 * TETROMINO SQUARE:
 *    ROTATION 0:
 *         PIECE_GRID:
 *             4 4
 *             4 4
 *         WIDTH: 2
 *         HEIGHT: 2
 *
 * TETROMINO STRAIGHT:
 *    ROTATION 0:
 *         PIECE_GRID:
 *             5 5 5 5
 *         WIDTH: 4
 *         HEIGHT: 1
 * 
 *    ROTATION 1:
 *         PIECE_GRID:
 *             5
 *             5
 *             5
 *             5
 *         WIDTH: 1
 *         HEIGHT: 4
 * 
 * TETROMINO MIRROR_L:
 *     ROTATION 0:
 *         PIECE_GRID:
 *             0 6
 *             0 6
 *             6 6
 *         WIDTH: 2
 *         HEIGHT: 3
 * 
 *     ROTATION 1:
 *         PIECE_GRID:
 *             6 0 0
 *             6 6 6
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 *    ROTATION 2:
 *         PIECE_GRID:
 *             6 6
 *             6 0
 *             6 0
 *         WIDTH: 2
 *         HEIGHT: 3
 * 
 *    ROTATION 3:
 *         PIECE_GRID:
 *             6 6 6
 *             0 0 6
 *         WIDTH: 3
 *         HEIGHT: 2
 * 
 * TETROMINO MIRROR_SKEW:
 *    ROTATION 0:
 *         PIECE_GRID:
 *             7 0
 *             7 7
 *             0 7
 *         WIDTH: 2
 *         HEIGHT: 3
 *
 *    ROTATION 1:
 *         PIECE_GRID:
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
                    pieceGrid:
                        [ [ 1, 1, 1 ],
                          [ 0, 1, 0 ] ],
                    width: 3,
                    height: 2
                },
                {
                    pieceGrid:
                        [ [ 0, 1 ],
                          [ 1, 1 ],
                          [ 0, 1 ] ],
                    width: 2,
                    height: 3
                },
                {
                    pieceGrid:
                        [ [ 0, 1, 0 ],
                          [ 1, 1, 1 ] ],
                    width: 3,
                    height: 2
                },
                {
                    pieceGrid:
                        [ [ 1, 0 ],
                          [ 1, 1 ],
                          [ 1, 0 ] ],
                    width: 2,
                    height: 3
                }
            ]
        },
        [L]: {
            rotations: [
                {
                    pieceGrid:
                        [ [ 2, 0 ],
                          [ 2, 0 ],
                          [ 2, 2 ] ],
                    width: 2,
                    height: 3
                },
                {
                    pieceGrid:
                        [ [ 2, 2, 2 ],
                          [ 2, 0, 0 ] ],
                    width: 3,
                    height: 2
                },
                {
                    pieceGrid:
                        [ [ 2, 2 ],
                          [ 0, 2 ],
                          [ 0, 2 ] ],
                    width: 2,
                    height: 3
                },
                {
                    pieceGrid:
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
                    pieceGrid:
                        [ [ 0, 3 ],
                          [ 3, 3 ],
                          [ 3, 0 ] ],
                    width: 2,
                    height: 3
                },
                {
                    pieceGrid:
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
                    pieceGrid:
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
                    pieceGrid:
                        [ [ 5 ],
                          [ 5 ],
                          [ 5 ],
                          [ 5 ] ],
                    width: 1,
                    height: 4
                },
                {
                    pieceGrid:
                        [ [ 5, 5, 5, 5] ],
                    width: 4,
                    height: 1
                }
            ]
        },
        [MIRROR_L]: {
            rotations: [
                {
                    pieceGrid:
                        [ [ 0, 6 ],
                          [ 0, 6 ],
                          [ 6, 6 ] ],
                    width: 2,
                    height: 3
                },
                {
                    pieceGrid:
                        [ [ 6, 0, 0 ],
                          [ 6, 6, 6 ] ],
                    width: 3,
                    height: 2
                },
                {
                    pieceGrid:
                        [ [ 6, 6 ],
                          [ 6, 0 ],
                          [ 6, 0 ] ],
                    width: 2,
                    height: 3
                },
                {
                    pieceGrid:
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
                    pieceGrid:
                        [ [ 7, 0 ],
                          [ 7, 7 ],
                          [ 0, 7 ] ],
                    width: 2,
                    height: 3
                },
                {
                    pieceGrid:
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
        const rotation = !args || args.rotation === null || args.rotation === undefined ? Piece._chooseRandomRotationIndex(tetrominoType) : args.rotation;
        this.rotation = rotation;
        const pieceGrid = Piece.tetrominos[tetrominoType].rotations[rotation].pieceGrid;
        const width = Piece.tetrominos[tetrominoType].rotations[rotation].width;
        const height = Piece.tetrominos[tetrominoType].rotations[rotation].height;
        const leftX = !args || args.leftX === null || args.leftX === undefined ? Math.floor(Math.random() * ((COLS - 1 - width + 1 - 0) +1) + 0) : args.leftX;
        const upperY = !args || args.upperY === null || args.upperY === undefined ? 0 - height + 1 : args.upperY;
        this.pieceGrid = pieceGrid;
        this.width = width;
        this.height = height;
        this.leftX = leftX;
        this.upperY = upperY;
    }
    getLeftX() {
        return this.leftX;
    }
    getUpperY() {
        return this.upperY;
    }
    getRightX() {
        return this.leftX + this.width - 1;
    }
    getLowerY() {
        return this.upperY + this.height - 1;
    }
    rotatePieceClockwise() {
        const tetrominoType = this.tetrominoType;
        const currentRotation = this.rotation;
        const currentHeight = this.height;
        const currentLeftX = this.leftX;
        const currentUpperY = this.upperY;
        const currentLowerY = currentUpperY + currentHeight;
        const newRotation = currentRotation >= -1 + Piece.tetrominos[tetrominoType].rotations.length ? 0 : currentRotation + 1;
        const newGrid = Piece.tetrominos[tetrominoType].rotations[newRotation].pieceGrid;
        const newWidth = Piece.tetrominos[tetrominoType].rotations[newRotation].width;
        const newHeight = Piece.tetrominos[tetrominoType].rotations[newRotation].height;
        const newUpperY = currentLowerY - newHeight;
        const newRightX = currentLeftX + newWidth - 1 >  COLS - 1 ? COLS - 1 : currentLeftX + newWidth - 1;
        const newLeftX = newRightX - newWidth + 1;
        this.rotation = newRotation;
        this.pieceGrid = newGrid;
        this.width = newWidth;
        this.height = newHeight;
        this.upperY = newUpperY;
        this.leftX = newLeftX;
        return;
    }
    movePieceLeft() {
        this.leftX -= 1;
    }
    movePieceRight() {
        this.leftX += 1;
    }
    movePieceDown() {
        this.upperY += 1;
    }
    renderPiece(ctx) {
        for (let i = this.upperY; i < this.upperY + this.height; i += 1) {
            if (i < 0) {
                continue;
            }
            for (let j = this.leftX; j < this.leftX + this.width; j += 1) {
                const pieceGrid = this.pieceGrid;
                const rowIndex = i - this.upperY;
                const columnIndex = j - this.leftX;
                const contentCode = pieceGrid[rowIndex][columnIndex];
                const cellType = TETROMINOS[contentCode];
                if (cellType !== NONE) {
                    renderSquare(ctx, cellType, i, j);
                }
            }
        }
    }
}
