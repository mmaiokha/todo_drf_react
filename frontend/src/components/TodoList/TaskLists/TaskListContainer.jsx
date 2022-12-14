import React from 'react'
import TaskLists from "./TaskLists";
import {connect} from "react-redux";
import {setMyTodos} from "../../../redux/actions/todo";

class TaskListsContainer extends React.Component {
    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.setMyTodos()
        }
    }

    render() {
        return <TaskLists myTodos={this.props.state.myTodos} />
    }
}


const mapStateToProps = (state) => {
    return {
        state: state.todoPage,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, {
    setMyTodos
})(TaskListsContainer)