import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'

}

export const GetTodolists = () => {
    const [state, setState] = useState<any>()
    useEffect(() => {
        todolistAPI.GetTodolists().then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.CreateTodolist('TODOLISTISHEEEEEEEEE')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'f09a3127-c8c4-4918-a445-b64d95566d20'
    useEffect(() => {
       todolistAPI.DeleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'ecacc6ac-6e5f-4581-8965-e1cba469ad74'
    useEffect(() => {
        todolistAPI.updateTodolist(todolistId, "NEW_TODOLISTISHE")
            .then((res) => {
                debugger
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
