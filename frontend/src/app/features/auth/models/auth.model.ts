import { UserRole, Uuid } from '../../../core/models/common.model';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface RefreshRequest {
  refreshToken: string;
}

// TODO contrato: la guia no documenta el body de logout.
export type LogoutRequest = Record<string, never>;

export interface AuthUser {
  id: Uuid;
  username: string;
  role: UserRole;
  avatarUrl: string | null;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
}
