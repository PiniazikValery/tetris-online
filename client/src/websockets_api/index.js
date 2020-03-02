import store from '../store';
import { setOpponent, removeOpponent, setPlayerWin, setGameOver, setPlayerInSearch } from '../actions';

export const setUpApi = socket => {
    socket.on('setOpponent', opponentId => {
        console.log('setted opponent');
        store.dispatch(setPlayerInSearch(false));
        store.dispatch(setOpponent(opponentId));
    });
    socket.on('removeOpponent', () => {
        console.log('opponent has been removed');
        store.dispatch(removeOpponent());
        store.dispatch(setPlayerWin(true));
        store.dispatch(setGameOver(true));
    });
    socket.on('win', () => {
        console.log('You have won');
        store.dispatch(setPlayerWin(true));
        store.dispatch(setGameOver(true));
    });
    return socket;
}
