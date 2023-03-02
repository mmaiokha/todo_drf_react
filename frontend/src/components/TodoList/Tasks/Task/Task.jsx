import s from './Task.module.css'
import React, {useState} from 'react'
import EditModal from "./EditModal/EditModal";


const Task = (props) => {
    const [isActiveModal, setIsActiveModal] = useState(false);

    const toggleIsCompletedTask = () => {
        props.editTask(props.id, null, props.isCompleted ? false : true)
    }

    const showMenu = () => {
        props.id === props.currentActive ? props.toggleIsActiveMenu(null) : props.toggleIsActiveMenu(props.id)
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
                    <div className={s.btnContainer} onClick={showMenu}>
                        <div className={s.btnDot}></div>
                        <div className={s.btnDot}></div>
                        <div className={s.btnDot}></div>
                    </div>
                    <div className={`${s.collapseMenu} ${props.currentActive === props.id ? s.active : ""}`}>
                        <button onClick={() => props.deleteTask(props.id)}>Delete</button>
                        <button onClick={() => {
                            props.changeEditTaskInputValue(props.title)
                            setIsActiveModal(true)
                            props.toggleIsActiveMenu(false)
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
