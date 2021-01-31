import { RootState } from './../index';
import { SET_CONFIG, ConfigAction } from './../../types/ConfigInput/index';
import { ThunkAction } from 'redux-thunk';

export const setConfig = (unit: string): ThunkAction<void, null, RootState, ConfigAction> => {
    return dispatch => {
        dispatch({
            type: SET_CONFIG,
            payload: unit
        });
    }
}