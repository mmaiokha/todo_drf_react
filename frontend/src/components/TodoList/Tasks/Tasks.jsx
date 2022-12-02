import s from "./Tasks.module.css";
import Task from "./Task/Task";
import axios from "axios";
import React from "react";

const Tasks = (props) => {
    if (props.tasks) {
        var taskElements = props.tasks.map(t => <Task title={t.title} desctiption={t.description} key={t.id}
                                                      id={t.id} setTodoList={props.setTodoList}/>)
    } else {
        var taskElements = "No tasks"
    }

    let inputRef = React.createRef();

    let fetchTasks = () => {
        axios.get("http://127.0.0.1:8000/api/task_list/1/").then(response => {
            props.setTodoList(response.data)
        })
    }

    let changeInput = () => {
        props.changeInputValue(inputRef.current.value)
    }

    let addTask = () => {
        if (inputRef.current.value) {
            axios.post("http://127.0.0.1:8000/api/task/", {
                task_list: props.taskList,
                title: inputRef.current.value
            }).then(fetchTasks())

        }
    }

    return (
        <div className={s.taskItemWrapper}>
            <div className={s.taskItems}>
                {taskElements}
            </div>
            <div className={s.formAddTask}>
                <input className={s.inputAddTask} ref={inputRef} value={props.inputValue} onChange={changeInput}/>
                <button className={s.addTaskBtn} onClick={addTask}></button>
            </div>
        </div>
    )
}

export default Tasks;
