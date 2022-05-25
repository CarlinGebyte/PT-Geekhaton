import { types } from "../types/types";

const initialState = {
    coctel: []
}

export const coctelReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.list:
            console.log(action)
            return {
                coctel: [...action.payload]
            }

        default:
            return state
    }
}