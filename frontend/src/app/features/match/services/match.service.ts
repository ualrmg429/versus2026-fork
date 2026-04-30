import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiClientService } from '../../../core/services/api-client.service';
import {
  CreateMatchRoomRequest,
  CreateMatchRoomResponse,
  JoinMatchQueueResponse,
  JoinMatchRoomRequest,
  JoinMatchRoomResponse,
  MatchStateResponse,
} from '../models/match.model';

@Injectable({ providedIn: 'root' })
export class MatchService {
  private readonly api = inject(ApiClientService);

  joinQueue(): Observable<JoinMatchQueueResponse> {
    return this.api.post<JoinMatchQueueResponse>('/match/queue');
  }

  leaveQueue(): Observable<void> {
    return this.api.delete<void>('/match/queue');
  }

  createRoom(request: CreateMatchRoomRequest = {}): Observable<CreateMatchRoomResponse> {
    return this.api.post<CreateMatchRoomResponse, CreateMatchRoomRequest>('/match/room', request);
  }

  joinRoom(request: JoinMatchRoomRequest): Observable<JoinMatchRoomResponse> {
    return this.api.post<JoinMatchRoomResponse, JoinMatchRoomRequest>('/match/room/join', request);
  }

  getMatch(matchId: string): Observable<MatchStateResponse> {
    return this.api.get<MatchStateResponse>(`/match/${matchId}`);
  }
}
