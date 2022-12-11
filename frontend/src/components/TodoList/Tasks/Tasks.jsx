import s from "./Tasks.module.css";
import Task from "./Task/Task";
import React from "react";

const Tasks = (props) => {
    let taskElements
    props.todoList.tasks ? taskElements = props.todoList.tasks.map(t => <Task key={t.id}
                                                                              id={t.id}
                                                                              title={t.title}
                                                                              desctiption={t.description}

                                                                              deleteTask={props.deleteTask}
                                                                              editTask={props.editTask}
                                                                              editValue={props.editInputValue}
                                                                              changeEditTaskInputValue={props.changeEditTaskInputValue}
    />) : taskElements = "No tasks"

    let inputRef = React.createRef();

    return (
        <div className={s.taskItemWrapper}>
            <div>
                <h3 className={s.tlTitle}>{props.todoList.title}</h3>
                <div className={s.taskItems}>
                    {taskElements}
                </div>
            </div>
            <div className={s.formAddTask}>
                <input className={s.inputAddTask}
                       ref={inputRef}
                       value={props.addInputValue}
                       onChange={() => props.changeAddInputValue(inputRef.current.value)}
                />
                <button className={s.addTaskBtn}
                        onClick={() => props.addTask(props.todoList.id, inputRef.current.value)}></button>
            </div>
        </div>
    )
}

export default Tasks;
