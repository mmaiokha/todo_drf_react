import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import todoReducer from './redusers/todoReducer'
import authReducer from './redusers/authReducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const reducers = combineReducers({
        todoPage: todoReducer,
        auth: authReducer,

    }
);


const store = createStore(reducers, composedEnhancer);
window.store = store;


export default store;
