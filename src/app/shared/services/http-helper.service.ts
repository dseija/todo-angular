import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from 'src/app/session/session.service';

type Headers =
  | HttpHeaders
  | {
      [header: string]: string | string[];
    };

@Injectable({
  providedIn: 'root',
})
export class HttpHelperService {
  getAuthToken(): string {
    const token = this.sessionService.getSessionTokenCookie();

    return `Bearer ${token}`;
  }

  getAuthHeaders(): Headers {
    return { Authorization: this.getAuthToken() };
  }

  constructor(private readonly sessionService: SessionService) {}
}
