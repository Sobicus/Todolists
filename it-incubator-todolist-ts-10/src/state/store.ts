import {combineReducers, legacy_createStore as createStore} from "redux";
import {todolistsReducer} from "./todolists-reducer";
import {tasksReducer} from "./tasks-reducer";
import {TasksStateType, TodolistType} from "../AppWithRedux";

export type AppRootStateType = ReturnType<typeof rootReducer>
// type AppRootStateType = {
//     todolists: Array<TodolistType>
//     tasks: TasksStateType
// }

const rootReducer = combineReducers({
    todolist: todolistsReducer,
    tasks: tasksReducer,
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store