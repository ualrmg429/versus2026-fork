export type ReportResolution = 'DISMISS' | 'DEACTIVATE';

// TODO contrato: la guia no documenta campos exactos del reporte.
export type QuestionReport = Record<string, unknown>;

export interface ResolveReportRequest {
  action: ReportResolution;
}
