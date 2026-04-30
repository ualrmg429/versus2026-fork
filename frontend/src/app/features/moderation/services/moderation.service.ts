import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiClientService } from '../../../core/services/api-client.service';
import { QuestionReport, ResolveReportRequest } from '../models/moderation.model';

@Injectable({ providedIn: 'root' })
export class ModerationService {
  private readonly api = inject(ApiClientService);

  getReports(): Observable<QuestionReport[]> {
    return this.api.get<QuestionReport[]>('/mod/reports');
  }

  resolveReport(id: string, request: ResolveReportRequest): Observable<QuestionReport> {
    return this.api.put<QuestionReport, ResolveReportRequest>(`/mod/reports/${id}`, request);
  }
}
