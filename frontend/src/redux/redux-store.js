import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import todoReducer from './todoReducer'
import authReducer from './authReducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const reducers = combineReducers({
        todoPage: todoReducer,
        auth: authReducer,

    }
);


const store = createStore(reducers, composedEnhancer);
window.store = store;


export default store;
