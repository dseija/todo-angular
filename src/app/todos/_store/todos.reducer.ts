import { createReducer, on } from '@ngrx/store';
import { ITodosState } from '../todos.types';
import {
  addTodo,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  removeTodo,
  setTodos,
  toggleTodo,
  updateTodoCompleted,
  updateTodoId,
} from './todos.actions';

export const todosInitialState: ITodosState = {
  todos: [],
};

export const todosReducer = createReducer(
  todosInitialState,

  // Load Todos Reducers
  on(loadTodos, (state) => ({ ...state, processing: true })),
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    processing: false,
  })),
  on(loadTodosFailure, (state, { unauthorized }) => ({
    ...state,
    unauthorized,
    processing: false,
  })),

  on(setTodos, (state, { todos }) => ({ ...state, todos })),

  on(addTodo, (state, { description }) => ({
    ...state,
    todos: [...state.todos, { description }],
  })),

  on(toggleTodo, (state, { index }) => ({
    ...state,
    todos: state.todos.map((todo, i) =>
      index === i
        ? {
            ...todo,
            completed: !Boolean(todo.completed),
          }
        : todo
    ),
  })),

  on(updateTodoCompleted, (state, { index, completed }) => ({
    ...state,
    todos: state.todos.map((todo, i) =>
      index === i
        ? {
            ...todo,
            completed,
          }
        : todo
    ),
  })),

  on(updateTodoId, (state, { index, id }) => ({
    ...state,
    todos: state.todos.map((todo, i) => ({
      ...todo,
      id: index === i ? id : todo.id,
    })),
  })),

  on(removeTodo, (state, { index }) => ({
    ...state,
    todos: state.todos.filter((_todo, i) => i !== index),
  }))
);
