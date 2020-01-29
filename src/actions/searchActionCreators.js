import { SEARCH_TODO } from './types/searchActionTypes';

export const searchTodo = text => {
  return { type: SEARCH_TODO, payload: text };
};
