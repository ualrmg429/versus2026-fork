import { Injectable } from '@angular/core';

const ACCESS_TOKEN_KEY = 'versus_access_token';
const REFRESH_TOKEN_KEY = 'versus_refresh_token';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  getAccessToken(): string | null {
    return this.read(ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return this.read(REFRESH_TOKEN_KEY);
  }

  setTokens(accessToken: string, refreshToken: string): void {
    this.write(ACCESS_TOKEN_KEY, accessToken);
    this.write(REFRESH_TOKEN_KEY, refreshToken);
  }

  clear(): void {
    if (!this.hasLocalStorage()) return;
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }

  private read(key: string): string | null {
    if (!this.hasLocalStorage()) return null;
    return localStorage.getItem(key);
  }

  private write(key: string, value: string): void {
    if (!this.hasLocalStorage()) return;
    localStorage.setItem(key, value);
  }

  private hasLocalStorage(): boolean {
    return typeof localStorage !== 'undefined';
  }
}
