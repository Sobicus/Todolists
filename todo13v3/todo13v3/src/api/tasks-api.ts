import axios from 'axios'
import {ResponseType} from "./todolist-api";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '978ec9e4-88e0-4331-b5bc-a8ba69be02cb',
    },
})

export const tasksAPI = {
    getTasks(todolistId: string) {
        return instance.get<GetTaskResponse>(` todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post(`/todo-lists/${todolistId}/tasks`, {title: title})
    },
    updateTask(todolistId: string, taskId: string, task: updateTaskType) {
        return instance.put(`/todo-lists/${todolistId}/tasks/${taskId}`,
            task
        )
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
    }

}
type updateTaskType = {
    title: string
    completed: boolean
}
type GetTaskResponse = {
    items: Array<TaskType>
    totalCount: number
    error: string | null
}
type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}