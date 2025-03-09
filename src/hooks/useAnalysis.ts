import { useState, useEffect } from 'react';
import { getAnalysis } from '../lib/api';
import type { VideoAnalysis } from '../lib/supabase';

export function useAnalysis(id: string) {
  const [analysis, setAnalysis] = useState<VideoAnalysis | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchAnalysis() {
      try {
        const data = await getAnalysis(id);
        setAnalysis(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    fetchAnalysis();
  }, [id]);

  return { analysis, loading, error };
}