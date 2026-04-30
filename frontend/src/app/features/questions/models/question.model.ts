import { IsoDateString, QuestionType, Uuid } from '../../../core/models/common.model';

export interface QuestionOptionResponse {
  id: Uuid;
  text: string;
}

export interface BaseQuestionResponse {
  id: Uuid;
  type: QuestionType;
  text: string;
  category: string;
  scrapedAt: IsoDateString;
}

export interface BinaryQuestionResponse extends BaseQuestionResponse {
  type: 'BINARY';
  options: QuestionOptionResponse[];
}

export interface NumericQuestionResponse extends BaseQuestionResponse {
  type: 'NUMERIC';
  unit: string;
}

export type QuestionResponse = BinaryQuestionResponse | NumericQuestionResponse;

export interface RandomQuestionQuery {
  type?: QuestionType;
  category?: string;
}

// TODO contrato: la guia no documenta el body para reportar una pregunta.
export type ReportQuestionRequest = Record<string, never>;
