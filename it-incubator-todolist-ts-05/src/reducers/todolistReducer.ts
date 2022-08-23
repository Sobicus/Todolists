import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const todolistReducer = (state: Array<TaskType>, action: todolistReducerType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            let filterTasks = state.filter(e => e.id !== action.payload.id)
            return filterTasks
        }
        case "ADD_TASK": {
            const newTask = {id: v1(), title: action.payload.title, isDone: false}
            return [...state, newTask]
        }
        case "CHANGE-STATUS":{
            let task = state.find(el=>el.id===action.payload.taskId)
            if(task){
                task.isDone = action.payload.isDone
            }
            return [...state]
        }
        default:
            return state
    }
}

export const removeTaskAC = (id: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {id}
    } as const
}
export const addTaskAC = (title: string) => {
    return {
        type: 'ADD_TASK',
        payload: {title}
    } as const
}
export const changeStatusAC = (taskId: string, isDone: boolean) => {
    return {
        type: 'CHANGE-STATUS',
        payload: {taskId, isDone}
    } as const
}

type removeTaskACType = ReturnType<typeof removeTaskAC>
type addTaskACType = ReturnType<typeof addTaskAC>
type changeStatusACType = ReturnType<typeof  changeStatusAC>
type todolistReducerType = removeTaskACType | addTaskACType | changeStatusACType