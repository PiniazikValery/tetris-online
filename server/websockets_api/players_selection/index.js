let waitingPlayers = [];

function DistributePlayers(io) {
    if (waitingPlayers.length >= 2) {
        for (let i = 0; i < waitingPlayers.length - waitingPlayers.length % 2; i = i + 2) {
            io.in(waitingPlayers[i].id).emit('setOpponent', waitingPlayers[i + 1].id);
            io.in(waitingPlayers[i + 1].id).emit('setOpponent', waitingPlayers[i].id);
        }
        waitingPlayers = waitingPlayers % 2 ? [waitingPlayers[waitingPlayers.length - 1]] : [];
    }
}

module.exports.removeWaitingPlayer = function (socket) {
    waitingPlayers = waitingPlayers.filter(item => item != socket);
}

module.exports.setUpPlayerSelection = function (socket, io) {
    socket.on('startPlayerSearch', () => {
        waitingPlayers.push(socket);
        DistributePlayers(io);
    });
}
