export interface AnalysisResult {
  isDeepfake: boolean;
  confidence: number;
  anomalies: {
    type: string;
    description: string;
    severity: number;
  }[];
}

export interface UploadState {
  status: 'idle' | 'uploading' | 'analyzing' | 'complete' | 'error';
  progress: number;
  error?: string;
}