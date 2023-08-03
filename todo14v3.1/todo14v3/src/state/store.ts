import { tasksReducer } from './tasks-reducer';
import { todolistsReducer } from './todolists-reducer';
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<RootState,
    unknown,
    AnyAction>


export const useAppDispatch = ()=> useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
