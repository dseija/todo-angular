import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITodosState } from '../todos.types';

const selectFeature = createFeatureSelector<ITodosState>('todosState');

export const selectTodos = createSelector(
  selectFeature,
  (state) => state.todos
);

export const selectCompletedTodos = createSelector(selectTodos, (todos) =>
  todos.filter((todo) => todo.completed)
);
