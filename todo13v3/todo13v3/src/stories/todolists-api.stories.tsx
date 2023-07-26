import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";
import {tasksAPI} from "../api/tasks-api";

export default {
    title: 'API'
}
const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '978ec9e4-88e0-4331-b5bc-a8ba69be02cb'
    }
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        todolistAPI.getTodolist()
            .then(res => setState(res.data)
            )
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const data = {title: 'RELAX TEAM'}
    const title = 'UPDATEEEE NEW ONE'
    useEffect(() => {
        // axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', data, settings)
        todolistAPI.createTodolist(title)
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const deleteIdTodolist = '50cff6c7-6468-4a58-a589-5ab55b0e4f1a'
    useEffect(() => {
        // axios.delete('https://social-network.samuraijs.com/api/1.1/todo-lists/' + deleteIdTodolist, settings)
        todolistAPI.deleteTodolist(deleteIdTodolist)
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '652d0f44-6003-4ac1-b49e-1fb78ede2762'
    const newTitle = {title: 'Тестируем изменения'}
    const newTitleNewUpdate = 'Update To Instance 2.0 Types'
    useEffect(() => {
        // axios.put('https://social-network.samuraijs.com/api/1.1/todo-lists/' + '2e8a4e56-bec2-4d94-9d59-ea5f84096cdd',newTitle,settings)
        todolistAPI.updateTodolist(todolistId, newTitleNewUpdate)
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'cd443f27-b06c-4640-a7ab-c52fa2d929d5'
    useEffect(() => {
        // axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        tasksAPI.getTasks(todolistId)
            .then(res => setState(res.data)
            )
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'cd443f27-b06c-4640-a7ab-c52fa2d929d5'
    const title = 'GYM KNOWLEDGE'
    useEffect(() => {
        // axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        tasksAPI.createTask(todolistId, title)
            .then(res => setState(res.data)
            )
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'cd443f27-b06c-4640-a7ab-c52fa2d929d5'
    const taskId = '6ece5de1-7b9b-4149-9897-bdd3c7f32289'
    const data = {
        title: 'CHANGE TASK',
        completed: true
    }
    const title = 'GYM KNOWLEDGE'
    useEffect(() => {
        // axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        tasksAPI.updateTask(todolistId, taskId, data)
            .then(res => setState(res.data)
            )
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'cd443f27-b06c-4640-a7ab-c52fa2d929d5'
    const taskId = '9b041b94-d3d1-478e-ad60-3e5a1f82dc83'
    useEffect(() => {
        // axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        tasksAPI.deleteTask(todolistId, taskId)
            .then(res => setState(res.data)
            )
    }, [])
    return <div>{JSON.stringify(state)}</div>
}