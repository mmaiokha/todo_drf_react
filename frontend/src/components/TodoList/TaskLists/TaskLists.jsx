import {useOutletContext} from "react-router";
import TaskList from "./TaskList/TaskList";

const TaskLists = () => {
    const {myTodos} = useOutletContext();
    const elements = myTodos.map(e => <TaskList key={e.id} id={e.id} title={e.title} />)
    return (
        <div>
            Task Lists
            {elements}
        </div>
    )
}

export default TaskLists;