const registeredEvents = {};

const registerReleaseUpArrowKey = () => {
    if (!registeredEvents.releaseUpArrowKey) {
        window.addEventListener(
            'keyup',
            (event) => {
                if (event.key === 'ArrowUp') {
                    if (isGameActive()) {
                        const board = getBoard();
                        const activePiece = board.activePiece;
                        if (activePiece) {
                            activePiece.rotatePieceClockwise();
                            board.renderBoard();
                            const ctx = board.ctx;
                            activePiece.renderPiece(ctx);
                        }
                    }
                }
            }
        );
        registeredEvents.releaseUpArrowKey = true;
    }
}