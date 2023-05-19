'use strict';

//main.js
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

const game = new Game(ctx);

const startGame = () => {
    game.startGame();
}

const renderGame = () => {
    game.renderGame();
}

const clearGameStatusDisplay = () => {
    game.clearGameStatusDisplay();
}

const getGame = () => {
    return game;
}

const handleGameButtonPress = () => {
    game.handleGameButtonPress();
}
