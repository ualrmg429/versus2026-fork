import { InjectionToken } from '@angular/core';

export interface ApiConfig {
  apiUrl: string;
  wsUrl: string;
}

export const API_CONFIG = new InjectionToken<ApiConfig>('API_CONFIG', {
  factory: () => ({
    apiUrl: 'http://localhost:8080/api',
    wsUrl: 'ws://localhost:8080/ws',
  }),
});
