import { GameMode } from '../../../core/models/common.model';
import { QuestionResponse } from '../../questions/models/question.model';
import { UserPublicResponse } from '../../users/models/user.model';

// TODO contrato: la guia no documenta payload/response de cola, sala privada ni estado de match.
export type JoinMatchQueueResponse = Record<string, unknown>;
export type CreateMatchRoomRequest = Record<string, never>;
export type CreateMatchRoomResponse = Record<string, unknown>;
export interface JoinMatchRoomRequest {
  code: string;
}
export type JoinMatchRoomResponse = Record<string, unknown>;
export type MatchStateResponse = Record<string, unknown>;

export interface MatchFoundEvent {
  matchId: string;
  opponent: UserPublicResponse;
}

export interface MatchStartEvent {
  question: QuestionResponse;
  mode: GameMode;
}

export interface QuestionEvent {
  question: QuestionResponse;
  timeLimit: number;
}

export interface RoundResultEvent {
  player1Lives: number;
  player2Lives: number;
  correct: boolean;
}

// TODO contrato: la guia no detalla la estructura de stats al finalizar match.
export interface MatchEndEvent {
  winner: UserPublicResponse | null;
  stats: Record<string, unknown>;
}
