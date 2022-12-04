import {connect} from "react-redux";
import TodoList from "./TodoList";
import {addTasks, changeAddTaskInputValueAC, deleteTask, setTodoList} from "../../redux/todoReducer";
import React from "react";


class TodoListContainer extends React.Component {

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.setTodoList(1)
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
            return this.props.state.todoList.id
        } else {
            return undefined
        }
    }


    render() {
        return (
            <TodoList tasks={this.getTasks()} taskList={this.getTaskList()} setTodoList={this.props.setTodoList}
                      changeInputValue={this.props.changeAddTaskInputValueAC} inputValue={this.props.inputValue}
                      isAuthenticated={this.props.isAuthenticated} addTasks={this.props.addTasks} deleteTask={this.props.deleteTask}/>
        )
    };
};


const mapStateToProps = (state) => {
    return {
        state: state.todoPage,
        inputValue: state.todoPage.addTaskInputValue,
        isAuthenticated: state.auth.isAuthenticated,
    }
}


export default connect(mapStateToProps,
    {
        setTodoList,
        changeAddTaskInputValueAC,
        addTasks,
        deleteTask
    }
)(TodoListContainer);