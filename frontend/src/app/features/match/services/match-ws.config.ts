import { inject, Injectable } from '@angular/core';

import { API_CONFIG } from '../../../core/services/api.config';

@Injectable({ providedIn: 'root' })
export class MatchWsConfigService {
  private readonly config = inject(API_CONFIG);

  readonly endpoint = this.config.wsUrl;
  readonly userMatchQueue = '/user/queue/match';

  matchTopic(matchId: string): string {
    return `/topic/match/${matchId}`;
  }

  readonly answerDestination = '/app/match/answer';
  readonly readyDestination = '/app/match/ready';
}
