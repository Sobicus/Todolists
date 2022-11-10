import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

// const settings = {
//     withCredentials: true,
//     headers: {
//         'API-KEY': '978ec9e4-88e0-4331-b5bc-a8ba69be02cb'
//     }
// }

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then(res => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist('WHAT`S UPPPP!!!!')
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const tododlistId = '0cde422e-2336-4ee1-aa94-26a31e73d116'
        todolistAPI.deleteTodolist(tododlistId)
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const tododlistId = '0cde422e-2336-4ee1-aa94-26a31e73d116'
        todolistAPI.updateTodolist(tododlistId, 'UNDECEMBER')
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}