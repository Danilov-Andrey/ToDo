import { createSelector } from 'reselect';

const todos = state => state.appTodos.todos;

export const getTotalTodos = createSelector(todos, todos => todos.length);

export const getActiveTodos = createSelector(
  todos,
  todos => todos.filter(todo => todo.completed === false).length
);

export const getFinishedTodos = createSelector(
  todos,
  todos => todos.filter(todo => todo.completed === true).length
);
