import s from './TodoList.module.css'
import Tasks from "./Tasks/Tasks";
import React from "react";


const TodoList = (props) => {
    return (
        <div className={s.todoListWrapper}>
            <div className={s.nav}>
                Tasks
            </div>
            <div className={s.content}>
                <Tasks tasks={props.tasks} taskList={props.taskList} setTodoList={props.setTodoList} changeInputValue={props.changeInputValue} inputValue={props.inputValue}/>
            </div>
        </div>
    )
}


export default TodoList;