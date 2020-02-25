const { setUpPlayerSelection, removeWaitingPlayer } = require('./players_selection');
const { setUpPlayersCommunication } = require('./players_communication');

module.exports.setUpApi = function (socket, io) {
    setUpPlayerSelection(socket, io);
    setUpPlayersCommunication(socket, io);
    socket.on('disconnect', () => {
        removeWaitingPlayer(socket);
    });
}
