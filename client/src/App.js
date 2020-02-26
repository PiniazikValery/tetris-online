import React, { useEffect } from 'react';
import { connectPlayerToServer, setOpponent, removeOpponent } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App({ connectPlayerToServer, socket, setOpponent, removeOpponent, opponentId }) {

  useEffect(() => {
    connectPlayerToServer();
  }, [connectPlayerToServer]);
  useEffect(() => {
    if (socket) {
      socket.on('setOpponent', opponentId => setOpponent(opponentId));
      socket.on('removeOpponent', () => removeOpponent());
    }
  }, [socket, setOpponent, removeOpponent]);

  useEffect(() => {
    if (!opponentId && socket) {
      socket.emit('startPlayerSearch');
    }
  }, [socket, opponentId]);

  return (
    <Router>
      <Routes />
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({
  connectPlayerToServer: bindActionCreators(connectPlayerToServer, dispatch),
  setOpponent: bindActionCreators(setOpponent, dispatch),
  removeOpponent: bindActionCreators(removeOpponent, dispatch),
});

const mapStateToProps = state => ({
  socket: state.player.socket,
  opponentId: state.opponent.socketId
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
