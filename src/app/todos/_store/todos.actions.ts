import { createAction, props } from '@ngrx/store';
import { Todo } from '../todos.types';

enum TodosActions {
  LoadTodos = '[Todos] Load Todos',
  LoadTodosSuccess = '[Todos] Load Todos Success',
  LoadTodosFailure = '[Todos] Load Todos Failure',

  SetTodos = '[Todos] Set Todos',
  AddTodo = '[Todos] Add Todo',
  ToggleTodo = '[Todos] Toggle Todo',
  UpdateTodoCompleted = '[Todos] Update Todo Completed',
  UpdateTodoId = '[Todos] Update Todo Id',
  RemoveTodo = '[Todos] Remove Todo',

  UpdateTodoSuccess = '[Todos] Update Todo Success',
  RemoveTodoSuccess = '[Todos] Remove Todo Success',
}

export const loadTodos = createAction(TodosActions.LoadTodos);
export const loadTodosSuccess = createAction(
  TodosActions.LoadTodosSuccess,
  props<{ todos: Todo[] }>()
);
export const loadTodosFailure = createAction(
  TodosActions.LoadTodosFailure,
  props<{ unauthorized: boolean }>()
);

export const setTodos = createAction(
  TodosActions.SetTodos,
  props<{ todos: Todo[] }>()
);
export const addTodo = createAction(
  TodosActions.AddTodo,
  props<{ index: number; description: string }>()
);
export const toggleTodo = createAction(
  TodosActions.ToggleTodo,
  props<{ index: number }>()
);
export const updateTodoCompleted = createAction(
  TodosActions.UpdateTodoCompleted,
  props<{ id: string; completed: boolean }>()
);
export const updateTodoId = createAction(
  TodosActions.UpdateTodoId,
  props<{ index: number; id: string }>()
);
export const removeTodo = createAction(
  TodosActions.RemoveTodo,
  props<{ id: string }>()
);

export const updateTodoSuccess = createAction(TodosActions.UpdateTodoSuccess);

export const removeTodoSuccess = createAction(TodosActions.RemoveTodoSuccess);
