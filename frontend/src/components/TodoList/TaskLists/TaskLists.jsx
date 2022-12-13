import {useOutletContext} from "react-router";
import TaskList from "./TaskList/TaskList";
import s from './TaskLists.module.css'


const TaskLists = () => {
    const {myTodos} = useOutletContext();
    const elements = myTodos.map(e => <TaskList key={e.id} id={e.id} title={e.title}/>)
    return (
        <div className={s.todosWrapper}>
            <h3 className={s.title}>Task Lists</h3>
            <div className={s.todosContainer}>
                {elements}
            </div>
        </div>
    )
}

export default TaskLists;