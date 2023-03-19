import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { SessionService } from 'src/app/session/session.service';
import { TodosService } from '../todos.service';
import { loadTodos, loadTodosFailure, loadTodosSuccess } from './todos.actions';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      exhaustMap(() =>
        this.todosService.getTodos().pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError((errorStatus: number) => {
            const unauthorized = [401, 403].includes(errorStatus);
            if (unauthorized) this.sessionService.clearCookies();

            return of(
              loadTodosFailure({
                unauthorized,
              })
            );
          })
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly todosService: TodosService,
    private readonly sessionService: SessionService
  ) {}
}
