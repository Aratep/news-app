import {
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOG_OUT
} from '../constants/action-types';

const initialState = {
    loading: null,
    user: {
        username: 'guest'
    },
    error: null
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_STARTED:
            return {...state, loading: true};
        case LOGIN_SUCCESS:
            return {...state, loading: false, error: null, user: action.payload};
        case LOGIN_FAILURE:
            return {...state, loading: false, error: action.payload};
        case LOG_OUT:
            return {...state, loading: false, error: null, user: {}};
        default:
            return state;
    }
}

export default authReducer