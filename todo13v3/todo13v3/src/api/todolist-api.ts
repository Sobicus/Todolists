import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '978ec9e4-88e0-4331-b5bc-a8ba69be02cb',
    },
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '978ec9e4-88e0-4331-b5bc-a8ba69be02cb',
    },
})

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        // return axios.put(
        //     `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
        //     {title: title},
        //     settings
        // )
        return instance.put<ResponseType>(`/todo-lists/${todolistId}`,
            {title: title}
        )
    },
    getTodolist() {
        // return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        return instance.get<Array<TodolistType>>('todo-lists')
    },
    deleteTodolist(todolistId: string) {
        // return axios.delete('https://social-network.samuraijs.com/api/1.1/todo-lists/' + todolistId, settings)
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    createTodolist(title: string) {
        // return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: title}, settings)
        return instance.post<ResponseType<{ item: TodolistType }>>(`todo-lists`, {title: title})
    }
}

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
type UpdateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {
        item: TodolistType
    }
}
type DeleteTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}