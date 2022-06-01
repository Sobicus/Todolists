import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {AddTodolistAC} from "./todolists-reducer";

export type FirstTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string
}
export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>

export type SecondTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}
export type AddTaskActionType = ReturnType<typeof addTaskAC>

export type ThirdTaskActionType = {
    type: 'CHANGE-STATUS-TASK'
    id: string
    isDone: boolean
    todolistId: string
}
export type changeTaskStatusAC = ReturnType<typeof changeTaskStatusAC>

type ActionsType = RemoveTaskActionType | AddTaskActionType | changeTaskStatusAC ;

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)
            }
        case 'ADD-TASK':
            return {
                ...state,
                [action.todolistId]: [{id: v1(), isDone: false, title: action.title}, ...state[action.todolistId]]
            }
        case 'CHANGE-STATUS-TASK':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(t=> t.id === action.id ? {...t, isDone:action.isDone}: t)
            }
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
    return {type: 'REMOVE-TASK', taskId, todolistId} as const
}
export const addTaskAC = (title: string, todolistId: string) => {
    return {type: 'ADD-TASK', title, todolistId} as const
}
export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string) => {
    return {type: 'CHANGE-STATUS-TASK', id, isDone, todolistId} as const
}
