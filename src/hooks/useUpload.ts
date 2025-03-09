import { useState } from 'react';
import type { UploadState, AnalysisResult } from '../lib/types';
import { uploadVideo, analyzeVideo, createAnalysis } from '../lib/api';

export function useUpload() {
  const [uploadState, setUploadState] = useState<UploadState>({
    status: 'idle',
    progress: 0
  });
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const upload = async (file: File) => {
    try {
      setUploadState({ status: 'uploading', progress: 0 });

      // Upload to Supabase storage
      const videoUrl = await uploadVideo(file);

      setUploadState({ status: 'analyzing', progress: 100 });

      // Analyze video using Hive AI
      const analysisResult = await analyzeVideo(file);

      // Save results to database
      await createAnalysis(videoUrl, analysisResult);

      setResult(analysisResult);
      setUploadState({ status: 'complete', progress: 100 });
      return analysisResult;

    } catch (error) {
      const message = error instanceof Error ? error.message : 'Upload failed';
      setUploadState({ status: 'error', progress: 0, error: message });
      throw error;
    }
  };

  return { upload, uploadState, result };
}