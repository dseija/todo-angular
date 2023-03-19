import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, EMPTY, exhaustMap, map, of } from 'rxjs';
import { SessionService } from 'src/app/session/session.service';
import { TodosService } from '../todos.service';
import {
  addTodo,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  removeTodo,
  removeTodoSuccess,
  updateTodoCompleted,
  updateTodoId,
  updateTodoSuccess,
} from './todos.actions';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      exhaustMap(() =>
        this.todosService.getTodos().pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError(this.handleError)
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodo),
      concatMap(({ index, description }) =>
        this.todosService.createTodo(description).pipe(
          map((todo) => updateTodoId({ index, id: todo.id as string })),
          catchError(this.handleError)
        )
      )
    )
  );

  updateTodoCompleted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodoCompleted),
      exhaustMap(({ id, completed }) =>
        this.todosService.updateTodo(id, completed).pipe(
          map(() => updateTodoSuccess()),
          catchError(this.handleError)
        )
      )
    )
  );

  removeTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeTodo),
      exhaustMap(({ id }) =>
        this.todosService.deleteTodo(id).pipe(
          map(() => removeTodoSuccess()),
          catchError(this.handleError)
        )
      )
    )
  );

  private handleError(errorStatus: number) {
    const unauthorized = [401, 403].includes(errorStatus);
    if (unauthorized) this.sessionService.clearCookies();

    return of(
      loadTodosFailure({
        unauthorized,
      })
    );
  }

  constructor(
    private readonly actions$: Actions,
    private readonly todosService: TodosService,
    private readonly sessionService: SessionService
  ) {}
}
