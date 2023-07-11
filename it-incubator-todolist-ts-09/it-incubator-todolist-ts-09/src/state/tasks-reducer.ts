import {TasksStateType} from "../App";

export type Action1Type = {
    type: "1"
    taskId:string,
    todolistId:string
}
export type Action2Type = {
    type: '2'
    title: string
}
type ActionsType = Action1Type | action2ACType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "1": {
            return {...state}
        }
        case "2": {
            return {...state}
        }
        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): Action1Type => {
    return {
        type: '1',
        taskId,
        todolistId
    }
}
export const action2AC = (title: string) => {
    return {
        type: '2',
        title
    }
}
type action2ACType = ReturnType<typeof action2AC>