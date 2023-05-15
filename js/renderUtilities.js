const renderGridBorder = (ctx, rowIndex, columnIndex) => {
    const leftX = columnIndex * BLOCK_SIZE;
    const upperY = rowIndex * BLOCK_SIZE;
    // TOP
    ctx.fillStyle = palette[GRID_COLOR];
    ctx.fillRect(leftX, upperY, BLOCK_SIZE, GRID_WIDTH);
    // LEFT
    ctx.fillRect(leftX, upperY + GRID_WIDTH, GRID_WIDTH, BLOCK_SIZE - GRID_WIDTH * 2);
    // RIGHT
    ctx.fillRect(leftX + BLOCK_SIZE - GRID_WIDTH, upperY + GRID_WIDTH, GRID_WIDTH, BLOCK_SIZE - GRID_WIDTH * 2);
    // BOTTOM
    ctx.fillRect(leftX, upperY + BLOCK_SIZE - GRID_WIDTH, BLOCK_SIZE, GRID_WIDTH);
    return;
}

const renderEmptySquare = (ctx, rowIndex, columnIndex) => {
    renderGridBorder(ctx, rowIndex, columnIndex);
    const leftX = columnIndex * BLOCK_SIZE + GRID_WIDTH;
    const upperY = rowIndex * BLOCK_SIZE + GRID_WIDTH;
    ctx.fillStyle = palette[EMPTY_CELL_COLOR];
    // FILL
    ctx.fillRect(leftX, upperY, BLOCK_SIZE - GRID_WIDTH * 2, BLOCK_SIZE - GRID_WIDTH * 2);
    return;
}

const renderSquareBorder = (ctx, tetrominoType, rowIndex, columnIndex) => {
    const leftX = columnIndex * BLOCK_SIZE + GRID_WIDTH;
    const upperY = rowIndex * BLOCK_SIZE + GRID_WIDTH;
    const borderColorName = TETROMINO_COLORS[tetrominoType].BORDER;
    const borderColorHex = palette[borderColorName];
    ctx.fillStyle = borderColorHex;
    // TOP
    ctx.fillRect(leftX, upperY, BLOCK_SIZE - GRID_WIDTH * 2, BORDER_WIDTH);
    // LEFT
    ctx.fillRect(leftX, upperY + BORDER_WIDTH, BORDER_WIDTH, BLOCK_SIZE - GRID_WIDTH * 2 - BORDER_WIDTH * 2);
    // RIGHT
    ctx.fillRect(leftX + BLOCK_SIZE - BORDER_WIDTH - GRID_WIDTH * 2, upperY + BORDER_WIDTH, BORDER_WIDTH, BLOCK_SIZE - GRID_WIDTH * 2 - BORDER_WIDTH * 2);
    // BOTTOM
    ctx.fillRect(leftX, upperY + BLOCK_SIZE - BORDER_WIDTH - GRID_WIDTH * 2, BLOCK_SIZE - GRID_WIDTH * 2, BORDER_WIDTH);
    return;
}

const renderSquareFill = (ctx, tetrominoType, rowIndex, columnIndex) => {
    const leftX = columnIndex * BLOCK_SIZE + GRID_WIDTH + BORDER_WIDTH;
    const upperY = rowIndex * BLOCK_SIZE + GRID_WIDTH + BORDER_WIDTH;
    const fillColorName = TETROMINO_COLORS[tetrominoType].FILL;
    const fillColorHex = palette[fillColorName];
    ctx.fillStyle = fillColorHex;
    // FILL
    ctx.fillRect(leftX, upperY, BLOCK_SIZE - GRID_WIDTH * 2 - BORDER_WIDTH * 2, BLOCK_SIZE - GRID_WIDTH * 2  - BORDER_WIDTH * 2);
    return;
}

const renderSquare = (ctx, tetrominoType, rowIndex, columnIndex) => {
    renderGridBorder(ctx, rowIndex, columnIndex);
    renderSquareBorder(ctx, tetrominoType, rowIndex, columnIndex);
    renderSquareFill(ctx, tetrominoType, rowIndex, columnIndex);
    return;
};