import axios from "axios";

const PASSWORD_CHANGE = "PASSWORD_CHANGE"
const USERNAME_CHANGE = "USERNAME_CHANGE"

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'
const LOGOUT = 'LOGOUT'

const USER_LOADED_SUCCESS = 'USER_LOADED_SUCCESS'


let initialStore = {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: false,
    user: null,
    username: "",
    password: ""
}

const authReducer = (store = initialStore, action) => {
    switch (action.type) {
        case PASSWORD_CHANGE:
            return {
                ...store,
                password: action.password
            }
        case USERNAME_CHANGE:
            return {
                ...store,
                username: action.username
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("access", action.access)
            localStorage.setItem("refresh", action.refresh)
            return {
                ...store,
                access: action.access,
                refresh: action.refresh,
                isAuthenticated: true,
                password: "",
                username: "",
            }

        case LOGIN_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...store,
                isAuthenticated: false,
                access: null,
                refresh: null,
                password: "",
                username: "",
                user: null
            }
        case LOGOUT:
            console.log("logout")
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...store,
                isAuthenticated: false,
                access: null,
                refresh: null,
                password: "",
                username: "",
                user: null
            }
        case USER_LOADED_SUCCESS:
            return {
                ...store,
                user: action.user
            }
        default:
            return store
    }
}

export default authReducer;


export const passwordChange = (password) => {
    return {type: PASSWORD_CHANGE, password: password}
}

export const usernameChange = (username) => {
    return {type: USERNAME_CHANGE, username: username}
}

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
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
}

const loadUser = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}users/me/`, config)
        dispatch({type: USER_LOADED_SUCCESS, user: res.data})
    } catch (err) {

    }
}

export const logout = () => {
    return {type: LOGOUT}
}
