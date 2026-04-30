import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiClientService } from '../../../core/services/api-client.service';
import {
  AdminSpider,
  AdminUser,
  SpiderRun,
  UpdateQuestionStatusRequest,
  UpdateUserRoleRequest,
} from '../models/admin.model';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly api = inject(ApiClientService);

  getSpiders(): Observable<AdminSpider[]> {
    return this.api.get<AdminSpider[]>('/admin/spiders');
  }

  runSpider(id: string): Observable<void> {
    return this.api.post<void>(`/admin/spiders/${id}/run`);
  }

  getSpiderRuns(id: string): Observable<SpiderRun[]> {
    return this.api.get<SpiderRun[]>(`/admin/spiders/${id}/runs`);
  }

  getUsers(): Observable<AdminUser[]> {
    return this.api.get<AdminUser[]>('/admin/users');
  }

  updateUserRole(id: string, request: UpdateUserRoleRequest): Observable<AdminUser> {
    return this.api.put<AdminUser, UpdateUserRoleRequest>(`/admin/users/${id}/role`, request);
  }

  deleteUser(id: string): Observable<void> {
    return this.api.delete<void>(`/admin/users/${id}`);
  }

  updateQuestionStatus(id: string, request: UpdateQuestionStatusRequest): Observable<void> {
    return this.api.put<void, UpdateQuestionStatusRequest>(`/admin/questions/${id}/status`, request);
  }
}
