import { IsoDateString, UserRole, Uuid } from '../../../core/models/common.model';

export interface UserMeResponse {
  id: Uuid;
  username: string;
  email: string;
  avatarUrl: string | null;
  role: UserRole;
  createdAt: IsoDateString;
}

export interface UserPublicResponse {
  id: Uuid;
  username: string;
  role: UserRole;
  avatarUrl: string | null;
}

export interface UpdateMeRequest {
  username?: string;
  avatarUrl?: string | null;
}
