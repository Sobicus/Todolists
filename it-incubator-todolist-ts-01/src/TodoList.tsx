import React, {ChangeEvent, useState} from 'react';
import {FilterValueType} from "./App";
import {AddItemForm} from "./components/AddItemForm";
import {EdiTableSpan} from "./components/EdiTableSpan";
import {Button, Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistID: string, id: string) => void
    changeFilter: (todolistID: string, value: FilterValueType) => void
    addTask: (todolistID: string, title: string) => void
    changeTaskStatus: (todolistID: string, taskId: string, isDone: boolean) => void
    filter: FilterValueType
    todoListID: string
    removeTodolist: (todolistID: string) => void
    editTodolist: (todoListId: string, newTitle: string) => void
    editTask:(todolistId:string, taskID:string, newTitle:string)=>void
}
export type  TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const TodoList = (props: TodoListPropsType) => {
    const onAllClickHandler = () => {
        props.changeFilter(props.todoListID, "all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter(props.todoListID, "active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter(props.todoListID, "completed")
    }
    const removeTodolistHandler = () => {
        props.removeTodolist(props.todoListID)
    }

    const addTaskHandler = (newTitle: string) => {
        props.addTask(props.todoListID, newTitle)
    }

    const editTodolistHandler = (newTitle: string) => {
        props.editTodolist(props.todoListID, newTitle)
    }

    const editTaskHandler = (tID: string, newTitle: string) => {
        props.editTask(props.todoListID, tID, newTitle)
    }

    return (
        <div>
            <h3>
                <EdiTableSpan title={props.title} callBack={editTodolistHandler}/>
                <IconButton aria-label="delete">
                    <Delete onClick={removeTodolistHandler}/>
                </IconButton>
                {/*<button onClick={removeTodolistHandler}>x</button>*/}
            </h3>
            <AddItemForm callBack={addTaskHandler}/>
            <ul>
                {
                    props.tasks.map((t) => {
                        const onRemoveHandler = () => {
                            props.removeTask(props.todoListID, t.id)
                        }
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(props.todoListID, t.id, e.currentTarget.checked)
                        }
                        return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <Checkbox onChange={onChangeHandler}
                                      checked={t.isDone}
                            />

                            {/*<input*/}
                            {/*    type="checkbox"*/}
                            {/*    onChange={onChangeHandler}*/}
                            {/*    checked={t.isDone}*/}
                            {/*/>*/}
                            <EdiTableSpan title={t.title} callBack={(newTitle)=>editTaskHandler(t.id, newTitle)}/>
                            <IconButton aria-label="delete">
                                <Delete onClick={onRemoveHandler}/>
                            </IconButton>

                            {/*<button className="button-delete" onClick={onRemoveHandler}>X</button>*/}
                        </li>
                    })
                }
            </ul>
            <div>
                <Button variant={props.filter === 'all' ? "outlined" : "contained"} color="success"  onClick={onAllClickHandler}>All</Button>
                <Button variant={props.filter === 'active' ? "outlined" : "contained"} color="error" onClick={onActiveClickHandler}>Active</Button>
                <Button variant={props.filter === 'completed' ? "outlined" : "contained"} color="secondary" onClick={onCompletedClickHandler}>Completed</Button>

                {/*<button className={props.filter === "all" ? "active-filter" : ""} onClick={onAllClickHandler}>All</button>*/}
                {/*<button className={props.filter === "active" ? "active-filter" : ""} onClick={onActiveClickHandler}>Active</button>*/}
                {/*<button className={props.filter === "completed" ? "active-filter" : ""} onClick={onCompletedClickHandler}>Completed</button>*/}
            </div>
        </div>
    )
}
