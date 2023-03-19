import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpHelperService } from '../shared/services/http-helper.service';
import { UserData } from './users.types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
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

  register(registerData: Partial<UserData>): Observable<Partial<UserData>> {
    return this.http
      .post<UserData>(`${environment.apiUrl}/auth/register`, registerData)
      .pipe(
        map((res) => ({
          username: res.username,
        })),
        catchError((err: HttpErrorResponse) => {
          throw err.status;
        })
      );
  }

  getUser(): Observable<Partial<UserData>> {
    return this.http
      .get<UserData>(`${environment.apiUrl}/user/whoami`, {
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
