import {connect} from 'react-redux'
import TodoList from './TodoList'
import {
    addTask,
    changeAddTaskInputValue,
    changeEditTaskInputValue,
    deleteTask,
    editTask,
    setTodoList
} from '../../redux/actions/todo'
import React from 'react'
import {Navigate} from 'react-router'


class TodoListContainer extends React.Component {

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.setTodoList()
        }
    }

    render() {
        return this.props.isAuthenticated ? <TodoList todoList={this.props.state.todo}

                                                      isAuthenticated={this.props.isAuthenticated}

                                                      addInputValue={this.props.addInputValue}
                                                      changeAddInputValue={this.props.changeAddTaskInputValue}
                                                      addTask={this.props.addTask}

                                                      changeEditTaskInputValue={this.props.changeEditTaskInputValue}
                                                      editInputValue={this.props.editInputValue}
                                                      editTask={this.props.editTask}

                                                      deleteTask={this.props.deleteTask}
            />
            : <Navigate to={'/login'}/>
    };
};


const mapStateToProps = (state) => {
    return {
        state: state.todoPage,

        addInputValue: state.todoPage.addTaskInputValue,
        editInputValue: state.todoPage.editTaskInputValue,

        isAuthenticated: state.auth.isAuthenticated,
    }
}


export default connect(mapStateToProps,
    {
        setTodoList,
        changeAddTaskInputValue,
        changeEditTaskInputValue,
        addTask,
        deleteTask,
        editTask
    }
)(TodoListContainer);
