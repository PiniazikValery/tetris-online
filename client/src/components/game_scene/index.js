import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { clearCells, refreshTetromino, resetScore, resetSpeed, setGameOver, resetPower } from '../../actions';
import { connect } from 'react-redux';
import { AreasHolder } from './styles';
import GameOverPopup from '../game_over_popup';
import Board from '../board';

const GameScene = ({ clearCells, refreshTetromino, resetScore, resetSpeed, setGameOver, resetPower, isGameOver }) => {
    const [gameStarts, setGameStarting] = useState(true);

    useEffect(() => {
        let beforePlayTimeout = setTimeout(() => {
            setGameOver(false);
            setGameStarting(false);
        }, 3000)
        return function cleanUpScene() {
            clearTimeout(beforePlayTimeout);
            clearCells();
            refreshTetromino();
            resetScore();
            resetSpeed();
            resetPower();
            setGameOver(true);
        }
    }, [clearCells, refreshTetromino, resetScore, resetSpeed, setGameOver, resetPower])
    return (
        <AreasHolder>
            <Board />
            {!gameStarts && isGameOver && <GameOverPopup />}
        </AreasHolder>
    );
};

const mapDispatchToProps = dispatch => ({
    clearCells: bindActionCreators(clearCells, dispatch),
    refreshTetromino: bindActionCreators(refreshTetromino, dispatch),
    resetScore: bindActionCreators(resetScore, dispatch),
    resetSpeed: bindActionCreators(resetSpeed, dispatch),
    setGameOver: bindActionCreators(setGameOver, dispatch),
    resetPower: bindActionCreators(resetPower, dispatch)
});

const mapStateToProps = state => ({
    isGameOver: state.game.isGameOver
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScene);
