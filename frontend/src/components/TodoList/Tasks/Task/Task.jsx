import s from './Task.module.css'
import React, {useState} from 'react'
import EditModal from "./EditModal/EditModal";


const Task = (props) => {
    const [isActive, setIsActive] = useState(false);
    let toggleIsActiveMenu = () => {
        setIsActive(current => !current);
    }
    const [isActiveModal, setIsActiveModal] = useState(false);

    const toggleIsCompletedTask = () => {
        props.editTask(props.id, null, props.isCompleted ? false : true)
    }

    return (
        <>
            <div className={s.taskItem}>
                <div>

                    <label className={s.checkboxContainer}>
                        <h3 className={`${s.title} ${props.isCompleted ? s.completed : ''}`}>{`${props.title} `}</h3>
                        <input type='checkbox'
                               onChange={toggleIsCompletedTask}
                               defaultChecked={props.isCompleted ? true : false}/>
                        <span className={s.checkmark}></span>
                    </label>
                </div>
                <div>
                    <div className={s.btnContainer} onClick={toggleIsActiveMenu}>
                        <div className={s.btnDot}></div>
                        <div className={s.btnDot}></div>
                        <div className={s.btnDot}></div>
                    </div>
                    <div className={`${s.collapseMenu} ${isActive ? s.active : ""}`}>
                        <button onClick={() => props.deleteTask(props.id)}>Delete</button>
                        <button onClick={() => {
                            props.changeEditTaskInputValue(props.title)
                            setIsActiveModal(true)
                            setIsActive(false)
                        }}>edit
                        </button>
                    </div>
                </div>
            </div>

            <EditModal id={props.id}
                       isActiveModal={isActiveModal}
                       setIsActiveModal={setIsActiveModal}
                       editTask={props.editTask}
                       editValue={props.editValue}
                       changeEditTaskInputValue={props.changeEditTaskInputValue}
            />
        </>
    )
}


export default Task;
