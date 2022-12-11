import axios from "axios";

const SET_TODO_LIST = 'SET_TODO_LIST'
const SET_TODO_LIST_SUCCESS = 'SET_TODO_LIST_SUCCESS'

const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS'
const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS'

const CHANGE_ADD_TASK_INPUT_VALUE = 'CHANGE_ADD_TASK_INPUT_VALUE'
const CHANGE_EDIT_TASK_INPUT_VALUE = 'CHANGE_EDIT_TASK_INPUT_VALUE'

let initialState = {
    todoList: {tasks: []},
    addTaskInputValue: "",
    editTaskInputValue: '',
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_LIST:
            return {
                ...state, todoList: action.todoList
            }
        case CHANGE_ADD_TASK_INPUT_VALUE:
            return {
                ...state, addTaskInputValue: action.inputValue
            }
        case SET_TODO_LIST_SUCCESS: {
            let stateCopy = {...state, addTaskInputValue: ""}
            stateCopy.todoList.tasks.push(action.data)
            return stateCopy
        }
        case DELETE_TASK_SUCCESS: {
            let stateCopy = {
                ...state
            }
            let indexOfObject = stateCopy.todoList.tasks.findIndex(object => {
                return object.id === action.id;
            });
            stateCopy.todoList.tasks.splice(indexOfObject, 1)
            return stateCopy
        }
        case EDIT_TASK_SUCCESS: {
            let stateCopy = {...state}
            let indexOfObject = stateCopy.todoList.tasks.findIndex(object => {
                return object.id === action.id;
            });
            stateCopy.todoList.tasks[indexOfObject].title = action.newTitle
            stateCopy.editTaskInputValue = ''
            return stateCopy
        }
        case CHANGE_EDIT_TASK_INPUT_VALUE: {
            return {
                ...state, editTaskInputValue: action.inputValue
            }
        }
        default:
            return state
    }

};

export default todoReducer;

export const setTodoList = (todoListId=null) => async dispatch => {
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
    };
    try {
        const res = await axios.get(URL, config)
        dispatch({type: SET_TODO_LIST, todoList: res.data})
    } catch (err) {
        console.log(err)
    }
}

export const addTasks = (todoListId, title, description) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
        }
    };
    const data = {
        task_list: todoListId,
        title: title,
        description: description
    }
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}task/`, data, config)
        dispatch({type: SET_TODO_LIST_SUCCESS, data: res.data})
    } catch (err) {
        console.log(err)
    }
}

export const deleteTask = (taskId) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
        }
    };
    try {
        axios.delete(`${process.env.REACT_APP_API_URL}task/${taskId}/`, config)
        dispatch({type: DELETE_TASK_SUCCESS, id: taskId})
    } catch (err) {
        console.log(err)
    }
}

export const editTask = (taskId, title) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
        }
    };
    const data = {
        title: title,
    }
    try {
        axios.patch(`${process.env.REACT_APP_API_URL}task/${taskId}/`, data, config)
        dispatch({type: EDIT_TASK_SUCCESS, newTitle: title, id: taskId})
    } catch (err) {
        console.log(err)
    }
}

export const changeAddTaskInputValueAC = (inputValue) => {
    return {type: CHANGE_ADD_TASK_INPUT_VALUE, inputValue: inputValue}
}

export const changeEditTaskInputValue = (inputValue) => {
    return {type: CHANGE_EDIT_TASK_INPUT_VALUE, inputValue: inputValue}
}
