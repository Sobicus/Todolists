import axios from 'axios'
import React, {useEffect, useState} from "react";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '453183b0-819e-4574-8e19-e840c50027c6',
    },
})


export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType>(
            `/todo-lists/${todolistId}`,
            {title: title},
        )
        return promise
    },
    getTodolists() {
        const promise = instance.get<Array<TodolistType>>(
            '/todo-lists',
        )
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>(
            'https://social-network.samuraijs.com/api/1.1/todo-lists',
            {title},
        )
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType>(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
        )
        return promise
    },

    getTasks(todolistId: string) {
        const promise = instance.get(
            `/todo-lists/${todolistId}/tasks`,
        )
        return promise
    },
    createTask(todolistId: string, title: string) {
        const promise = instance.post(
            `/todo-lists/${todolistId}/tasks`,
            {title}
        )
        return promise
    },
    updateTask(todolistId: string,
               taskId: string,
               newTaskTitle: string,
             /*  description?: string,
               completed?: boolean,
               status?: number,
               priority?: number,
               startDate?: string,
               deadline?: string*/) {
        const promise = instance.put(
            `/todo-lists/${todolistId}/tasks/${taskId}`,
            {
                newTaskTitle:newTaskTitle,
            /*    description,
                completed,
                status,
                priority,
                startDate,
                deadline
            */}
        )
        return promise
    }
}


type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
export type ResponseType<D={}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
// type CreateTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>,
//     data: {
//         item: TodolistType
//     }
// }
// type UpdateTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {}
// }
// type DeleteTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {}
// }
