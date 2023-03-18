import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  USER_COOKIE_OPTIONS,
  USER_FIRSTNAME_COOKIE_KEY,
  USER_TOKEN_COOKIE_KEY,
  USER_USERNAME_COOKIE_KEY,
} from './users.constants';
import { UserData } from './users.types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  setCookies({ username, firstname, token }: Partial<UserData>) {
    this.setCookie(USER_TOKEN_COOKIE_KEY, token as string);
    this.setCookie(USER_FIRSTNAME_COOKIE_KEY, firstname as string);
    this.setCookie(USER_USERNAME_COOKIE_KEY, username as string);
  }

  getSessionCookie() {
    return this.getCookieByKey(USER_TOKEN_COOKIE_KEY);
  }

  getNameCookie() {
    return (
      this.getCookieByKey(USER_FIRSTNAME_COOKIE_KEY) ||
      this.getCookieByKey(USER_USERNAME_COOKIE_KEY)
    );
  }

  clearCookies() {
    this.removeCookie(USER_TOKEN_COOKIE_KEY);
    this.removeCookie(USER_FIRSTNAME_COOKIE_KEY);
    this.removeCookie(USER_USERNAME_COOKIE_KEY);
  }

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

  private setCookie(key: string, value: string) {
    this.cookieService.set(key, value, USER_COOKIE_OPTIONS);
  }

  private getCookieByKey(key: string) {
    return this.cookieService.get(key);
  }

  private removeCookie(key: string) {
    this.cookieService.delete(key, USER_COOKIE_OPTIONS.path);
  }

  constructor(
    private readonly http: HttpClient,
    private readonly cookieService: CookieService
  ) {}
}
