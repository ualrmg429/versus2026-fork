import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiClientService } from '../../../core/services/api-client.service';
import {
  PrecisionAnswerRequest,
  PrecisionAnswerResponse,
  StartGameResponse,
  SurvivalAnswerRequest,
  SurvivalAnswerResponse,
} from '../models/game.model';

@Injectable({ providedIn: 'root' })
export class GameService {
  private readonly api = inject(ApiClientService);

  startSurvival(): Observable<StartGameResponse> {
    return this.api.post<StartGameResponse>('/game/survival/start');
  }

  answerSurvival(request: SurvivalAnswerRequest): Observable<SurvivalAnswerResponse> {
    return this.api.post<SurvivalAnswerResponse, SurvivalAnswerRequest>('/game/survival/answer', request);
  }

  startPrecision(): Observable<StartGameResponse> {
    return this.api.post<StartGameResponse>('/game/precision/start');
  }

  answerPrecision(request: PrecisionAnswerRequest): Observable<PrecisionAnswerResponse> {
    return this.api.post<PrecisionAnswerResponse, PrecisionAnswerRequest>('/game/precision/answer', request);
  }
}
