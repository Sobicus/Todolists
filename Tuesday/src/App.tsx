import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";
import {v1} from 'uuid';

export type FilterValueType = "all" | "completed" | "active"

function App() {

    const todoListTitle_1: string = "Monday"

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: true},
        {id: v1(), title: "Angular", isDone: false},
    ]);
    let [filter, setFilter] = useState<FilterValueType>("all")

    function removeTask(id: string) {
        let filterTasks = tasks.filter(t => t.id !== id)
        setTasks(filterTasks)
    }

    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskId)
        console.log('changeStatus task', task)
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks])
    }

    let taskForTodoList = tasks
    if (filter === "completed") {
        taskForTodoList = tasks.filter(t => t.isDone === true)
    }
    if (filter === "active") {
        taskForTodoList = tasks.filter(t => t.isDone === false)
    }

    //UI
    return (
        <div className="App">
            <TodoList
                title={todoListTitle_1}
                tasks={taskForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={filter}
            />
        </div>
    );
}

export default App;
