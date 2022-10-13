import axios from 'axios'
import React, {useEffect, useState} from "react";

// const settings = {
//     withCredentials: true,
//     headers: {
//         // Не забываем заменить API-KEY на собственный
//         'API-KEY': '453183b0-819e-4574-8e19-e840c50027c6'
//     },
// }

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '453183b0-819e-4574-8e19-e840c50027c6'
    },
})

export const todolistAPI = {
    GetTodolists() {
        const promise = instance.get<Array<TodolistType>>(
            'todo-lists',
        )
        return promise
    },
    CreateTodolist(title: string) {
        const promise = instance.post<ResponseTyupe<{ item: TodolistType }>>(
            'todo-lists/',
            {title: title},
        )
        return promise
    },
    DeleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseTyupe<{}>>(
            `todo-lists/${todolistId}`,
        )
        return promise
    },
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseTyupe>(
            `todo-lists/${todolistId}`,
            {title: title}
        )
        return promise
    },
}

type TodolistType = {
    addedDate: string
    id: string
    order: number
    title: string
}

type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {
        item: TodolistType
    }
}
type UpdateTodolistResponseType = {
    data: {}
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}
type DeleteTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}

type ResponseTyupe<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}