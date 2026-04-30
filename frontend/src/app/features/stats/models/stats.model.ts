import { GameMode } from '../../../core/models/common.model';

export interface StatsQuery {
  mode?: GameMode;
}

export interface PlayerStatsResponse {
  mode: GameMode;
  gamesPlayed: number;
  gamesWon: number;
  winRate: number;
  bestStreak: number;
  currentStreak: number;
  avgDeviation: number | null;
}

// TODO contrato: la guia no documenta la estructura del historial ni del ranking.
export type MatchHistoryItem = Record<string, unknown>;
export type RankingEntry = Record<string, unknown>;
export type MyRankingPosition = Record<string, unknown>;
