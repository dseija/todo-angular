import { CookieOptions } from 'ngx-cookie-service';

export const USER_COOKIE_OPTIONS: CookieOptions = {
  sameSite: 'Lax',
  path: '/',
  expires: 30,
};

export const USER_TOKEN_COOKIE_KEY = 'sessionToken';

export const USER_USERNAME_COOKIE_KEY = 'userUsername';

export const USER_FIRSTNAME_COOKIE_KEY = 'userFirstname';
