import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {
  USER_COOKIE_OPTIONS,
  USER_FIRSTNAME_COOKIE_KEY,
  USER_TOKEN_COOKIE_KEY,
  USER_USERNAME_COOKIE_KEY,
} from './session.constants';
import { ISessionProps } from './session.types';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  setCookies({ username, firstname, token }: ISessionProps) {
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

  private setCookie(key: string, value: string) {
    this.cookieService.set(key, value, USER_COOKIE_OPTIONS);
  }

  private getCookieByKey(key: string) {
    return this.cookieService.get(key);
  }

  private removeCookie(key: string) {
    this.cookieService.delete(key, USER_COOKIE_OPTIONS.path);
  }

  constructor(private readonly cookieService: CookieService) {}
}
