import React, { useEffect } from 'react';
import { connectPlayerToServer } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App({ connectPlayerToServer, socket }) {

  useEffect(() => {
    connectPlayerToServer();
  }, [connectPlayerToServer]);
  useEffect(() => {
    if (socket) {
      socket.emit('startPlayerSearch');
      socket.on('setOpponent', opponentId => console.log(opponentId));
    }
  }, [socket]);

  return (
    <Router>
      <Routes />
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({
  connectPlayerToServer: bindActionCreators(connectPlayerToServer, dispatch),
});

const mapStateToProps = state => ({
  socket: state.player.socket
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
