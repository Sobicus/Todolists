import React, {ChangeEvent, useCallback} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {Button, Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {Task} from "./Task";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
}

export const Todolist = React.memo((props: PropsType) => {
        console.log('Todolist called')

        const addTask = useCallback((title: string) => {
            props.addTask(title, props.id);
        }, [props.addTask, props.id])

        const removeTodolist = () => {
            props.removeTodolist(props.id);
        }
        const changeTodolistTitle = useCallback((title: string) => {
            props.changeTodolistTitle(props.id, title)
        }, [props.changeTodolistTitle, props.id])

        const onAllClickHandler = useCallback(() => props.changeFilter("all", props.id), [props.id, props.changeFilter]);
        const onActiveClickHandler = useCallback(() => props.changeFilter("active", props.id), [props.id, props.changeFilter]);
        const onCompletedClickHandler = useCallback(() => props.changeFilter("completed", props.id), [props.id, props.changeFilter]);


        let tasksForTodolist = props.tasks
        if (props.filter === "active") {
            tasksForTodolist = props.tasks.filter(t => t.isDone === false);
        }
        if (props.filter === "completed") {
            tasksForTodolist = props.tasks.filter(t => t.isDone === true);
        }

        return <div>
            <h3><EditableSpan value={props.title} onChange={changeTodolistTitle}/>
                <IconButton onClick={removeTodolist}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <div>
                {

                    props.tasks.map(t => {
                        <Task
                            todolistId={props.id}
                            tasks={t}
                            changeTaskTitle={props.changeTaskTitle}
                            changeTaskStatus={props.changeTaskStatus}
                            removeTask={props.removeTask}
                            key={t.id}
                        />
                        const onClickHandler = () => props.removeTask(t.id, props.id)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked;
                            props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                        }
                        const onTitleChangeHandler = (newValue: string) => {
                            props.changeTaskTitle(t.id, newValue, props.id);
                        }


                        return <div key={t.id} className={t.isDone ? "is-done" : ""}>
                            <Checkbox
                                checked={t.isDone}
                                color="primary"
                                onChange={onChangeHandler}
                            />

                            <EditableSpan value={t.title} onChange={onTitleChangeHandler}/>
                            <IconButton onClick={onClickHandler}>
                                <Delete/>
                            </IconButton>
                        </div>
                    })
                }
            </div>
            <div style={{paddingTop: "10px"}}>
                <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                        onClick={onAllClickHandler}
                        color={'inherit'}
                >All
                </Button>
                <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                        onClick={onActiveClickHandler}
                        color={'primary'}>Active
                </Button>
                <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                        onClick={onCompletedClickHandler}
                        color={'secondary'}>Completed
                </Button>
            </div>
        </div>
    }
)
