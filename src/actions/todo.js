import * as ActionTypes from '../ActionTypes';

export function addTodo(todo) {
  return {
    type: ActionTypes.ADD_TODO,
    todo
  }
}

export function deleteTodo(todo) {
  return {
    type: ActionTypes.ADD_DELETE,
    todo
  }
}