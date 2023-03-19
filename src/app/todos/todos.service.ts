import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpHelperService } from '../shared/services/http-helper.service';
import { Todo } from './todos.types';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(`${environment.apiUrl}/todos`, {
        headers: this.httpHelper.getAuthHeaders(),
      })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          throw err.status;
        })
      );
  }

  createTodo(description: string): Observable<Todo> {
    return this.http
      .post<Todo>(
        `${environment.apiUrl}/todos`,
        { description },
        {
          headers: this.httpHelper.getAuthHeaders(),
        }
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
          throw err.status;
        })
      );
  }

  updateTodo(id: string, completed: boolean): Observable<Todo> {
    return this.http
      .put<Todo>(
        `${environment.apiUrl}/todos/${id}`,
        { completed },
        {
          headers: this.httpHelper.getAuthHeaders(),
        }
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
          throw err.status;
        })
      );
  }

  deleteTodo(id: string): Observable<Todo> {
    return this.http
      .delete<Todo>(`${environment.apiUrl}/todos/${id}`, {
        headers: this.httpHelper.getAuthHeaders(),
      })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          throw err.status;
        })
      );
  }

  constructor(
    private readonly http: HttpClient,
    private readonly httpHelper: HttpHelperService
  ) {}
}
