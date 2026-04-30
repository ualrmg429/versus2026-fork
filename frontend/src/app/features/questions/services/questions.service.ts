import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiClientService } from '../../../core/services/api-client.service';
import {
  QuestionResponse,
  RandomQuestionQuery,
  ReportQuestionRequest,
} from '../models/question.model';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  private readonly api = inject(ApiClientService);

  getRandom(query?: RandomQuestionQuery): Observable<QuestionResponse> {
    return this.api.get<QuestionResponse>('/questions/random', query);
  }

  getById(id: string): Observable<QuestionResponse> {
    return this.api.get<QuestionResponse>(`/questions/${id}`);
  }

  getCategories(): Observable<string[]> {
    return this.api.get<string[]>('/questions/categories');
  }

  report(id: string, request: ReportQuestionRequest = {}): Observable<void> {
    return this.api.post<void, ReportQuestionRequest>(`/questions/${id}/report`, request);
  }
}
