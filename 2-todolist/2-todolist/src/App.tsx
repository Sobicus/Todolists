import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed'
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactNative", isDone: false}
    ])

    let [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (id: number) => {
        return setTasks(tasks.filter(task => task.id != id))
    }

    let tasksForTodolist = tasks
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(el => el.isDone === true)
    }
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(el => el.isDone === false)
    }
    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }
    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForTodolist} removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
