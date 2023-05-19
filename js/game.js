'use strict';

class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.completedLinesCount = 0;
        this.gameStatus = GAME_NOT_STARTED;
        this.intervalDelay = 2000;
        this.intervalTimeId = null;

        const addToCompletedLineCount = (addValue) => {
            this.addToCompletedLineCount(addValue);
        }

        this.board = new Board({ctx: ctx,
                                addToCompletedLineCount: addToCompletedLineCount});
    }

    startGame() {
        if (this.gameStatus !== GAME_ACTIVE) {
            this.resetGame();
            this.gameStatus = GAME_ACTIVE;
            this.board.addActivePiece();
            this.enablePeriodicMoveActivePieceDown();
        }
    }

    pauseGame() {
        this.disablePeriodicMoveActivePieceDown();
        this.gameStatus = GAME_PAUSED;
    }

    resumeGame() {
        if (this.gameStatus === GAME_PAUSED) {
            this.board.addActivePiece();
            this.enablePeriodicMoveActivePieceDown();
            this.gameStatus = GAME_ACTIVE;
            this.renderGame();

        }
    }

    handleGameButtonPress() {
        if (this.isGameActive()) {
            this.pauseGame();
        } else if (this.isGamePaused()) {
            this.resumeGame();
        } else {
            this.startGame();
        }
        this.renderGame();
    }

    isGameActive() {
        return this.gameStatus === GAME_ACTIVE ? true : false;
    }

    isGamePaused() {
        return this.gameStatus === GAME_PAUSED ? true : false;
    }

    renderGame() {
        this.board.renderBoard();
        const activePiece = this.board.activePiece;
        if (activePiece) {
            activePiece.renderPiece(ctx);
        }
        this.updateCompletedLineCountDisplay();
        this.updateGameButton();
        this.updateGameStatusDisplay();
    }

    updateCompletedLineCountDisplay() {
        const linesSpan = document.getElementById('lines');
        if (linesSpan) {
            linesSpan.innerText = `${this.completedLinesCount}`;
        }
    }

    displayGameOver() {
        const gameStatusSpan = document.getElementById('game_status');
        if (gameStatusSpan) {
            gameStatusSpan.innerText = 'GAME OVER';
        }
    }

    displayGamePaused() {
        const gameStatusSpan = document.getElementById('game_status');
        if (gameStatusSpan) {
            gameStatusSpan.innerText = 'PAUSED';
        }
    }

    clearGameStatusDisplay() {
        const gameStatusSpan = document.getElementById('game_status');
        if (gameStatusSpan) {
            gameStatusSpan.innerText = '';
        }
    }

    updateGameButton() {
        const button = document.getElementById('game_button');
        if (button) {
            if (this.gameStatus === GAME_NOT_STARTED || this.gameStatus === GAME_OVER) {
                if (button.innerText !== 'PLAY') {
                    button.innerText = 'PLAY';
                }
            } else if (this.gameStatus === GAME_ACTIVE) {
                if (button.innerText !== 'PAUSE') {
                    button.innerText = 'PAUSE';
                }
            } else {
                button.innerText = 'RESUME';
                if (button.innerText !== 'RESUME') {
                    button.innerText = 'RESUME';
                }
            }
        }
    }

    updateGameStatusDisplay() {
        if (this.board.isGameOver()) {
            this.displayGameOver();
        } else if (this.isGamePaused()) {
            this.displayGamePaused()
        } else {
            this.clearGameStatusDisplay();
        }
    }

    resetGame() {
        this.disablePeriodicMoveActivePieceDown();
        this.gameStatus = GAME_NOT_STARTED;
        this.completedLinesCount = 0;

        const addToCompletedLineCount = (addValue) => {
            this.addToCompletedLineCount(addValue);
        }

        const ctx = this.ctx;
        this.board = new Board({ctx: ctx,
                                addToCompletedLineCount: addToCompletedLineCount});
    }

    rotateActivePieceClockwise() {
        if (this.gameStatus === GAME_ACTIVE) {
            const activePiece = this.board.activePiece;
            if (activePiece) {
                activePiece.rotatePieceClockwise();
            }
            this.renderGame();
        }
    }

    moveActivePieceLeft() {
        if (this.gameStatus === GAME_ACTIVE) {
            this.board.moveActivePieceLeft();
            this.renderGame();
        }
    }

    moveActivePieceRight() {
        if (this.gameStatus === GAME_ACTIVE) {
            this.board.moveActivePieceRight();
            this.renderGame();
        }
    }

    moveActivePieceDown() {
        if (this.gameStatus === GAME_ACTIVE) {
            this.disablePeriodicMoveActivePieceDown();
            this.board.moveActivePieceDown();
            this.renderGame();
            this.board.handleCompletedRows()
            this.renderGame();
            if (this.board.isGameOver()) {
                this.disablePeriodicMoveActivePieceDown();
                this.gameStatus = GAME_OVER;
                this.displayGameOver();
            }
            this.enablePeriodicMoveActivePieceDown();
        }
    }

    dropActivePiece() {
        if (this.gameStatus === GAME_ACTIVE) {
            this.disablePeriodicMoveActivePieceDown();
            this.board. dropActivePiece();
            this.renderGame();
            this.board.handleCompletedRows()
            this.renderGame();
            if (this.board.isGameOver()) {
                this.gameStatus = GAME_OVER;
                this.displayGameOver();
            }
        }
        this.enablePeriodicMoveActivePieceDown();
    }

    addToCompletedLineCount(addValue) {
        this.completedLinesCount += addValue;
        this.updateCompletedLineCountDisplay();
    }

    enablePeriodicMoveActivePieceDown() {
        if (!this.intervalTimeId) {
            this.intervalTimeId = window.setInterval(
                () => {
                    this.moveActivePieceDown();
                },
                this.intervalDelay
            )
        }
    }

    disablePeriodicMoveActivePieceDown() {
        if (this.intervalTimeId) {
            window.clearInterval(this.intervalTimeId);
            this.intervalTimeId = null;
        }
    }
}
