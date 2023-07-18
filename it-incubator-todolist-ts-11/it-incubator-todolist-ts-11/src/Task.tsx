import React, {ChangeEvent, useCallback} from "react";
import {Checkbox, IconButton} from "@mui/material";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@mui/icons-material";
import {TaskType} from "./Todolist";

type TasksPropsType = {
    removeTask: (taskId: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    todolistId: string
    tasks: TaskType
}
export const Task = React.memo((props: TasksPropsType) => {
    const onClickHandler = () => props.removeTask(props.tasks.id, props.todolistId)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(props.tasks.id, newIsDoneValue, props.todolistId);
    }
    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.tasks.id, newValue, props.todolistId);
    },[props.changeTaskTitle,props.tasks.id, props.todolistId])


    return <div key={props.tasks.id} className={props.tasks.isDone ? "is-done" : ""}>
        <Checkbox
            checked={props.tasks.isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={props.tasks.title} onChange={onTitleChangeHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>
})