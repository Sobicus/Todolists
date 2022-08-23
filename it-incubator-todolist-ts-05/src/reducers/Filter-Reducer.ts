import {FilterValuesType} from "../App";

export const FilterReducer = (state: FilterValuesType, action: FilterReducerType) => {
    switch (action.type) {
        case "CHANGE-FILTER":{
            return action.payload.value
        }
        default:
            return state
    }
}

export const changeFilterAC = (value: FilterValuesType) => {
    return {
        type: 'CHANGE-FILTER',
        payload: {value}
    } as const
}
type FilterReducerType = changeFilterACType
type changeFilterACType = ReturnType<typeof changeFilterAC>