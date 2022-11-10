import axios from 'axios'
import {CreateTodolist, DeleteTodolist, GetTodolists} from "../stories/todolists-api.stories";

// const settings = {
//     withCredentials: true,
//     headers: {
//         // Не забываем заменить API-KEY на собственный
//         'API-KEY': '978ec9e4-88e0-4331-b5bc-a8ba69be02cb'
//     },
// }

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '978ec9e4-88e0-4331-b5bc-a8ba69be02cb'
    },
})

export const todolistAPI = {
    getTodolists() {
        const promise = instance.get<Array<TodolistType>>(
            '/todo-lists/'
        )
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>(
            `/todo-lists/`,
            {title: title},
        )
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType>(
            `/todo-lists/${todolistId}`,
        )
        return promise
    },
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType>(
            `todo-lists/${todolistId}`,
            {title: title},
        )
        return promise
    },
}
type TodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}
type CreateTodolistResponseType = {
    data:
        {
            item: TodolistType
        },
    messages: Array<string>,
    fieldsErrors: Array<string>,
    resultCode: number
}

type UpdateTodolistType = {
    data: {},
    messages: Array<string>,
    fieldsErrors: Array<string>,
    resultCode: number
}
type DeleteTodolistType = {
    data: {},
    messages: Array<string>,
    fieldsErrors: Array<string>,
    resultCode: number
}

type ResponseType<d = {}> = {
    data: d,
    messages: Array<string>,
    fieldsErrors: Array<string>,
    resultCode: number
}