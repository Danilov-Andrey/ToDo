import { SEARCH_TODO } from '../actions/types/searchActionTypes';

const initialState = {
  todo: [],
  searchError: null
};

export const searchTodo = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TODO:
      const { text, todos } = action.payload;
      if (text === '') {
        return initialState;
      }
      const filteredTodos = [];
      todos.map(todo => {
        if (todo.text.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
          filteredTodos.push(todo);
        }
      });
      if (filteredTodos.length === 0) {
        return {
          ...state,
          searchError: 'Todo not found'
        };
      }
      return {
        searchError: null,
        todo: filteredTodos
      };

    default:
      return state;
  }
};
