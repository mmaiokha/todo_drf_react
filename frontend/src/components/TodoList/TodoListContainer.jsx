import {connect} from "react-redux";
import TodoList from "./TodoList";
import {
    addTasks,
    changeAddTaskInputValueAC,
    changeEditTaskInputValue,
    deleteTask,
    editTask,
    setTodoList
} from "../../redux/todoReducer";
import React from "react";
import {Navigate} from "react-router";


class TodoListContainer extends React.Component {

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.setTodoList()
        }
    }

    getTasks = () => {
        if (this.props.state.todoList) {
            return this.props.state.todoList.tasks
        } else {
            return undefined
        }
    }

    getTaskList = () => {
        if (this.props.state.todoList) {
            return this.props.state.todoList
        } else {
            return undefined
        }
    }


    render() {
        return this.props.isAuthenticated ? <TodoList tasks={this.getTasks()} taskList={this.getTaskList()}
                                                      changeInputValue={this.props.changeAddTaskInputValueAC}
                                                      changeEditTaskInputValue={this.props.changeEditTaskInputValue}
                                                      inputValue={this.props.inputValue}
                                                      editTaskInputValue={this.props.editTaskInputValue}
                                                      isAuthenticated={this.props.isAuthenticated}
                                                      addTasks={this.props.addTasks}
                                                      deleteTask={this.props.deleteTask}
                                                      editTask={this.props.editTask}
            />
            : <Navigate to={'/login'}/>
    };
};


const mapStateToProps = (state) => {
    return {
        state: state.todoPage,
        inputValue: state.todoPage.addTaskInputValue,
        editTaskInputValue: state.todoPage.editTaskInputValue,
        isAuthenticated: state.auth.isAuthenticated,
    }
}


export default connect(mapStateToProps,
    {
        setTodoList,
        changeAddTaskInputValueAC,
        changeEditTaskInputValue,
        addTasks,
        deleteTask,
        editTask
    }
)(TodoListContainer);