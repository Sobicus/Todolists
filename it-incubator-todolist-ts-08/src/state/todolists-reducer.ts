import {TodolistType} from "../App";

export const todolistsReducer = (state: Array<TodolistType>, action: todolistsReducerType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(el => el.id !== action.payload.id)
        }
        case "ADD-TODOLIST": {
            const newTodolist = {id: action.payload.newTodolistID, title: action.payload.title, filter: 'all'}
            return [...state, newTodolist]
        }
        case "CHANGE-TODOLIST-TITLE": {
            return state.map(el => el.id === action.payload.id ? {...state, title: action.payload.title} : el)
        }
        case "CHANGE-TODOLIST-FILTER": {
            return state.map(el => el.id === action.payload.id ? {...el, filter: action.payload.filter} : el)
        }
        default:
            return state
    }
}
type todolistsReducerType = removeTodolistACType
    | addTodolistACType
    | changeTodolistTitleACType
    | changeFilterACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {id}
    } as const
}

type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (newTodolistID: string, title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {newTodolistID, title}
    } as const
}

type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id,
            title
        }
    } as const
}

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (id: string, filter: string) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {id, filter}
    } as const
}