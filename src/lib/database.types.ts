export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      video_analyses: {
        Row: {
          id: string
          video_url: string
          status: string
          is_deepfake: boolean | null
          confidence_score: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          video_url: string
          status?: string
          is_deepfake?: boolean | null
          confidence_score?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          video_url?: string
          status?: string
          is_deepfake?: boolean | null
          confidence_score?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      detection_reports: {
        Row: {
          id: string
          analysis_id: string
          method: string
          score: number
          created_at: string
        }
        Insert: {
          id?: string
          analysis_id: string
          method: string
          score: number
          created_at?: string
        }
        Update: {
          id?: string
          analysis_id?: string
          method?: string
          score?: number
          created_at?: string
        }
      }
      anomalies: {
        Row: {
          id: string
          report_id: string
          type: string
          description: string
          timestamp: number | null
          created_at: string
        }
        Insert: {
          id?: string
          report_id: string
          type: string
          description: string
          timestamp?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          report_id?: string
          type?: string
          description?: string
          timestamp?: number | null
          created_at?: string
        }
      }
    }
  }
}