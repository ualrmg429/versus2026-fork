import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from './api.config';

type QueryValue = string | number | boolean | null | undefined;

@Injectable({ providedIn: 'root' })
export class ApiClientService {
  private readonly http = inject(HttpClient);
  private readonly config = inject(API_CONFIG);

  get<T>(path: string, query?: object): Observable<T> {
    return this.http.get<T>(this.url(path), { params: this.params(query) });
  }

  post<TResponse, TRequest = unknown>(path: string, body?: TRequest): Observable<TResponse> {
    return this.http.post<TResponse>(this.url(path), body ?? null);
  }

  put<TResponse, TRequest = unknown>(path: string, body: TRequest): Observable<TResponse> {
    return this.http.put<TResponse>(this.url(path), body);
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(this.url(path));
  }

  private url(path: string): string {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${this.config.apiUrl}${normalizedPath}`;
  }

  private params(query?: object): HttpParams {
    let params = new HttpParams();

    Object.entries(query ?? {}).forEach(([key, value]) => {
      if (this.isQueryValue(value) && value !== undefined && value !== null && value !== '') {
        params = params.set(key, String(value));
      }
    });

    return params;
  }

  private isQueryValue(value: unknown): value is QueryValue {
    return (
      value === null ||
      value === undefined ||
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    );
  }
}
