const { setUpPlayerSelection } = require('./players_selection');
const { setUpPlayersCommunication } = require('./players_communication');
const { handleDisconnect } = require('./disconnect_handler');

module.exports.setUpApi = function (socket, io) {
    setUpPlayerSelection(socket, io);
    setUpPlayersCommunication(socket, io);
    handleDisconnect(socket, io);
}
