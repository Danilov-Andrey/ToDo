import { SEARCH_TODO } from '../actions/types/searchActionTypes';
import { initialState as todoApp } from './todoApp';

const initialState = {
  todo: [],
  searchValue: null
};

export const searchTodo = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TODO:
      const filteredTodos = [];
      todoApp.map(todo => {
        if (
          todo.text.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
        ) {
          filteredTodos.push(todo);
        }
      });
      return {
        ...state,
        searchTodo: {
          ...state.searchTodo,
          todo: filteredTodos
        }
      };

    default:
      return state;
  }
};
