import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './actionTypes';

export const addTodo = text => {
  return { type: ADD_TODO, payload: text };
};

export const deleteTodo = id => {
  return { type: DELETE_TODO, payload: id };
};

export const completeTodo = id => {
  return { type: COMPLETE_TODO, payload: id };
};
