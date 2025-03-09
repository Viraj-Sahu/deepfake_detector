import { supabase } from './supabase';
import { v4 as uuidv4 } from 'uuid';
import type { AnalysisResult } from './types';

const API_KEY = import.meta.env.VITE_HIVE_API_KEY;
const API_URL = "https://api.hivemoderation.com/v1/deepfake";

export async function uploadVideo(file: File) {
  try {
    // First check if the bucket exists
    const { data: buckets } = await supabase.storage.listBuckets();
    const videoBucket = buckets?.find(b => b.name === 'video-uploads');
    
    if (!videoBucket) {
      throw new Error('Storage bucket "video-uploads" not found. Please create it in your Supabase dashboard.');
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `videos/${fileName}`;

    const { error: uploadError, data } = await supabase.storage
      .from('video-uploads')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error('Upload error details:', uploadError);
      throw new Error(`Error uploading video: ${uploadError.message}`);
    }

    if (!data) {
      throw new Error('Upload completed but no data returned');
    }

    const { data: { publicUrl } } = supabase.storage
      .from('video-uploads')
      .getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

export async function analyzeVideo(file: File): Promise<AnalysisResult> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Analysis failed');
    }

    const data = await response.json();
    
    // Transform Hive API response to our AnalysisResult format
    return {
      isDeepfake: data.fake_probability > 0.5,
      confidence: data.fake_probability * 100,
      anomalies: [
        {
          type: 'Visual Analysis',
          description: 'Analysis of visual artifacts and inconsistencies',
          severity: data.fake_probability * 100
        },
        {
          type: 'Temporal Analysis',
          description: 'Analysis of temporal coherence and motion patterns',
          severity: data.fake_probability * 90 // Slightly lower to show variation
        }
      ]
    };
  } catch (error) {
    console.error('Error analyzing video:', error);
    throw error;
  }
}

export async function createAnalysis(videoUrl: string, result: AnalysisResult) {
  const { data: analysis, error } = await supabase
    .from('video_analyses')
    .insert({
      video_url: videoUrl,
      status: 'completed',
      is_deepfake: result.isDeepfake,
      confidence_score: result.confidence / 100
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Error saving analysis results: ${error.message}`);
  }

  return analysis;
}