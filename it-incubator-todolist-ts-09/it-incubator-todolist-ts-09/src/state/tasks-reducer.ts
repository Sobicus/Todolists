import {v1} from "uuid";
import {TasksStateType} from "../App";
import {addTodolistAC, AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

export type RemoveTaskACType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string
}
type AddTaskACType = ReturnType<typeof addTaskAC>

export type ChangeTaskStatusACType = {
    type: "CHANGE-TASK-STATUS"
    todolistId: string
    taskId: string
    isDone: boolean
}
export type changeTaskTitleACType = {
    type: "CHANGE-TASK-TITLE"
    todolistId: string
    taskId: string
    title: string
}
type ActionsType =
    RemoveTaskACType
    | AddTaskACType
    | ChangeTaskStatusACType
    | changeTaskTitleACType
    | AddTodolistActionType
    | RemoveTodolistActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            //1)
            // const stateCopy= {...state}
            // const tasks = stateCopy[action.todolistId]
            // const filterTasks = tasks.filter(el=>el.id!==action.taskId)
            // stateCopy[action.todolistId]=filterTasks
            // return stateCopy
            //2)
            // const stateCopy= {...state}
            // const filterTasks = stateCopy[action.todolistId].filter(el=>el.id!==action.taskId)
            // stateCopy[action.todolistId]=filterTasks
            // return stateCopy

            return {...state, [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.taskId)}
        }
        case "ADD-TASK": {
            const newTask = {id: '4', title: action.title, isDone: false}
            return {...state, [action.todolistId2]: [newTask, ...state[action.todolistId2]]}
        }
        case "CHANGE-TASK-STATUS": {
            //1)
            // const copyState = {...state}
            // const tasks = copyState[action.todolistId]
            // const task = tasks.find(el => el.id === action.taskId)
            // if (task) task.isDone = action.isDone
            // return copyState
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(el => el.id == action.taskId ? {...el, isDone: action.isDone} : el)
            }
        }
        case "CHANGE-TASK-TITLE": {
            // const copyState = {...state}
            // const tasks = copyState[action.todolistId]
            // const task = tasks.find(el=>el.id==action.taskId)
            // if(task)
            // task.title = action.title
            // return copyState
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(el => el.id == action.taskId ? {
                    ...el,
                    title: action.title
                } : el)
            }
        }
        case "REMOVE-TODOLIST": {
            //1)
            // const stateCopy = {...state}
            // delete stateCopy[action.id]
            // return stateCopy
            //2)
            const {[action.id]: deleteState, ...updateState} = state
            return updateState
        }
        case "ADD-TODOLIST": {
            return {...state, [action.todolistId]: []}
        }
        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskACType => {
    return {
        type: 'REMOVE-TASK',
        taskId,
        todolistId
    }
}
export const addTaskAC = (title: string, todolistId2: string) => {
    return {
        type: 'ADD-TASK',
        todolistId2,
        title
    } as const
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeTaskStatusACType => {
    return {
        type: "CHANGE-TASK-STATUS",
        todolistId,
        taskId,
        isDone
    }
}
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): changeTaskTitleACType => {
    return {
        type: "CHANGE-TASK-TITLE",
        todolistId,
        taskId,
        title
    }
}