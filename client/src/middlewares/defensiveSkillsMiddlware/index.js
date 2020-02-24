import { CONSTANTS, decreasePower } from '../../actions';
import config from '../../config';

const defensiveSkillsMiddleware = store => next => action => {
    let { power } = store.getState().game;
    switch (action.type) {
        case CONSTANTS.REMOVE_FIRST_ROW: {
            if (power >= config.DEFENSIVE_SKILLS.REMOVE_FIRST_ROW.cost) {
                store.dispatch(decreasePower(config.DEFENSIVE_SKILLS.REMOVE_FIRST_ROW.cost));
                next(action);
            }
            break;
        }
        default: {
            return next(action);
        }
    }
};

export default defensiveSkillsMiddleware;
