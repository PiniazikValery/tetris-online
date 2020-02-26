let waitingPlayers = [];
let playingCouples = [];

function DistributePlayers(io) {
    if (waitingPlayers.length >= 2) {
        for (let i = 0; i < waitingPlayers.length - waitingPlayers.length % 2; i = i + 2) {
            io.in(waitingPlayers[i].id).emit('setOpponent', waitingPlayers[i + 1].id);
            io.in(waitingPlayers[i + 1].id).emit('setOpponent', waitingPlayers[i].id);
            playingCouples.push({
                firstP: waitingPlayers[i],
                secondP: waitingPlayers[i + 1]
            });
            console.log(`user ${waitingPlayers[i].id} connected to ${waitingPlayers[i + 1].id}`)
        }
        waitingPlayers = waitingPlayers % 2 ? [waitingPlayers[waitingPlayers.length - 1]] : [];
    }
}

module.exports.removeWaitingPlayer = function (socket) {
    waitingPlayers = waitingPlayers.filter(item => item != socket);
}

module.exports.removePlayingCouple = function (socket, io) {
    let removeIndex = undefined;
    for (let i = 0; i < playingCouples.length; i++) {
        if (playingCouples[i].firstP === socket || playingCouples[i].secondP === socket) {
            removeIndex = i;
            io.in(playingCouples[i].firstP.id).emit('removeOpponent');
            io.in(playingCouples[i].secondP.id).emit('removeOpponent');
            break;
        }
    }
    if (removeIndex !== undefined) {
        playingCouples.splice(removeIndex, 1);
    }
}

module.exports.setUpPlayerSelection = function (socket, io) {
    socket.on('startPlayerSearch', () => {
        waitingPlayers.push(socket);
        DistributePlayers(io);
    });
}
