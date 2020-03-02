import React from 'react';
import { connect } from 'react-redux';
import { PopupBody, PopupTitle, PopupButton } from './styles';

const GameOverPopup = ({ win, socket }) => {
    return (<PopupBody>
        <PopupTitle>Game Over</PopupTitle>
        {socket !== undefined && (win ? <div style={{ color: "green" }}>You are win</div> : <div style={{ color: "red" }}>You are lose</div>)}
        <PopupButton>Play again</PopupButton>
        <PopupButton>Back to main menu</PopupButton>
    </PopupBody>);
}

const mapStateToProps = state => ({
    win: state.player.win,
    socket: state.player.socket
});

export default connect(mapStateToProps)(GameOverPopup);
