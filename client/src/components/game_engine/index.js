import { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GameLoop from '../../game_engine/game_loop';
import GameVerifier from '../../game_engine/game_verifier';
import KeysHandler from '../../game_engine/keys_handler';
import { changeGameLoopActivationStatus, changeGameVerifierActivationStatus } from '../../actions';

const GameEngine = ({ gameLoopActivated, currentTetromino, gameVerifierActivated, cells, isGameOver, changeGameVerifierActivationStatus, changeGameLoopActivationStatus }) => {
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
        if (gameLoopActivated && !isGameOver) {
            gameLoop.current.start();
        } else {
            gameLoop.current.stop();
        }
    }, [gameLoopActivated, isGameOver])

    useEffect(() => {
        if (gameVerifierActivated && !isGameOver) {
            gameVerifier.current.verifyTetrominoCollideCells();
        }
    }, [currentTetromino, gameVerifierActivated, isGameOver])

    useEffect(() => {
        gameVerifier.current.verifyLineClear();
        gameVerifier.current.verifyRefreshedTetrominoIsSuitable();
    }, [cells])

    useEffect(() => {
        if (isGameOver) {
            keysHandler.current.stopKeysListening();
        } else {
            keysHandler.current.startKeysListening();
        }
    }, [isGameOver, changeGameLoopActivationStatus, changeGameVerifierActivationStatus])

    return (null);
}

const mapStateToProps = state => ({
    gameLoopActivated: state.gameEngine.gameLoopActivated,
    gameVerifierActivated: state.gameEngine.gameVerifierActivated,
    currentTetromino: state.currentTetromino,
    cells: state.cells,
    isGameOver: state.game.isGameOver
});

const mapDispatchToProps = dispatch => ({
    changeGameLoopActivationStatus: bindActionCreators(changeGameLoopActivationStatus, dispatch),
    changeGameVerifierActivationStatus: bindActionCreators(changeGameVerifierActivationStatus, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(GameEngine);
