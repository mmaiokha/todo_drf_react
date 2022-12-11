import axios from "axios";

export const PASSWORD_CHANGE = 'PASSWORD_CHANGE'
export const USERNAME_CHANGE = 'USERNAME_CHANGE'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT = 'LOGOUT'

export const USER_LOADED_SUCCESS = 'USER_LOADED_SUCCESS'


export const passwordChange = (password) => {
    return {type: PASSWORD_CHANGE, password: password}
};

export const usernameChange = (username) => {
    return {type: USERNAME_CHANGE, username: username}
};

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}auth/token/`, {
                password: password,
                username: username
            }, config
        )
        dispatch({type: LOGIN_SUCCESS, access: res.data.access, refresh: res.data.refresh})

        dispatch(loadUser())
    } catch (err) {
        dispatch({type: LOGIN_FAIL})
    }
};

const loadUser = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}users/me/`, config)
        dispatch({type: USER_LOADED_SUCCESS, user: res.data})
    } catch (err) {

    }
};

export const logout = () => {
    return {type: LOGOUT}
};
