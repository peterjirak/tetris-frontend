const registeredEvents = {};

const registerReleaseUpArrowKey = () => {
    if (!registeredEvents.releaseKeyboardKey) {
        window.addEventListener(
            'keyup',
            (event) => {
                if (event.key === 'ArrowUp') {
                    if (isGameActive()) {
                        const board = getBoard();
                        if (board) {
                            const activePiece = board.activePiece;
                            if (activePiece) {
                                activePiece.rotatePieceClockwise();
                                board.renderBoard();
                                const ctx = board.ctx;
                                activePiece.renderPiece(ctx);
                            }
                        }
                    }
                } else if (event.key === 'ArrowLeft') {
                    if (isGameActive()) {
                        const board = getBoard();
                        if (board) {
                            const activePiece = board.activePiece;
                            if (activePiece) {
                                board.moveActivePieceLeft();
                                board.renderBoard();
                                const ctx = board.ctx;
                                activePiece.renderPiece(ctx);
                            }
                        }
                    }
                } else if (event.key === 'ArrowRight') {
                    if (isGameActive()) {
                        const board = getBoard();
                        if (board) {
                            const activePiece = board.activePiece;
                            if (activePiece) {
                                board.moveActivePieceRight();
                                board.renderBoard();
                                const ctx = board.ctx;
                                activePiece.renderPiece(ctx);
                            }
                        }
                    }
                } else if (event.key === 'ArrowDown') {
                    if (isGameActive()) {
                        const board = getBoard();
                        if (board) {
                            let activePiece = board.activePiece;
                            if (activePiece) {
                                board.moveActivePieceDown();
                                board.renderBoard();
                                activePiece = board.activePiece;
                                if (activePiece) {
                                    const ctx = board.ctx;
                                    activePiece.renderPiece(ctx);
                                }
                            }
                        }
                    }
                }
            }
        );
        registeredEvents.releaseKeyboardKey = true;
    }
}