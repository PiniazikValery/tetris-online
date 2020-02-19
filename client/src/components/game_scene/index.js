import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { clearCells, refreshTetromino, resetScore, resetSpeed } from '../../actions';
import { connect } from 'react-redux';
import { AreasHolder } from './styles';
import Board from '../board';

const GameScene = ({ clearCells, refreshTetromino, resetScore, resetSpeed }) => {
    useEffect(() => {
        return function cleanUpScene() {
            clearCells();
            refreshTetromino();
            resetScore();
            resetSpeed();
        }
    }, [clearCells, refreshTetromino, resetScore, resetSpeed])
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
    resetSpeed: bindActionCreators(resetSpeed, dispatch)
});

export default connect(undefined, mapDispatchToProps)(GameScene);
