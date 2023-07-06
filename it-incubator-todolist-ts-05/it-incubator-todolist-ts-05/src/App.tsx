import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
type TasksStateType={
    [key:string]:Array<TaskType>
}

function App() {
    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: 'What to learn', filter: 'active'},
        {id: todolistId2, title: 'What to buy', filter: 'completed'}
    ])

    let [tasksObj, setTasksObj] = useState<TasksStateType>({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: "book", isDone: true},
            {id: v1(), title: "milk", isDone: true},]
    })

    function removeTask(todolistId: string, id: string) {
        let copyTasks = tasksObj[todolistId]
        let filteredTasks = copyTasks.filter(t => t.id != id);
        tasksObj[todolistId] = filteredTasks
        setTasksObj({...tasksObj});
    }

    function addTask(todolistId: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let tasks = tasksObj[todolistId]
        let newTasks = [task, ...tasks]
        tasksObj[todolistId] = newTasks
        setTasksObj({...tasksObj});
    }

    function changeStatus(todolistId: string, taskId: string, isDone: boolean) {
        let tasks = tasksObj[todolistId]
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
            setTasksObj({...tasksObj});
        }
    }

    function changeFilter(todolistId: string, value: FilterValuesType) {
        let todolist = todolists.find(el => el.id === todolistId)
        if (todolist)
            todolist.filter = value
        setTodolists([...todolists])
    }

    function removeTodolist(todolistId:string){
        let filteredTodolist=todolists.filter(el=>el.id!==todolistId)
        setTodolists(filteredTodolist)
       delete tasksObj[todolistId]
        setTasksObj({...tasksObj})
    }

    return (
        <div className="App">
            {todolists.map(todolist => {
                let tasksForTodolist = tasksObj[todolist.id];

                if (todolist.filter === "active") {
                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                }
                if (todolist.filter === "completed") {
                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                }
                return <Todolist
                    todolistId={todolist.id}
                    title={todolist.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={todolist.filter}
                    removeTodolist={removeTodolist}
                    key={todolist.id}
                />
            })}
        </div>
    );
}

export default App;
