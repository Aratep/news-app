import {
    API_URL,
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOG_OUT,
} from "../constants/action-types";
import {token} from "../constants/helperFunctions";
import history from "../history";

export const auth = ({username, password}) => {
    console.log({username, password});

    return dispatch => {
        dispatch(loginStarted());

        fetch(`${API_URL}/auth.json`, {
            method: "GET",
        })
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log(res);
                const {user} = res;
                // console.log({auth, password})
                if (username === user.username && password === user.password) {
                    const auth_token = token()
                    dispatch(loginSuccess(user));
                    // const token = 'laskfjdlasjf'
                    delete user.password;
                    localStorage.setItem('current_user', JSON.stringify(res));
                    localStorage.setItem('auth_token', JSON.stringify(auth_token));
                    history.push('/profile')
                } else {
                    dispatch(loginFailure('The username or password you entered is incorrect'))
                }
            })
            .catch(err => {
                console.log(err)
            });
    };
};

export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: user
});


// const currentUser = JSON.parse(localStorage.getItem("current_user"));
// localStorage.getItem('user_token') && loginSuccess(currentUser);

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
        //             localStorage.removeItem('passengerStorage');
        // fetch(`${API_URL}/logout/`)
        //     .then(res => res.json())
        //     .then(res => {
        //         if (res.code === '200') {
        //             localStorage.removeItem('currentUser');
        //             localStorage.removeItem('passengerStorage');
        //             dispatch({type: LOG_OUT});
        //         }
        //     })
        //     .catch(err => console.log(err))
    }
}