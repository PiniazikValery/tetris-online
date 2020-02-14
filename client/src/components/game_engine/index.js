import { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import GameLoop from '../../game_engine/game_loop';
import GameVerifier from '../../game_engine/game_verifier';
import KeysHandler from '../../game_engine/keys_handler';

const GameEngine = ({ gameLoopActivated, currentTetromino, gameVerifierActivated }) => {
    const gameVerifier = useRef(new GameVerifier());
    const gameLoop = useRef(new GameLoop());
    const keysHandler = useRef(new KeysHandler());

    useEffect(() => {
        keysHandler.current.startKeysListening();
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
            gameVerifier.current.verify()
        }
    }, [currentTetromino, gameVerifierActivated])
    return (null);
}

const mapStateToProps = state => ({
    gameLoopActivated: state.gameEngine.gameLoopActivated,
    gameVerifierActivated: state.gameEngine.gameVerifierActivated,
    currentTetromino: state.currentTetromino
});

export default connect(mapStateToProps)(GameEngine);
