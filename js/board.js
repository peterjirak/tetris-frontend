class Board {
    constructor(ctx) {
        this.ctx = ctx;
        this.cols = ctx.canvas.width / BLOCK_SIZE;
        this.rows = ctx.canvas.height / BLOCK_SIZE;
        this.boardGrid = this.getEmptyBoard();
        this.gameActive = false;
        this.activePiece = null;
    }

    addActivePiece() {
        if (this.activePiece) {
            return false;
        } else{
//            this.activePiece = new Piece( { tetrominoType: L, rotation: 0, leftX: 5, upperY: 5 } );
            this.activePiece = new Piece();
            return true;
        }
    }

    renderBoard() {
        for (let i = 0; i < this.boardGrid.length; i += 1) {
            const row = this.boardGrid[i];
            for (let j = 0; j < row.length; j += 1) {
                const contentCode = row[j];
                const tetrominoType = TETROMINOS[contentCode];
                renderSquare(this.ctx, tetrominoType, i, j);
            }
        }
    }

    doesMovePieceLeftResultInCollision() {
        if (!this.activePiece || !this.boardGrid) {
            return null;
        } else {
            const boardGrid = this.boardGrid;
            const activePiece = this.activePiece;
            const leftX = activePiece.getLeftX();
            if (leftX <= 0) {
                return true;
            }
            const rightX = activePiece.getRightX();
            const pieceGrid = activePiece.pieceGrid;
            const upperY = activePiece.getUpperY();
            const lowerY = activePiece.getLowerY();
            for (let i = upperY; i <= lowerY; i += 1) {
                if (i < 0) {
                    continue;
                }
                for (let j = leftX; j <= rightX; j += 1) {
                    const pieceRowIndex = i - upperY;
                    const pieceColumnIndex = j - leftX;
                    const pieceCode = pieceGrid[pieceRowIndex][pieceColumnIndex];
                    if (TETROMINOS[pieceCode] === NONE) {
                        // The current piece square is empty so it cannot collide with the board:
                        continue;
                    } else if (pieceColumnIndex > 0) {
                        // The current square is not in the left edge of the piece.
                        // Check to see if the piece has a non-empty square to the
                        // left of this square. If it does, then we don't need to
                        // check to see if this square would collide with the board.
                        // We check when we check on of the squares to the left of
                        // this square. So checking this square is unnecessary.
                        const pieceToTheLeftCode = pieceGrid[pieceRowIndex][pieceColumnIndex - 1];
                        if (TETROMINOS[pieceToTheLeftCode] !== NONE) {
                            continue;
                        }
                    }
                    const boardColumnIndex = j - 1;
                    const boardCode = boardGrid[i][boardColumnIndex];
                    if (TETROMINOS[boardCode] !== NONE) {
                        return true;
                    }
                }
            }
            return false;
        }
    }

    moveActivePieceLeft() {
        if (!this.activePiece || !this.boardGrid) {
            return false;
        } else {
            if (this.doesMovePieceLeftResultInCollision()) {
                return false;
            }
            const activePiece = this.activePiece;
            activePiece.movePieceLeft();
            return true;
        }
    }

    doesMovePieceRightResultInCollision() {
        if (!this.activePiece || !this.boardGrid) {
            return null;
        } else {
            const boardGrid = this.boardGrid;
            const activePiece = this.activePiece;
            const rightX = activePiece.getRightX();
            if (rightX >= COLS - 1) {
                return true;
            }
            const leftX = activePiece.getLeftX();
            const pieceGrid = activePiece.pieceGrid;
            const upperY = activePiece.getUpperY();
            const lowerY = activePiece.getLowerY();
            const width = activePiece.width;
            for (let i = upperY; i <= lowerY; i += 1) {
                if (i < 0) {
                    continue;
                }
                for (let j = leftX; j <= rightX; j += 1) {
                    const pieceRowIndex = i - upperY;
                    const pieceColumnIndex = j - leftX;
                    const pieceCode = pieceGrid[pieceRowIndex][pieceColumnIndex];
                    if (TETROMINOS[pieceCode] === NONE) {
                        // The current piece square is empty so it cannot collide with the board:
                        continue;
                    } else if (pieceColumnIndex < width - 1) {
                        // The current square is not in the right edge of the piece.
                        // Check to see if the piece has a non-empty square to the
                        // right of this square. If it does, then we don't need to
                        // check to see if this square would collide with the board.
                        // We check when we check on of the squares to the right of
                        // this square. So checking this square is unnecessary.
                        const pieceToTheRightCode = pieceGrid[pieceRowIndex][pieceColumnIndex + 1];
                        if (TETROMINOS[pieceToTheRightCode] !== NONE) {
                            continue;
                        }
                    }
                    const boardColumnIndex = j + 1;
                    const boardCode = boardGrid[i][boardColumnIndex];
                    if (TETROMINOS[boardCode] !== NONE) {
                        return true;
                    }
                }
            }
            return false;
        }
    }

    moveActivePieceRight() {
        if (!this.activePiece || !this.boardGrid) {
            return false;
        } else {
            if (this.doesMovePieceRightResultInCollision()) {
                return false;
            }
            const activePiece = this.activePiece;
            activePiece.movePieceRight();
            return true;
        }
    }

    doesMovePieceDownResultInCollision() {
        if (!this.activePiece || !this.boardGrid) {
            return false;
        } else {
            let collided = false;
            const boardGrid = this.boardGrid;
            const activePiece = this.activePiece;
            const lowerY = activePiece.getLowerY();
            if (lowerY >= ROWS - 1) {
                collided = true;
            }
            if (!collided) {
                const pieceGrid = activePiece.pieceGrid;
                const leftX = activePiece.getLeftX();
                const upperY = activePiece.getUpperY();
                const rightX = activePiece.getRightX();
                const lowerY = activePiece.getLowerY();
//                const width  = activePiece.width;
                const height = activePiece.height;
                for (let i = upperY; i <= lowerY; i+= 1) {
                    for (let j = leftX; j <= rightX; j += 1) {
                        const pieceRowIndex = i - upperY;
                        const pieceColumnIndex = j - leftX;
                        const pieceCode = pieceGrid[pieceRowIndex][pieceColumnIndex];
                        if (TETROMINOS[pieceCode] === NONE) {
                            // The current piece square is empty so it cannot collide with the board:
                            continue;
                        } else if (pieceRowIndex < height - 1) {
                            // The current piece square is not in the bottom row of the piece,
                            // Check to see if the piece has a non-empty square beneath this square.
                            // If it does, we don't need to check to see if this piece collides with the board.
                            // We will check to see if the square below this square collides with the board.
                            const pieceBelowCode = pieceGrid[pieceRowIndex + 1][pieceColumnIndex];
                            if (TETROMINOS[pieceBelowCode] !== NONE) {
                                continue;
                            }
                        }
                        const boardRowIndex = i + 1
                        if (boardRowIndex < 0) {
                            continue;
                        }
                        const boardCode = boardGrid[boardRowIndex][j];
                        if (TETROMINOS[boardCode] !== NONE) {
                            collided = true;
                            break;
                        }
                    }
                    if (collided) {
                        break;
                    }
                }
            }
            return collided;
        }
    }

    moveActivePieceDown() {
        if (!this.activePiece || !this.boardGrid) {
            return false;
        } else {
            const collided = this.doesMovePieceDownResultInCollision();
            if (!collided) {
                const activePiece = this.activePiece;
                activePiece.movePieceDown();
            } else {
                this.handleCollision();
            }
            return true;
        }
    }

    moveActivePieceDownUntilCollisionOccurs() {
        if (!this.activePiece || !this.boardGrid) {
            return false;
        } else {
            while (!this.doesMovePieceDownResultInCollision()) {
                const activePiece = this.activePiece;
                activePiece.movePieceDown();
            }
            this.handleCollision();
            return true;
        }
    }

    handleCollision() {
        if (!this.activePiece || !this.boardGrid) {
            return false;
        } else {
            const activePiece = this.activePiece;
            const pieceGrid = activePiece.pieceGrid;
            const upperY = activePiece.getUpperY();
            const leftX = activePiece.getLeftX();
            const lowerY = activePiece.getLowerY();
            const rightX = activePiece.getRightX();
            for (let i = upperY; i <= lowerY; i += 1) {
                for (let j = leftX; j <= rightX; j += 1) {
                    const pieceCode = pieceGrid[i - upperY][j - leftX];
                    if (TETROMINOS[pieceCode] !== NONE) {
                        this.boardGrid[i][j] = pieceCode;
                    }
                }
            }
            console.table(this.boardGrid);
            this.activePiece = new Piece();
        }
    }

    hasCompletedRows() {
        const boardGrid = this.boardGrid;
        for (let i = ROWS - 1; i >= 0; i -= 1) {
            let rowComplete = true;
            for (let j = 0; j < COLS; j += 1) {
                const boardCode = boardGrid[i][j];
                if (TETROMINOS[boardCode] === NONE) {
                    rowComplete = false;
                    break;
                }
            }
            if (rowComplete) {
                return true;
            }
        }
        return false;
    }

    completedRowCount() {
        const boardGrid = this.boardGrid;
        let rowCount = 0;
        for (let i = ROWS - 1; i >= 0; i -= 1) {
            let rowComplete = true;
            for (let j = 0; j < COLS; j += 1) {
                const boardCode = boardGrid[i][j];
                if (TETROMINOS[boardCode] === NONE) {
                    rowComplete = false;
                    break;
                }
            }
            if (rowComplete) {
                rowCount += 1;
            }
        }
        return rowCount;
    }

    identifyCompletedRows() {
        const boardGrid = this.boardGrid;
        let completedRows = [];
        for (let i = ROWS - 1; i >= 0; i -= 1) {
            let rowComplete = true;
            for (let j = 0; j < COLS; j += 1) {
                const boardCode = boardGrid[i][j];
                if (TETROMINOS[boardCode] === NONE) {
                    rowComplete = false;
                    break;
                }
            }
            if (rowComplete) {
                completedRows.push(i);
            }
        }
        return completedRows;
    }

    handleCompletedRows() {
        const completedRows = this.identifyCompletedRows();
        for (const rowIndex of completedRows) {
            this.boardGrid.splice(rowIndex, 1);
        }
        for (let i = 0; i < completedRows.length; i += 1) {
            const newRow = Array(COLS).fill(TETROMINOS_VALUE_BY_NAME[NONE]);
            this.boardGrid.unshift(newRow);
        }
        addToLineCount(completedRows.length);
        const linesSpan = document.getElementById('lines');
        if (linesSpan) {
            const lineCount = getLineCount();
            linesSpan.innerText = `${lineCount}`;
        }
    }

    getEmptyBoard() {
        return Array.from(
            {length: ROWS}, () => Array(COLS).fill(TETROMINOS_VALUE_BY_NAME[NONE])
        );
    }

    setGameActive() {
        this.gameActive = true;
    }

    isGameActive() {
        return this.gameActive;
    }
}
