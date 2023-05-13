class Board {
    constructor(ctx) {
        this.ctx = ctx;
        this.cols = ctx.canvas.width / BLOCK_SIZE;
        this.rows = ctx.canvas.height / BLOCK_SIZE;
        this.grid = this.getEmptyBoard();
    }

    renderGridBorder(rowIndex, columnIndex) {
        const upperLeftX = columnIndex * BLOCK_SIZE;
        const upperLeftY = rowIndex * BLOCK_SIZE;
        // TOP
        ctx.fillStyle = palette[LIGHT_GREEN];
        ctx.fillRect(upperLeftX, upperLeftY, BLOCK_SIZE, GRID_WIDTH);
        // LEFT
        ctx.fillRect(upperLeftX, upperLeftY + GRID_WIDTH, GRID_WIDTH, BLOCK_SIZE - GRID_WIDTH * 2);
        // RIGHT
        ctx.fillRect(upperLeftX + BLOCK_SIZE - GRID_WIDTH, upperLeftY + GRID_WIDTH, GRID_WIDTH, BLOCK_SIZE - GRID_WIDTH * 2);
        // BOTTOM
        ctx.fillRect(upperLeftX, upperLeftY + BLOCK_SIZE - GRID_WIDTH, BLOCK_SIZE, GRID_WIDTH);
    }

    renderEmptySquare(rowIndex, columnIndex) {
        this.renderGridBorder(rowIndex, columnIndex);
        const upperLeftX = columnIndex * BLOCK_SIZE + GRID_WIDTH;
        const upperLeftY = rowIndex * BLOCK_SIZE + GRID_WIDTH;
        ctx.fillStyle = palette[TEA_GREEN];
        // FILL
        ctx.fillRect(upperLeftX, upperLeftY, BLOCK_SIZE - GRID_WIDTH * 2, BLOCK_SIZE - GRID_WIDTH * 2);
    }

    renderBoard() {
        for (let i = 0; i < this.grid.length; i += 1) {
            const row = this.grid[0];
            for (let j = 0; j < row.length; j += 1) {
                const contentCode = row[j];
                if (TETROMINOS_VALUE_BY_NAME[NONE] === contentCode) {
                    this.renderEmptySquare(i, j);
                }
            }
        }
    }

    getEmptyBoard() {
        return Array.from(
            {length: ROWS}, () => Array(COLS).fill(TETROMINOS_VALUE_BY_NAME[NONE])
        );
    }
}
