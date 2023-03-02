import TodoList from './TodoList'
import React, {useEffect} from 'react'
import {Navigate} from 'react-router'
import {connect} from "react-redux";
import {checkUserAuth} from "../../redux/actions/auth";


const TodoListsContainer = (props) => {
    useEffect(() => props.checkUserAuth())

    return props.isAuthenticated ? <TodoList/> : <Navigate to={'/login'}/>
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}

export default connect(mapStateToProps, {checkUserAuth})(TodoListsContainer)