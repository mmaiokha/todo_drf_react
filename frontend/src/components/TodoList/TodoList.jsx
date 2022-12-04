import s from './TodoList.module.css'
import Tasks from "./Tasks/Tasks";
import React from "react";
import {Navigate} from "react-router";


const TodoList = (props) => {
    return (
        props.isAuthenticated ? <div className={s.todoListWrapper}>
            <div className={s.nav}>
                Tasks
            </div>
            <div className={s.content}>
                <Tasks tasks={props.tasks} taskList={props.taskList} setTodoList={props.setTodoList}
                       changeInputValue={props.changeInputValue} inputValue={props.inputValue} addTasks={props.addTasks} deleteTask={props.deleteTask}/>
            </div>
        </div> : <Navigate to={'/login'}/>
    )
}


export default TodoList;