import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../actions/actionTypes';

const initialState = { todos: [] };

export const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: new Date(), text: action.payload, completed: false }
        ]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
};
