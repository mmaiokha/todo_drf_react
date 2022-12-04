import s from './TodoList.module.css'
import '../../App.css'
import Tasks from "./Tasks/Tasks";
import React from "react";
import {NavLink} from "react-router-dom";


const TodoList = (props) => {
    return (
        <div className='containerWrapper'>
            <div className='nav'>
                <NavLink to={''} className={({isActive}) => (isActive ? 'activeLink' : "") + " " + 'linkItem'}>Tasks</NavLink>
            </div>
            <div className='content'>
                <Tasks tasks={props.tasks} taskList={props.taskList}
                       changeInputValue={props.changeInputValue} inputValue={props.inputValue} addTasks={props.addTasks}
                       deleteTask={props.deleteTask}/>
            </div>
        </div>
    )
}


export default TodoList;