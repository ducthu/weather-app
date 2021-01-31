import { AuthAction, SET_USER, SET_LOADING, SIGN_OUT, SET_ERROR, SET_SUCCESS } from './../type';
import { userConstants } from '../../constants/user';
import { AuthState } from '../type';


let token = localStorage.getItem('token');
const initialState: AuthState = {
    user: null,
    authenticated: token ? true : false,
    loading: false,
    error: '',
    success: '',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                authenticated: true
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case SIGN_OUT:
            return {
                ...state,
                user: null,
                authenticated: false,
                loading: false
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case SET_SUCCESS:
            return {
                ...state,
                success: action.payload
            };
        default:
            return state;
    }
}