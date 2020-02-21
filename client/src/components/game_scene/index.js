import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { clearCells, refreshTetromino, resetScore, resetSpeed, setGameOver, resetPower } from '../../actions';
import { connect } from 'react-redux';
import { AreasHolder } from './styles';
import Board from '../board';

const GameScene = ({ clearCells, refreshTetromino, resetScore, resetSpeed, setGameOver, resetPower }) => {
    useEffect(() => {
        setTimeout(() => setGameOver(false), 3000)
        return function cleanUpScene() {
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

export default connect(undefined, mapDispatchToProps)(GameScene);
