import { SEARCH_TODO } from '../actions/types/searchActionTypes';

const initialState = {
  todo: [],
  searchError: null,
  searchMode: false
};

export const searchTodo = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TODO:
      const { text, todos } = action.payload;
      if (text === '') {
        return initialState;
      }
      const filteredTodos = [];
      todos.map(todo =>
        todo.text.toLowerCase().indexOf(text.toLowerCase()) !== -1
          ? filteredTodos.push(todo)
          : null
      );
      if (filteredTodos.length === 0) {
        return {
          ...state,
          searchMode: true,
          searchError: 'Todo not found'
        };
      }
      return {
        searchMode: true,
        searchError: null,
        todo: filteredTodos
      };

    default:
      return state;
  }
};
