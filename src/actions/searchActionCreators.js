import { SEARCH_TODO } from './types/searchActionTypes';

export function searchTodo(text) {
  return (dispatch, getState) => {
    dispatch({
      type: SEARCH_TODO,
      payload: { text, todos: getState().appTodos.todos }
    });
  };
}
