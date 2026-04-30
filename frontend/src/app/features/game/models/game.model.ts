import { QuestionResponse } from '../../questions/models/question.model';

export interface StartGameResponse {
  sessionId: string;
  question: QuestionResponse;
}

export interface SurvivalAnswerRequest {
  sessionId: string;
  questionId: string;
  optionId: string;
}

export interface SurvivalAnswerResponse {
  correct: boolean;
  livesRemaining: number;
  lifeDelta: number;
  streak: number;
  scoreDelta: number;
  nextQuestion?: QuestionResponse;
  gameOver: boolean;
}

export interface PrecisionAnswerRequest {
  sessionId: string;
  questionId: string;
  value: number;
}

export interface PrecisionAnswerResponse {
  correctValue: number;
  deviation: number;
  deviationPercent: number;
  lifeDelta: number;
  livesRemaining: number;
  nextQuestion?: QuestionResponse;
  gameOver: boolean;
}
