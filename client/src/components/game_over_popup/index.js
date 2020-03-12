import React from 'react';
import { connect } from 'react-redux';
import {
    clearCells, refreshTetromino, resetScore,
    resetSpeed, setGameOver, resetPower,
    removeOpponent, setPlayerInSearch, setPlayerWin,
    clearInputAttacks
} from '../../actions';
import { bindActionCreators } from 'redux';
import {
    PopupBody, PopupTitle, PopupButton,
    PopupRouteButton, WinLose
} from './styles';

const GameOverPopup = ({
    win, socket, beforePlayTimeout,
    clearInputAttacks, setGameOver, setGameStarting,
    clearCells, refreshTetromino, resetScore,
    resetSpeed, resetPower, removeOpponent,
    setPlayerInSearch, setPlayerWin
}) => {
    const onPlayAgain = () => {
        refreshTetromino(true);
        resetScore();
        resetSpeed();
        resetPower();
        setPlayerWin(undefined);
        setGameStarting(true);
        if (socket) {
            removeOpponent();
            setPlayerInSearch(true);
            clearInputAttacks();
            socket.emit('startPlayerSearch');
        } else {
            beforePlayTimeout.current = setTimeout(() => {
                setGameOver(false);
                setGameStarting(false);
            }, 3000);
        }
        clearCells();
    };

    return (<PopupBody>
        <PopupTitle>Game Over</PopupTitle>
        {socket !== undefined && <WinLose win={win} />}
        <PopupButton onClick={onPlayAgain}>Play again</PopupButton>
        <PopupRouteButton to="/">Back to main menu</PopupRouteButton>
    </PopupBody>);
}

const mapStateToProps = state => ({
    win: state.player.win,
    socket: state.player.socket
});

const mapDispatchToProps = dispatch => ({
    clearCells: bindActionCreators(clearCells, dispatch),
    refreshTetromino: bindActionCreators(refreshTetromino, dispatch),
    resetScore: bindActionCreators(resetScore, dispatch),
    resetSpeed: bindActionCreators(resetSpeed, dispatch),
    setGameOver: bindActionCreators(setGameOver, dispatch),
    resetPower: bindActionCreators(resetPower, dispatch),
    removeOpponent: bindActionCreators(removeOpponent, dispatch),
    setPlayerInSearch: bindActionCreators(setPlayerInSearch, dispatch),
    setPlayerWin: bindActionCreators(setPlayerWin, dispatch),
    clearInputAttacks: bindActionCreators(clearInputAttacks, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOverPopup);
