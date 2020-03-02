module.exports.setUpPlayersCommunication = function (socket, io) {
    socket.on('attack_other_player', data => {
        io.in(data.target).emit('attack', data.attackType);
    });
    socket.on('player_lost', opponentId => {
        console.log(opponentId);
        io.in(opponentId).emit('win');
    });
}
