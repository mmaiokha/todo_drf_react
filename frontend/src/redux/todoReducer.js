import axios from "axios";

const SET_TODO_LIST = 'SET_TODO_LIST'
const CHANGE_ADD_TASK_INPUT_VALUE = "CHANGE_ADD_TASK_INPUT_VALUE"

let initialState = {
    todoList: [],
    addTaskInputValue: ""
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_LIST: {
            return {
                ...state, todoList: action.todoList
            }
        }
        case CHANGE_ADD_TASK_INPUT_VALUE: {
            return {
                ...state, addTaskInputValue: action.inputValue
            }
        }
        default:
            return state
    }

};

export default todoReducer;

export const setTodoList = (todoListId) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}task_list/${todoListId}/`, config)
        dispatch({type: SET_TODO_LIST, todoList: res.data})
    } catch (err) {
        console.log(err)
    }

}

export const changeAddTaskInputValueAC = (inputValue) => {
    return {type: CHANGE_ADD_TASK_INPUT_VALUE, inputValue: inputValue}
}