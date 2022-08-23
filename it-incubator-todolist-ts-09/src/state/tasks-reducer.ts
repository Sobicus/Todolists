import {TasksStateType} from "../App";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";
import {v1} from "uuid";

export type removeTaskACType = {
    type: "REMOVE-TASK"
    taskId: string
    todolistId: string
}
export type addTaskACType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}
export type changeTaskStatusACType = {
    type: "CHANGE-TASK-STATUS"
    taskId: string
    isDone: boolean
    todolistId: string
}
type ActionType =
    removeTaskACType
    | addTaskACType
    | changeTaskStatusACType
    | ReturnType<typeof changeTaskTitleAC>
    | AddTodolistActionType
    | RemoveTodolistActionType

export const tasksReducer = (state: TasksStateType, action: ActionType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return {...state, [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.taskId)}
        }
        case 'ADD-TASK': {
            let newTask = {id: '0', title: action.title, isDone: false}
            return {...state, [action.todolistId]: [newTask, ...state[action.todolistId]]}
        }
        case "CHANGE-TASK-STATUS": {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskId ? {
                    ...el,
                    isDone: action.isDone
                } : el)
            }
        }
        case "CHANGE-TASK-TITLE": {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskId ? {
                    ...el,
                    title: action.title
                } : el)
            }
        }
        case "REMOVE-TODOLIST":{
            const stateCopy = {...state}
            delete stateCopy[action.id]
            return stateCopy
        }
        case "ADD-TODOLIST": {
            return {...state, [action.todolistId]: []}
            // const stateCopy = {...state}
            // stateCopy[v1()] = []
            // return stateCopy
        }
        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string,): removeTaskACType => {
    return {
        type: "REMOVE-TASK",
        taskId: taskId,
        todolistId: todolistId,
    }
}
export const addTaskAC = (title: string, todolistId: string): addTaskACType => {
    return {
        type: "ADD-TASK",
        title: title,
        todolistId: todolistId
    }
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): changeTaskStatusACType => {
    return {
        type: "CHANGE-TASK-STATUS",
        taskId: taskId,
        isDone: isDone,
        todolistId: todolistId
    }
}
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string) => {
    return {
        type: "CHANGE-TASK-TITLE",
        taskId: taskId,
        title: title,
        todolistId: todolistId
    } as const
}
// export const AddTodolistAC = (todolist:string)=>{
//     return {
//         type:'ADD-NEW-TODOLIST',
//         todolist:todolist
//     }as const
// }
