const { removeWaitingPlayer, removePlayingCouple } = require('../players_selection');

module.exports.handleDisconnect = function (socket, io) {
    socket.on('disconnect', () => {
        removeWaitingPlayer(socket);
        removePlayingCouple(socket, io);
    });
}
