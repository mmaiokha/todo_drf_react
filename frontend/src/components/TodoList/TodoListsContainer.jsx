import TodoList from './TodoList'
import React from 'react'
import {Navigate} from 'react-router'
import {connect} from "react-redux";

const TodoListsContainer = (props) => {
    return props.isAuthenticated ? <TodoList/> : <Navigate to={'/login'}/>
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, {})(TodoListsContainer)