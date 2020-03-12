import store from '../store';
import {
    setOpponent, removeOpponent, setPlayerWin,
    setGameOver, setPlayerInSearch, addInputAttack
} from '../actions';

export const setUpApi = socket => {
    socket.on('setOpponent', opponentId => {
        store.dispatch(setPlayerInSearch(false));
        store.dispatch(setOpponent(opponentId));
    });
    socket.on('removeOpponent', () => {
        store.dispatch(removeOpponent());
        store.dispatch(setPlayerWin(true));
        store.dispatch(setGameOver(true));
    });
    socket.on('win', () => {
        store.dispatch(setPlayerWin(true));
        store.dispatch(setGameOver(true));
    });
    socket.on('attack', attackType => {
        store.dispatch(addInputAttack(attackType));
    });
    return socket;
}
