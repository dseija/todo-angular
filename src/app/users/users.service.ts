import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserData } from './users.types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  login(loginData: Partial<UserData>): Observable<Partial<UserData>> {
    return this.http
      .post<UserData>(`${environment.apiUrl}/auth/login`, loginData)
      .pipe(
        map((res) => ({
          username: res.username,
          firstname: res.firstname,
          token: res.token,
        })),
        catchError((err: HttpErrorResponse) => {
          throw err.status;
        })
      );
  }
}
