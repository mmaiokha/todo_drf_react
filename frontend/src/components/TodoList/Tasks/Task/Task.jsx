import s from './Task.module.css'
import {useState} from "react";

const Task = (props) => {
    const [isActive, setIsActive] = useState(false);

    let showMenu = () => {
        setIsActive(current => !current);
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
                    <button onClick={() => props.deleteTask(props.id)}>Delete</button>
                    <button>edit</button>
                </div>
            </div>
        </div>
    )
}

export default Task;
