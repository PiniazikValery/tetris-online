import React, { useEffect, useState, useRef } from 'react';
import { bindActionCreators } from 'redux';
import {
    clearCells, refreshTetromino, resetScore,
    resetSpeed, setGameOver, resetPower,
    removeOpponent, setPlayerWin, clearInputAttacks
} from '../../actions';
import { connect } from 'react-redux';
import { AreasHolder, LeftPanel, RightPanel } from './styles';
import GameOverPopup from '../game_over_popup';
import Board from '../board';

const GameScene = ({
    power, score, clearCells,
    refreshTetromino, resetScore, resetSpeed,
    setGameOver, resetPower, clearInputAttacks,
    win, socket, removeOpponent,
    setPlayerWin
}) => {
    const [gameStarts, setGameStarting] = useState(true);

    let beforePlayTimeout = useRef(undefined);

    useEffect(() => {
        beforePlayTimeout.current = setTimeout(() => {
            setGameOver(false);
            setGameStarting(false);
        }, 3000)
        return function cleanUpScene() {
            clearTimeout(beforePlayTimeout.current);
            refreshTetromino(true);
            resetScore();
            resetSpeed();
            resetPower();
            setGameOver(true);
            setGameStarting(true);
            setPlayerWin(undefined);
            if (socket) {
                clearInputAttacks();
                removeOpponent();
            }
            clearCells();
        }
    }, [
        clearCells, refreshTetromino, resetScore,
        resetSpeed, setGameOver, resetPower,
        beforePlayTimeout, socket, removeOpponent,
        setPlayerWin, clearInputAttacks
    ]);

    useEffect(() => {
        if (win !== undefined) {
            clearTimeout(beforePlayTimeout.current);
            setGameStarting(false);
            setGameOver(true);
        }
    }, [win, setGameOver]);

    return (
        <AreasHolder>
            <LeftPanel>
                Current score: {score}<br />
                {socket && `Current power: ${power}`}
            </LeftPanel>
            <Board />
            <RightPanel ></RightPanel>
            {!gameStarts && win !== undefined && <GameOverPopup beforePlayTimeout={beforePlayTimeout} setGameStarting={setGameStarting} />}
        </AreasHolder>
    );
};

const mapDispatchToProps = dispatch => ({
    clearCells: bindActionCreators(clearCells, dispatch),
    refreshTetromino: bindActionCreators(refreshTetromino, dispatch),
    resetScore: bindActionCreators(resetScore, dispatch),
    resetSpeed: bindActionCreators(resetSpeed, dispatch),
    setGameOver: bindActionCreators(setGameOver, dispatch),
    resetPower: bindActionCreators(resetPower, dispatch),
    removeOpponent: bindActionCreators(removeOpponent, dispatch),
    setPlayerWin: bindActionCreators(setPlayerWin, dispatch),
    clearInputAttacks: bindActionCreators(clearInputAttacks, dispatch)
});

const mapStateToProps = state => ({
    isGameOver: state.game.isGameOver,
    win: state.player.win,
    socket: state.player.socket,
    score: state.player.score,
    power: state.player.power
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScene);
