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
            const row = this.boardGrid[0];
            for (let j = 0; j < row.length; j += 1) {
                const contentCode = row[j];
                if (TETROMINOS_VALUE_BY_NAME[NONE] === contentCode) {
                    renderEmptySquare(this.ctx, i, j);
                }
            }
        }
    }

    moveActivePieceLeft() {
        if (!this.activePiece || !this.boardGrid) {
            return false;
        } else {
            const boardGrid = this.boardGrid;
            const activePiece = this.activePiece;
            const leftX = activePiece.getLeftX();
            if (leftX <= 0) {
                return false;
            }
            const pieceGrid = activePiece.pieceGrid;
            const upperY = activePiece.getUpperY();
            const lowerY = activePiece.getLowerY();
            for (let i = upperY; i <= lowerY; i += 1) {
                 const boardCode = boardGrid[i][leftX - 1];
                 if (TETROMINOS[boardCode] !== NONE) {
                    const pieceCode = pieceGrid[i - upperY][0];
                    if (TETROMINOS[pieceCode] !== NONE) {
                        return false;
                    }
                 }
            }
            activePiece.movePieceLeft();
            return true;
        }
    }

    moveActivePieceRight() {
        if (!this.activePiece || !this.boardGrid) {
            return false;
        } else {
            const boardGrid = this.boardGrid;
            const activePiece = this.activePiece;
            const rightX = activePiece.getRightX();
            if (rightX >= COLS - 1) {
                return false;
            }
            const pieceGrid = activePiece.pieceGrid;
            const upperY = activePiece.getUpperY();
            const lowerY = activePiece.getLowerY();
            const width = activePiece.width;
            for (let i = upperY; i <= lowerY; i += 1) {
                 const boardCode = boardGrid[i][rightX + 1];
                 if (TETROMINOS[boardCode] !== NONE) {
                    const pieceCode = pieceGrid[i - upperY][width - 1];
                    if (TETROMINOS[pieceCode] !== NONE) {
                        return false;
                    }
                 }
            }
            activePiece.movePieceRight();
            return true;
        }
    }

    moveActivePieceDown() {
        if (!this.activePiece || !this.boardGrid) {
            return false;
        } else {
            const boardGrid = this.boardGrid;
            const activePiece = this.activePiece;
            const lowerY = activePiece.getLowerY();
            if (lowerY >= ROWS - 1) {
                return false;
            }
            const pieceGrid = activePiece.pieceGrid;
            const leftX = activePiece.getLeftX();
            const rightX = activePiece.getRightX();
            const height = activePiece.height;
            for (let j = leftX; j <= rightX; j += 1) {
                const boardCode = boardGrid[lowerY + 1][j];
                if (TETROMINOS[boardCode] !== NONE) {
                    const pieceCode = pieceGrid[height - 1][j - leftX];
                    if (TETROMINOS[pieceCode] !== NONE) {
                        return false;
                    }
                }
            }
            activePiece.movePieceDown();
            return true;
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
