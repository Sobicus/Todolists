import axios from 'axios'
import {CreateTodolist, DeleteTodolist, GetTodolists} from "../stories/todolists-api.stories";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '978ec9e4-88e0-4331-b5bc-a8ba69be02cb'
    },
})

export const taskAPI = {
    getTasks(todolistId: string) {
        const promise = instance.get(
            `/todo-lists/${todolistId}/tasks`
        )
        return promise
    },
    createTask(todolistId: string, title: string) {
        const promise = instance.post(
            `/todo-lists/${todolistId}/tasks`,
            {title: title},
        )
        return promise
    },
    deleteTask(todolistId: string, taskId: string) {
        const promise = instance.delete(
            `todo-lists/${todolistId}/tasks/${taskId}`
        )
        return promise
    },
    updateTask(todolistId: string, taskId: string, title: string) {
        const promise = instance.put(
            `todo-lists/${todolistId}/tasks/${taskId}`,
            {title: title},
        )
        return promise
    },
}
type TaskType = {
    description: string
    title: string
    completed: boolean
    status: string
    priority: string
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: string
    addedDate: string
    totalCount: string
}
type GetTaskType = {
    items: Array<TaskType>
    totalCount: string
    error: string
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