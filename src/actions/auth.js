import axios from 'axios';

import {
    BASE_API_URL,
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOG_OUT,
} from "../helpers/constants/action-types";
import {token} from "../helpers/helperFunctions";
import history from "../history";

export const login = ({username, password}) => {
    return async dispatch => {
        dispatch(loginStarted());
        try {
            const result = await axios.get(`${BASE_API_URL}/auth.json`);
            const {user} = result.data;

            if (username === user.username && password === user.password) {
                const auth_token = token();
                dispatch(loginSuccess(user));
                delete user.password;
                localStorage.setItem('current_user', JSON.stringify(user));
                localStorage.setItem('auth_token', JSON.stringify(auth_token));

                history.push('/profile')
            } else {
                dispatch(loginFailure('The username or password you entered is incorrect'))
            }
        } catch (error) {
            console.log(error)
        }
    };
};

export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: user
});

const loginStarted = () => ({
    type: LOGIN_STARTED
});

const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: error
});

export function logOut() {
    return dispatch => {
        dispatch({type: LOG_OUT});
        localStorage.removeItem('current_user');
        localStorage.removeItem('auth_token');
        history.push('/')
    }
}