import s from './Task.module.css'
import {useState} from "react";
import axios from "axios";


const Task = (props) => {
    const [isActive, setIsActive] = useState(false);

    let showMenu = () => {
        setIsActive(current => !current);
    }

    let fetchTasks = () => {
        axios.get("http://127.0.0.1:8000/api/task_list/1/").then(response => {
            props.setTodoList(response.data)
        })
    }

    let deleteTask = () => {
        axios.delete(`http://127.0.0.1:8000/api/task/${props.id}/`).then(fetchTasks())
    }

    return (

        <div className={s.taskItem}>
            <div>
                <h3 className={s.title}>{props.title}</h3>
                <p className={s.description}>{props.description}</p>
            </div>
            <div>
                <button className={s.btn} onClick={showMenu}></button>
                <div className={`${s.collapseMenu} ${isActive ? s.active : ""}`}>
                    <button onClick={deleteTask}>Delete</button>
                    <button>edit</button>
                </div>
            </div>

        </div>
    )
}

export default Task;
