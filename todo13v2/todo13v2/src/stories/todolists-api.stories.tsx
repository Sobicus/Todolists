import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '453183b0-819e-4574-8e19-e840c50027c6'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist('GO GO GO')
            .then((res) => {
                setState(res.data.data.item)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'dd2663b9-a161-4e72-8e14-e3249d1868ea'
        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'dd2663b9-a161-4e72-8e14-e3249d1868ea'
        todolistAPI.updateTodolist(todolistId, 'YES YES YES').then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'fcee88ea-d979-490d-a04a-94c17474a919'
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'fcee88ea-d979-490d-a04a-94c17474a919'
        const newTask = '!!!!!!!!!!!!!!!!!!!!!!!!!!'
        todolistAPI.createTask(todolistId, newTask).then((res)=>{setState(res.data)})
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'fcee88ea-d979-490d-a04a-94c17474a919'
        const taskId = '28a41c31-bba9-49ce-b329-bfd8888b53c1'
        const newTaskTitle = 'QWERTY'
        //---
       /* const description= 'required(string)'
        const completed= true
        const status = 1
        const priority = 1
        const startDate = 'required(datetime)'
        const deadline = 'required(datetime)'*/
        //---
        todolistAPI.updateTask(todolistId, taskId, newTaskTitle, /*description,completed,status,priority,startDate,deadline*/)
            .then((res)=>{
                console.log(res.data)
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

// .then((res) => {
//     setState(res.data)
// })