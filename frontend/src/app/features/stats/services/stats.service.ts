import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GameMode } from '../../../core/models/common.model';
import { ApiClientService } from '../../../core/services/api-client.service';
import {
  MatchHistoryItem,
  MyRankingPosition,
  PlayerStatsResponse,
  RankingEntry,
  StatsQuery,
} from '../models/stats.model';

@Injectable({ providedIn: 'root' })
export class StatsService {
  private readonly api = inject(ApiClientService);

  getMe(query?: StatsQuery): Observable<PlayerStatsResponse> {
    return this.api.get<PlayerStatsResponse>('/stats/me', query);
  }

  getMyHistory(): Observable<MatchHistoryItem[]> {
    return this.api.get<MatchHistoryItem[]>('/stats/me/history');
  }

  getRanking(mode: GameMode): Observable<RankingEntry[]> {
    return this.api.get<RankingEntry[]>(`/ranking/${mode}`);
  }

  getMyRanking(mode: GameMode): Observable<MyRankingPosition> {
    return this.api.get<MyRankingPosition>(`/ranking/${mode}/me`);
  }
}
