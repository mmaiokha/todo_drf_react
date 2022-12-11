import s from './Task.module.css'
import React, {useState} from "react";

const Task = (props) => {
    const [isActive, setIsActive] = useState(false);
    let showMenu = () => {
        setIsActive(current => !current);
    }

    const [isActiveModal, setIsActiveModal] = useState(false);
    let showModal = () => {
        setIsActiveModal(current => !current)
    }

    let editInputRef = React.createRef()

    let editTask = () => {
        props.editTask(props.id, props.editValue)
    }

    return (
        <>
            <div className={s.taskItem}>
                <div>
                    <h3 className={s.title}>{props.title}</h3>
                    <p className={s.description}>{props.description}</p>
                </div>
                <div>
                    <button className={s.btn} onClick={showMenu}></button>
                    <div className={`${s.collapseMenu} ${isActive ? s.active : ""}`}>
                        <button onClick={() => props.deleteTask(props.id)}>Delete</button>
                        <button onClick={() => {
                            props.changeEditTaskInputValue(props.title)
                            showModal()
                        }}>edit
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${s.modal} ${isActiveModal ? s.activeModal : ''}`} onClick={showModal}>
                <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                    <div className={s.modalHeader}>
                        <h4 className={s.modalTitle}>Edit task</h4>
                        <button className={s.modalCloseBtn} onClick={showModal}>×</button>

                    </div>
                    <div>
                        <input className={s.modalInput} placeholder='Title' value={props.editValue} onChange={() => {
                            props.changeEditTaskInputValue(editInputRef.current.value)
                        }} ref={editInputRef}/>
                        <button className={s.modalBtn} onClick={editTask}>Save changes</button>
                        <button className={s.modalBtn} onClick={showModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task;
