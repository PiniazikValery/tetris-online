import { CONSTANTS } from '../index';

const isFunction = _function => _function && {}.toString.call(_function) === '[object Function]';

export const changeGameLoopActivationStatus = value => ({
    type: CONSTANTS.CHANGE_GAME_LOOP_ACTIVATION_STATUS,
    payload: {
        value
    }
});

export const changeGameVerifierActivationStatus = value => ({
    type: CONSTANTS.CHANGE_GAME_VERIFIER_ACTIVATION_STATUS,
    payload: {
        value
    }
});

let gameLoopTimeOut = undefined;

export const offOnGameLoopWithDelay = function () {
    let timeOutFunction = arguments[0];
    let delayTime = arguments[1];
    let timeOutParams = arguments[2];
    return (dispatch, getState) => {
        clearTimeout(gameLoopTimeOut);
        dispatch(changeGameLoopActivationStatus(false));
        gameLoopTimeOut = setTimeout(() => {
            isFunction(timeOutFunction) && timeOutFunction(timeOutParams);
            dispatch(changeGameLoopActivationStatus(true));
        }, delayTime, timeOutParams);
    }
}

let gameActivationTimeOuts = [];

export const offOnGameActivationWithDelay = function () {
    let timeOutFunction = arguments[0];
    let delayTime = arguments[1];
    let timeOutParams = arguments[2];
    return (dispatch) => {
        dispatch(changeGameVerifierActivationStatus(false));
        gameActivationTimeOuts.push(setTimeout((timeOutParams) => {
            isFunction(timeOutFunction) && timeOutFunction(timeOutParams);
            dispatch(changeGameVerifierActivationStatus(true));
            gameActivationTimeOuts.forEach(timeout => clearTimeout(timeout));
        }, delayTime, timeOutParams));
    }
}
