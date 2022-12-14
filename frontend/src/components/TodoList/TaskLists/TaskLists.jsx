import TaskList from "./TaskList/TaskList";
import s from './TaskLists.module.css'


const TaskLists = (props) => {
    const elements = props.myTodos.map(e => <TaskList key={e.id}
                                                id={e.id}
                                                title={e.title}
                                                tasksLengtn={e.count_tasks}
                                                completedTasksLengtn={e.count_completed_tasks}
    />)
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