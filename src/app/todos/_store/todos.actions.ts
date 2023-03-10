import { createAction, props } from '@ngrx/store';
import { Todo } from '../todos.types';

enum TodosActions {
  SetTodos = '[Todos] Set Todos',
  AddTodo = '[Todos] Add Todo',
  ToggleTodo = '[Todos] Toggle Todo',
  UpdateTodoCompleted = '[Todos] Update Todo Completed',
  UpdateTodoId = '[Todos] Update Todo Id',
  RemoveTodo = '[Todos] Remove Todo',
}

export const setTodos = createAction(
  TodosActions.SetTodos,
  props<{ todos: Todo[] }>()
);
export const addTodo = createAction(
  TodosActions.AddTodo,
  props<{ description: string }>()
);
export const toggleTodo = createAction(
  TodosActions.ToggleTodo,
  props<{ index: number }>()
);
export const updateTodoCompleted = createAction(
  TodosActions.UpdateTodoCompleted,
  props<{ index: number; completed: boolean }>()
);
export const updateTodoId = createAction(
  TodosActions.UpdateTodoId,
  props<{ index: number; id: string }>()
);
export const removeTodo = createAction(
  TodosActions.RemoveTodo,
  props<{ index: number }>()
);
