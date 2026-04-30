import { QuestionType, UserRole } from '../../../core/models/common.model';

export type SpiderStatus = 'ok' | 'warn' | 'err' | 'idle' | string;

// TODO contrato: la guia no documenta campos exactos de spiders, runs ni usuarios admin.
export type AdminSpider = Record<string, unknown>;
export type SpiderRun = Record<string, unknown>;
export type AdminUser = Record<string, unknown>;

export interface UpdateUserRoleRequest {
  role: UserRole;
}

export interface UpdateQuestionStatusRequest {
  status: 'ACTIVE' | 'INACTIVE' | 'PENDING_REVIEW';
}

export interface AdminQuestionStatusTarget {
  id: string;
  type?: QuestionType;
}
