import axios from 'axios'
import React, {useEffect, useState} from 'react'

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
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
            .then(res => setState(res.data)
            )
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const data = {title: 'RELAX TEAM'}
    useEffect(() => {
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', data, settings).then(res =>
            setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const deleteIdTodolist = '73d72d39-cf70-4088-ac49-8456886ecb4f'
    useEffect(() => {
        axios.delete('https://social-network.samuraijs.com/api/1.1/todo-lists/' + deleteIdTodolist, settings)
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const newTitle= {title:'Тестируем изменения'}
    useEffect(() => {
        axios.put('https://social-network.samuraijs.com/api/1.1/todo-lists/' + '53618296-90e7-48fc-a32e-3a7b8ec168c5',newTitle,settings)
            .then(res=>setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

