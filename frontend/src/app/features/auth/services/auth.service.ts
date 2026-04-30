import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { ApiClientService } from '../../../core/services/api-client.service';
import { TokenStorageService } from '../../../core/services/token-storage.service';
import {
  AuthResponse,
  LoginRequest,
  LogoutRequest,
  RefreshRequest,
  RegisterRequest,
} from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = inject(ApiClientService);
  private readonly tokenStorage = inject(TokenStorageService);

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.api
      .post<AuthResponse, LoginRequest>('/auth/login', request)
      .pipe(tap(response => this.tokenStorage.setTokens(response.accessToken, response.refreshToken)));
  }

  register(request: RegisterRequest): Observable<AuthResponse> {
    return this.api
      .post<AuthResponse, RegisterRequest>('/auth/register', request)
      .pipe(tap(response => this.tokenStorage.setTokens(response.accessToken, response.refreshToken)));
  }

  refresh(request: RefreshRequest): Observable<AuthResponse> {
    return this.api
      .post<AuthResponse, RefreshRequest>('/auth/refresh', request)
      .pipe(tap(response => this.tokenStorage.setTokens(response.accessToken, response.refreshToken)));
  }

  logout(request: LogoutRequest = {}): Observable<void> {
    return this.api
      .post<void, LogoutRequest>('/auth/logout', request)
      .pipe(tap(() => this.tokenStorage.clear()));
  }
}
