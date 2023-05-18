'use strict';

const registeredEvents = {};

const registerReleaseUpArrowKey = () => {
    if (!registeredEvents.releaseKeyboardKey) {
        window.addEventListener(
            'keyup',
            (event) => {
                if (event.key === 'ArrowUp') {
                    getGame().rotateActivePieceClockwise();
                } else if (event.key === 'ArrowLeft') {
                    getGame().moveActivePieceLeft();
                } else if (event.key === 'ArrowRight') {
                    getGame().moveActivePieceRight();
                } else if (event.key === 'ArrowDown') {
                    getGame().moveActivePieceDown();
                }  else if (event.key === ' ') { // Space key
                    event.stopPropagation();
                    event.preventDefault();
                    getGame().dropActivePiece();
                }
            }
        );
        registeredEvents.releaseKeyboardKey = true;
    }
}