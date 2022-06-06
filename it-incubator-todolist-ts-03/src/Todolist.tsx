import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {
    const [newTitle, setNewTitle] = useState('')
    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }
    // const allChangeFilterHandler = () => {
    //     props.changeFilter("all")
    // }
    //
    // const activeChangeFilterHandler = () => {
    //     props.changeFilter("active")
    // }
    // const completedChangeFilterHandler = () => {
    //     props.changeFilter("completed")
    // }
    const allChangeFilterHandler = (value:FilterValuesType) => {
        props.changeFilter(value)
    }
    const removeTaskHandler=(tID:string)=>{
        props.removeTask(tID)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={addTaskHandler}>+</button>
            <Button name={'+'} callBack={addTaskHandler}/>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    // const removeTaskHandler=()=>{
                    //     props.removeTask(t.id)
                    // }

                    return(
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <Button name={'X'} callBack={()=>removeTaskHandler(t.id)}/>
                            <button onClick={()=>removeTaskHandler(t.id)}>x</button>
                        </li>
                    )
                })
            }
        </ul>
        <div>
            {/*<button onClick={allChangeFilterHandler}>All</button>*/}
            {/*<button onClick={activeChangeFilterHandler}>Active</button>*/}
            {/*<button onClick={completedChangeFilterHandler}>Completed</button>            */}
            <button onClick={()=>allChangeFilterHandler('all')}>All</button>
            <button onClick={()=>allChangeFilterHandler('active')}>Active</button>
            <button onClick={()=>allChangeFilterHandler('completed')}>Completed</button>
            <Button name={'all'} callBack={()=>allChangeFilterHandler('all')}/>
            <Button name={'active'} callBack={()=>allChangeFilterHandler('active')}/>
            <Button name={'completed'} callBack={()=>allChangeFilterHandler('completed')}/>
        </div>
    </div>
}
