import { Unit } from '../../types/Unit';
import { ConfigInput, setConfigAction, SET_CONFIG } from './../../types/ConfigInput/index';

const initialState: ConfigInput = {
    units: Unit.METRIC,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: setConfigAction) => {
    switch (action.type) {
        case SET_CONFIG:
            return {
                ...state,
                units: action.payload
            }
        default:
            return state;
    }
}