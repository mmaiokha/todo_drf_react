import s from './TodoList.module.css'
import '../../App.css'
import Tasks from "./Tasks/Tasks";
import React from "react";
import {NavLink} from "react-router-dom";


const TodoList = (props) => {
    return (
        <div className='containerWrapper'>
            <div className='nav'>
                <NavLink to={''} className={({isActive}) => (isActive ? 'activeLink' : "") + " " + 'linkItem'}>
                    Current
                </NavLink>
                <NavLink to={'task_list'} className={({isActive}) => (isActive ? 'activeLink' : "") + " " + 'linkItem'}>
                    Task list
                </NavLink>
            </div>
            <div className='content'>
                <Tasks todoList={props.todoList}

                       changeAddInputValue={props.changeAddInputValue}
                       addInputValue={props.addInputValue}
                       addTask={props.addTask}

                       changeEditTaskInputValue={props.changeEditTaskInputValue}
                       editInputValue={props.editInputValue}
                       editTask={props.editTask}

                       deleteTask={props.deleteTask}
                />
            </div>
        </div>
    )
}


export default TodoList;