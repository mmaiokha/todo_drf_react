import {connect} from 'react-redux'
import TodoList from './TodoList'
import {
    addTask,
    changeAddTaskInputValue,
    changeEditTaskInputValue,
    deleteTask,
    editTask, setMyTodos,
    setTodo
} from '../../redux/actions/todo'
import React from 'react'
import {Navigate} from 'react-router'

class TodoListContainer extends React.Component {

    componentDidMount() {
        console.log(123)
        if (this.props.isAuthenticated) {
            this.props.setMyTodos()
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

                                                      myTodos={this.props.state.myTodos}
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
        setTodo,
        setMyTodos,
        changeAddTaskInputValue,
        changeEditTaskInputValue,
        addTask,
        deleteTask,
        editTask
    }
)(TodoListContainer);
