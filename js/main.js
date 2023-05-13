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

function play() {
    board = new Board(ctx);
    console.table(board.grid);
    board.renderBoard();
}
