import React from 'react'
import Tasks from "./Tasks";
import {connect} from "react-redux";
import {WithRouter} from "../../HOCs/WithRouter";
import {
    addTask,
    changeAddTaskInputValue,
    changeEditTaskInputValue, deleteTask, editTask,
    setMyTodos,
    setTodo
} from "../../../redux/actions/todo";


class TasksContainer extends React.Component {
    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.setTodo(this.props.router.params.id)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.router.params.id !== prevProps.router.params.id) {
            this.props.setTodo(this.props.router.params.id)
        }
    }

    render() {
        return <Tasks todoList={this.props.state.todo}

                      isAuthenticated={this.props.isAuthenticated}

                      addInputValue={this.props.addInputValue}
                      changeAddInputValue={this.props.changeAddTaskInputValue}
                      addTask={this.props.addTask}

                      changeEditTaskInputValue={this.props.changeEditTaskInputValue}
                      editInputValue={this.props.editInputValue}
                      editTask={this.props.editTask}

                      deleteTask={this.props.deleteTask}/>
    }
}


const mapStateToProps = (state) => {
    return {
        state: state.todoPage,

        addInputValue: state.todoPage.addTaskInputValue,
        editInputValue: state.todoPage.editTaskInputValue,

        isAuthenticated: state.auth.isAuthenticated,
    }
}

const WithRouterTasksContainer = WithRouter(TasksContainer)

export default connect(mapStateToProps,
    {
        setTodo,
        setMyTodos,
        changeAddTaskInputValue,
        changeEditTaskInputValue,
        addTask,
        deleteTask,
        editTask
    })(WithRouterTasksContainer)

