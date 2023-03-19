import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITodosState } from '../todos.types';

const selectFeature = createFeatureSelector<ITodosState>('todosState');

export const selectTodosState = createSelector(selectFeature, (state) => state);

export const selectProcessing = createSelector(
  selectTodosState,
  (state) => state.processing
);

export const selectUnauthorized = createSelector(
  selectTodosState,
  (state) => state.unauthorized
);

export const selectTodos = createSelector(
  selectTodosState,
  (state) => state.todos
);

export const selectTodosLength = createSelector(
  selectTodosState,
  (state) => state.todos.length
);

export const selectCompletedTodos = createSelector(selectTodos, (todos) =>
  todos.filter((todo) => todo.completed)
);
