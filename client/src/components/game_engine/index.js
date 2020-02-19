import { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import GameLoop from '../../game_engine/game_loop';
import GameVerifier from '../../game_engine/game_verifier';
import KeysHandler from '../../game_engine/keys_handler';

const GameEngine = ({ gameLoopActivated, currentTetromino, gameVerifierActivated, cells }) => {
    const gameVerifier = useRef(new GameVerifier());
    const gameLoop = useRef(new GameLoop());
    const keysHandler = useRef(new KeysHandler());

    useEffect(() => {
        let gameLoopCopy = gameLoop;
        let keysHandlerCopy = keysHandler;
        keysHandlerCopy.current.startKeysListening();
        return function turnOffEngine() {
            gameLoopCopy.current.stop();
            keysHandlerCopy.current.stopKeysListening();
        }
    }, []);

    useEffect(() => {
        if (gameLoopActivated) {
            gameLoop.current.start();
        } else {
            gameLoop.current.stop();
        }
    }, [gameLoopActivated])

    useEffect(() => {
        if (gameVerifierActivated) {
            gameVerifier.current.verifyTetrominoCollideCells();
        }
    }, [currentTetromino, gameVerifierActivated])

    useEffect(() => {
        gameVerifier.current.verifyLineClear();
        gameVerifier.current.verifyGameOver();
    }, [cells])

    return (null);
}

const mapStateToProps = state => ({
    gameLoopActivated: state.gameEngine.gameLoopActivated,
    gameVerifierActivated: state.gameEngine.gameVerifierActivated,
    currentTetromino: state.currentTetromino,
    cells: state.cells
});

export default connect(mapStateToProps)(GameEngine);
