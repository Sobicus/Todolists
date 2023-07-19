import {Task} from "./Task";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Task component',
    component: Task
}
const changeTaskStatusCallback = action('Status changed')
const changeTaskTitleCallback=action('Title changed')
const removeTaskCallback=action('Task removed')
export const TaskBaseExample = (props: any) => {
    return <>
        <Task
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={removeTaskCallback}
            task={{id: '1', isDone: true, title: 'css'}}
            todolistId={'todolist1'}
        />
        <Task
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={removeTaskCallback}
            task={{id: '1', isDone: false, title: 'html'}}
            todolistId={'todolist2'}
        />
    </>
}