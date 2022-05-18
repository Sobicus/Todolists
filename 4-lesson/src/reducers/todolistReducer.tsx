import {TaskType} from "../Todolist"
import {v1} from "uuid";

export const todolistReducer = (state: Array<TaskType>, action: todolistReducerType) => {
    switch (action.type) {
        case "Remove-Task": {
            // let filteredTasks = tasks.filter(t => t.id != id);
            return state.filter(el=>el.id!==action.payload.id)
        }
        case "Add-Task": {
            let newTask = { id: v1(), title: action.payload.title, isDone: false };
            // let newTasks = [task, ...tasks];
            return [newTask, ...state]
        }
        default: return state // или все рухнуло и надпись "Vse propalo"
    }
}
type todolistReducerType= removeTaskACType | addTaskACType
type removeTaskACType=ReturnType<typeof removeTaskAC>

export const removeTaskAC=(id: string)=>{
    return{
        type: "Remove-Task",
        payload: {id}
    } as const
}
type addTaskACType=ReturnType<typeof addTaskAC>
export const addTaskAC=(title: string)=>{
    return{
        type: "Add-Task",
        payload: {title}
    } as const
}