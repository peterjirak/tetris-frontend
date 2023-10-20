'use strict';

//main.js
let canvas = null;
let ctx = null;
let game = null;

const startGame = () => {
    const g = getGame();
    g.startGame();
}

const renderGame = () => {
    const g = getGame();
    g.renderGame();
}

const clearGameStatusDisplay = () => {
    const g = getGame();
    g.clearGameStatusDisplay();
}

const getGame = () => {
    if (game) {
        return game;
    }

    canvas = document.getElementById('board');
    ctx = canvas.getContext('2d');

    // Calculate size of canvas from constants.
    ctx.canvas.width = COLS * BLOCK_SIZE;
    ctx.canvas.height = ROWS * BLOCK_SIZE;
    
    game = new Game(ctx);

    return game;
}

const handleGameButtonPress = () => {
    const g = getGame();
    g.handleGameButtonPress();
}
