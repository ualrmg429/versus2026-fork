import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiClientService } from '../../../core/services/api-client.service';
import { UpdateMeRequest, UserMeResponse, UserPublicResponse } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly api = inject(ApiClientService);

  getMe(): Observable<UserMeResponse> {
    return this.api.get<UserMeResponse>('/users/me');
  }

  updateMe(request: UpdateMeRequest): Observable<UserMeResponse> {
    return this.api.put<UserMeResponse, UpdateMeRequest>('/users/me', request);
  }

  getUserById(id: string): Observable<UserPublicResponse> {
    return this.api.get<UserPublicResponse>(`/users/${id}`);
  }
}
