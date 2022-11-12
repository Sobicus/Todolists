import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {todolistAPI} from "../api/todolist-api";
import {taskAPI} from "../api/task-api";

export default {
    title: 'API TASK'
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
        const todolistId ='fcee88ea-d979-490d-a04a-94c17474a919'
        taskAPI.getTasks(todolistId)
            .then(res => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId ='fcee88ea-d979-490d-a04a-94c17474a919'
        taskAPI.createTask(todolistId,'WHAT`S UPPPP!!!!')
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const tododlistId = 'fcee88ea-d979-490d-a04a-94c17474a919'
        const taskId = '2b395330-fe56-4273-a57f-2720e471bd02'
        taskAPI.deleteTask(tododlistId, taskId)
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const tododlistId = 'fcee88ea-d979-490d-a04a-94c17474a919'
        const taskId = '2b395330-fe56-4273-a57f-2720e471bd02'
        taskAPI.updateTask(tododlistId,taskId, 'UNDECEMBERSHEEE')
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}