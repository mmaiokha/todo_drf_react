import axios from 'axios'

export const SET_TODO_LIST = 'SET_TODO_LIST'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'

export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS'
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS'

export const CHANGE_ADD_TASK_INPUT_VALUE = 'CHANGE_ADD_TASK_INPUT_VALUE'
export const CHANGE_EDIT_TASK_INPUT_VALUE = 'CHANGE_EDIT_TASK_INPUT_VALUE'

export const setTodoList = (todoListId = null) => async dispatch => {
    let URL = `${process.env.REACT_APP_API_URL}task_list/current/`
    if (todoListId) {
        URL = `${process.env.REACT_APP_API_URL}task_list/${todoListId}/`
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }
    try {
        const res = await axios.get(URL, config)
        dispatch({type: SET_TODO_LIST, todo: res.data})
    } catch (err) {
        console.log(err)
    }
};

export const addTask = (todoListId, title, description) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
        }
    }
    const data = {
        task_list: todoListId,
        title: title,
        description: description
    }
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}task/`, data, config)
        dispatch({type: ADD_TASK_SUCCESS, data: res.data})
    } catch (err) {
        console.log(err)
    }
};

export const deleteTask = (taskId) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
        }
    }
    try {
        axios.delete(`${process.env.REACT_APP_API_URL}task/${taskId}/`, config)
        dispatch({type: DELETE_TASK_SUCCESS, id: taskId})
    } catch (err) {
        console.log(err)
    }
};

export const editTask = (taskId, title) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
        }
    }
    const data = {
        title: title,
    }
    try {
        axios.patch(`${process.env.REACT_APP_API_URL}task/${taskId}/`, data, config)
        dispatch({type: EDIT_TASK_SUCCESS, newTitle: title, id: taskId})
    } catch (err) {
        console.log(err)
    }
};

export const changeAddTaskInputValue = (inputValue) => {
    return {type: CHANGE_ADD_TASK_INPUT_VALUE, inputValue: inputValue}
};

export const changeEditTaskInputValue = (inputValue) => {
    return {type: CHANGE_EDIT_TASK_INPUT_VALUE, inputValue: inputValue}
};
