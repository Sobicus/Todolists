import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState('')

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode == 13) {
            addTaskHandler()
        }
    }
    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onAllClickHandler = () => {
        props.changeFilter('all')
    }
    const onActiveClickHandler = () => {
        props.changeFilter('active')
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed')
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={title}
                onKeyPress={onKeyPressHandler}
                onChange={onNewTitleChangeHandler}/>
            <button
                disabled={title.length < 1}
                onClick={addTaskHandler}
            >+
            </button>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onRemoveTaskHandler = () => {
                        props.removeTask(t.id)
                    }
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onRemoveTaskHandler}>x
                        </button>
                    </li>
                })
                }
        </ul>
        <div>
            <button onClick={onAllClickHandler}>
                All
            </button>
            <button onClick={onActiveClickHandler}>
                Active
            </button>
            <button onClick={onCompletedClickHandler}>
                Completed
            </button>
        </div>
    </div>
}
