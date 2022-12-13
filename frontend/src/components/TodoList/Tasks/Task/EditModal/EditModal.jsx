import s from "./EditModal.module.css";
import React from "react";

const EditModal = (props) => {
    let editInputRef = React.createRef()
    return (
        <div className={`${s.modal} ${props.isActiveModal ? s.activeModal : ''}`} onClick={() => props.setIsActiveModal(false)}>
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                <div className={s.modalHeader}>
                    <h4 className={s.modalTitle}>Edit task</h4>
                    <button className={s.modalCloseBtn} onClick={() => props.setIsActiveModal(false)}>×</button>

                </div>
                <div>
                    <input className={s.modalInput} placeholder='Title' value={props.editValue} onChange={() => {
                        props.changeEditTaskInputValue(editInputRef.current.value)
                    }} ref={editInputRef}/>
                    <button className={s.modalBtn} onClick={() => {
                        props.editTask(props.id, props.editValue)
                        props.setIsActiveModal(false)}}
                    >Save changes</button>
                    <button className={s.modalBtn}
                            onClick={() => props.setIsActiveModal(false)}
                    >Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EditModal;
