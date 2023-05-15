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
            this.activePiece = new Piece( { tetrominoType: L, rotation: 0, leftX: 5, upperY: 5 } );
//            this.activePiece = new Piece();
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
