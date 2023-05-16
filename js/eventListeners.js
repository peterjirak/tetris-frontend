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
                                // Moving an active piece down may cause
                                // collision with the board. When collision
                                // occurs, the active piece is added to the
                                // board and a new active piece is created and
                                // added to the board.
                                //
                                // So when rendering after executing the
                                // moveActivePieceDown, the activePiece must be
                                // retrieved from the board before it is used for
                                // rendering:
                                activePiece = board.activePiece;
                                if (activePiece) {
                                    const ctx = board.ctx;
                                    activePiece.renderPiece(ctx);
                                }
                            }
                            if (board.hasCompletedRows()) {
                                board.handleCompletedRows();
                                board.renderBoard();
                                activePiece = board.activePiece;
                                if (activePiece) {
                                    const ctx = board.ctx;
                                    activePiece.renderPiece(ctx);
                                }
                            }
                        }
                    }
                }  else if (event.key === ' ') {
                    if (isGameActive()) {
                        const board = getBoard();
                        if (board) {
                            let activePiece = board.activePiece;
                            if (activePiece) {
                                board.moveActivePieceDownUntilCollisionOccurs();
                                board.renderBoard();
                                activePiece = board.activePiece;
                                if (activePiece) {
                                    const ctx = board.ctx;
                                    activePiece.renderPiece(ctx);
                                }
                            }
                            if (board.hasCompletedRows()) {
                                board.handleCompletedRows();
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