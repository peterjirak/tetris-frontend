//main.js
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
let board = null;

// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks
//ctx.scale(ctx.canvas.width, ctx.canvas.height);

// ctx.fillStyle = 'red';
// ctx.fillRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);

const createNewAndRenderBoard = () => {
    board = new Board(ctx);
    console.table(board.boardGrid);
    board.renderBoard();
}

const placePiece = () => {
    if (board) {
        if (!board.activePiece) {
            board.addActivePiece();
        }
    }
};

const renderPiece = () => {
    if (board) {
        if (!board.activePiece) {
            board.addActivePiece();
        }
        const ctx = board.ctx;
        const activePiece = board.activePiece;
        if (activePiece) {
            activePiece.renderPiece(ctx);
        }
    }
}

const setGameActive = () => {
    if (!board) {
        board = new Board(ctx);
        board.renderBoard();
    }
    board.setGameActive();
}

const isGameActive = () => {
    if (!board) {
        return false;
    } else {
        return board.isGameActive();
    }
}

const getBoard = () => {
    return board;
}