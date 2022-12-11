import s from './Tasks.module.css'
import Task from './Task/Task'
import React from 'react'
import {useOutletContext} from "react-router";


const Tasks = () => {
    const {todoList, addInputValue, deleteTask, editTask, editInputValue, changeEditTaskInputValue, changeAddInputValue, addTask} = useOutletContext()
    let taskElements
    todoList.tasks ? taskElements = todoList.tasks.map(t => <Task key={t.id}
                                                                              id={t.id}
                                                                              title={t.title}
                                                                              desctiption={t.description}

                                                                              deleteTask={deleteTask}
                                                                              editTask={editTask}
                                                                              editValue={editInputValue}
                                                                              changeEditTaskInputValue={changeEditTaskInputValue}
    />) : taskElements = "No tasks"

    let inputRef = React.createRef();

    return (
        <div className={s.taskItemWrapper}>
            <div>
                <h3 className={s.tlTitle}>{todoList.title}</h3>
                <div className={s.taskItems}>
                    {taskElements}
                </div>
            </div>
            <div className={s.formAddTask}>
                <input className={s.inputAddTask}
                       ref={inputRef}
                       value={addInputValue}
                       onChange={() => changeAddInputValue(inputRef.current.value)}
                />
                <button className={s.addTaskBtn}
                        onClick={() => addTask(todoList.id, inputRef.current.value)}></button>
            </div>
        </div>
    )
}


export default Tasks;
