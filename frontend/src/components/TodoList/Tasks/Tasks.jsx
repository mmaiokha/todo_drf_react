import s from "./Tasks.module.css";
import Task from "./Task/Task";
import React from "react";

const Tasks = (props) => {
    let taskElements
    props.tasks ? taskElements = props.tasks.map(t => <Task title={t.title}
                                                            desctiption={t.description}
                                                            key={t.id}
                                                            id={t.id}
                                                            deleteTask={props.deleteTask}
    />) : taskElements = "No tasks"

    let inputRef = React.createRef();

    return (
        <div className={s.taskItemWrapper}>
            <div className={s.taskItems}>
                {taskElements}
            </div>
            <div className={s.formAddTask}>
                <input className={s.inputAddTask} ref={inputRef} value={props.inputValue}
                       onChange={() => props.changeInputValue(inputRef.current.value)}/>
                <button className={s.addTaskBtn}
                        onClick={() => props.addTasks(props.taskList, inputRef.current.value)}></button>
            </div>
        </div>
    )
}

export default Tasks;
