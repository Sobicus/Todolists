import {setTodolistsAC, TodolistDomainType} from "./todolists-reducer";
import {v1} from "uuid";
import {tasksReducer} from "./tasks-reducer";

let todolistId1:string
let todolistId2:string
let startState:Array<TodolistDomainType>
beforeEach(()=>{
    todolistId1=v1()
    todolistId2=v1()
    startState = [
        {id:todolistId1, title:'What to lern', filter: 'all', addedDate:'', order:0},
        {id:todolistId2, title:'What to buy', filter: 'all', addedDate:'', order:0},
    ]
})
test('empty arrays should be added when we set todolists', ()=> {
    const action = setTodolistsAC(startState)

    const endState = tasksReducer({}, action )

    const keys = Object.keys(endState)

    expect(keys.length).toBe(2)
    expect(endState[todolistId1]).toStrictEqual([])
    expect(endState[todolistId2]).toStrictEqual([])
})