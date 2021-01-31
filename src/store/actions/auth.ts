import { userService } from './../../services/user';
import { AuthAction, SET_ERROR, SET_LOADING, SignInData, SIGN_OUT, SET_SUCCESS, SET_USER } from './../type';
import { RootState } from './../index';
import { ThunkAction } from 'redux-thunk';

export const setLoading = (value: boolean): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_LOADING,
            payload: value
        });
    }
};

export const signin = (data: SignInData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            const response = await userService.login({ username: data.email, password: data.password });
            console.debug(response);
            dispatch({
                type: SET_USER,
                payload: response
            })
        } catch (error) {
            console.error(error);
            onError();
            dispatch(setError('Failed to connect'));
        }
    }
}

export const signout = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            console.log("signout");
            dispatch(setLoading(true));
            await userService.logout();
            dispatch({
                type: SIGN_OUT
            });
        } catch (error) {
            console.error(error);
            dispatch(setLoading(false));
        }
    }
}

export const setError = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_ERROR,
            payload: msg
        });
    }
}

export const setSuccess = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_SUCCESS,
            payload: msg
        });
    }
};