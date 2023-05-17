'use strict';

class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.completedLinesCount = 0;
        this.gameStatus = GAME_NOT_STARTED;

        const addToCompletedLineCount = (addValue) => {
            this.addToCompletedLineCount(addValue);
        }

        this.board = new Board({ctx: ctx,
                                addToCompletedLineCount: addToCompletedLineCount});
    }

    startGame() {
        if (this.gameStatus !== GAME_ACTIVE) {
            this.gameStatus = GAME_ACTIVE;

            const addToCompletedLineCount = (addValue) => {
                this.addToCompletedLineCount(addValue);
            }
    
            this.board = new Board({ctx: ctx,
                                    addToCompletedLineCount: addToCompletedLineCount});
            this.board.addActivePiece();
        }
    }

    pauseGame() {
        this.gameStatus = GAME_PAUSED;
    }

    renderGame() {
        this.board.renderBoard();
        const activePiece = this.board.activePiece;
        if (activePiece) {
            activePiece.renderPiece(ctx);
        }
        this.updateCompletedLineCountDisplay();
    }

    updateCompletedLineCountDisplay() {
        const linesSpan = document.getElementById('lines');
        if (linesSpan) {
            linesSpan.innerText = `${this.completedLinesCount}`;
        }
    }

    resetGame() {
        this.completedLinesCount = 0;
        this.gameStatus = GAME_NOT_YET_STARTED;
        this.board = new Board();
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
            this.board.moveActivePieceDown();
            this.renderGame();
            this.board.handleCompletedRows()
            this.renderGame();
        }
    }

    dropActivePiece() {
        if (this.gameStatus === GAME_ACTIVE) {
            this.board. dropActivePiece();
            this.renderGame();
            this.board.handleCompletedRows()
            this.renderGame();
        }
    }

    addToCompletedLineCount(addValue) {
        this.completedLinesCount += addValue;
        this.updateCompletedLineCountDisplay();
    }
}
