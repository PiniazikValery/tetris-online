import React, { useEffect } from 'react';
import { connectPlayerToServer } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App({ connectPlayerToServer }) {

  useEffect(() => connectPlayerToServer(), [connectPlayerToServer]);

  return (
    <Router>
      <Routes />
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({
  connectPlayerToServer: bindActionCreators(connectPlayerToServer, dispatch),
});

export default connect(undefined, mapDispatchToProps)(App);
