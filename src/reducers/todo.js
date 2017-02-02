import * as ActionTypes from '../ActionTypes';

export function todos(state = [], action) {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [
                ...state,
                action.todo
            ]
        default:
            return state
    }
}