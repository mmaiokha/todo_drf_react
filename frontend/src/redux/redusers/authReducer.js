import {
    PASSWORD_CHANGE,
    USERNAME_CHANGE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    USER_LOADED_SUCCESS,
} from '../actions/auth'

let initialStore = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: localStorage.getItem('access') ? true : false,
    user: null,
    username: '',
    password: ''
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
            localStorage.setItem('access', action.access)
            localStorage.setItem('refresh', action.refresh)
            return {
                ...store,
                access: action.access,
                refresh: action.refresh,
                isAuthenticated: true,
                password: "",
                username: ""
            }

        case LOGIN_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...store,
                isAuthenticated: false,
                access: null,
                refresh: null,
                password: '',
                username: '',
                user: null
            }
        case LOGOUT:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...store,
                isAuthenticated: false,
                access: null,
                refresh: null,
                password: '',
                username: '',
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


