import React, { useEffect } from 'react';
import { Loader, CenterWrapper } from './styles';
import {
    connectPlayerToServer, removeOpponent, disconnectPlayerFromServer,
    setPlayerInSearch
} from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GameScene from '../../components/game_scene';
import GameEngine from '../../components/game_engine';

const MultiplayerTetris = ({
    connectPlayerToServer, socket, removeOpponent,
    disconnectPlayerFromServer, inSearch, setPlayerInSearch
}) => {
    useEffect(() => {
        connectPlayerToServer();
        return () => {
            disconnectPlayerFromServer();
            removeOpponent();
            setPlayerInSearch(true);
        }
    }, [
        connectPlayerToServer, disconnectPlayerFromServer, removeOpponent,
        setPlayerInSearch
    ]);

    useEffect(() => {
        if (socket) {
            socket.emit('startPlayerSearch');
        }
    }, [socket]);

    return (
        (() => {
            if (!inSearch) {
                return (
                    <React.Fragment>
                        <GameEngine />
                        <GameScene />
                    </React.Fragment>
                )
            } else {
                return (
                    <CenterWrapper>
                        <Loader />
                    </CenterWrapper>
                );
            }
        })()
    );
}

const mapDispatchToProps = dispatch => ({
    connectPlayerToServer: bindActionCreators(connectPlayerToServer, dispatch),
    removeOpponent: bindActionCreators(removeOpponent, dispatch),
    disconnectPlayerFromServer: bindActionCreators(disconnectPlayerFromServer, dispatch),
    setPlayerInSearch: bindActionCreators(setPlayerInSearch, dispatch),
});

const mapStateToProps = state => ({
    socket: state.player.socket,
    inSearch: state.player.inSearch,
});

export default connect(mapStateToProps, mapDispatchToProps)(MultiplayerTetris);
