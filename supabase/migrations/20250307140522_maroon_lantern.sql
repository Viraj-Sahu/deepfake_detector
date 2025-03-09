/*
  # DeepGuard AI Database Schema

  1. New Tables
    - `profiles`
      - Stores user profile information
      - Links to Supabase Auth users
    - `video_analyses`
      - Stores video analysis results and metadata
      - Tracks processing status and detection results
    - `detection_reports`
      - Stores detailed analysis findings
      - Links to video_analyses
    - `anomalies`
      - Stores specific anomalies detected in videos
      - Links to detection_reports

  2. Security
    - Enable RLS on all tables
    - Policies for authenticated access
    - Secure file storage access
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  email text NOT NULL,
  full_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create video_analyses table
CREATE TABLE video_analyses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) NOT NULL,
  video_url text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  confidence_score float,
  is_deepfake boolean,
  processing_time float,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CHECK (status IN ('pending', 'processing', 'completed', 'failed'))
);

-- Create detection_reports table
CREATE TABLE detection_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  analysis_id uuid REFERENCES video_analyses(id) NOT NULL,
  cnn_score float,
  rnn_score float,
  audio_sync_score float,
  frequency_analysis_score float,
  biometric_score float,
  summary text,
  created_at timestamptz DEFAULT now()
);

-- Create anomalies table
CREATE TABLE anomalies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id uuid REFERENCES detection_reports(id) NOT NULL,
  type text NOT NULL,
  description text NOT NULL,
  confidence_score float,
  timestamp_start float,
  timestamp_end float,
  created_at timestamptz DEFAULT now(),
  CHECK (type IN ('facial', 'audio', 'temporal', 'lighting', 'biometric'))
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE video_analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE detection_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE anomalies ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Video analyses policies
CREATE POLICY "Users can read own analyses"
  ON video_analyses FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create analyses"
  ON video_analyses FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Detection reports policies
CREATE POLICY "Users can read own reports"
  ON detection_reports FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM video_analyses
      WHERE video_analyses.id = detection_reports.analysis_id
      AND video_analyses.user_id = auth.uid()
    )
  );

-- Anomalies policies
CREATE POLICY "Users can read own anomalies"
  ON anomalies FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM detection_reports
      JOIN video_analyses ON video_analyses.id = detection_reports.analysis_id
      WHERE detection_reports.id = anomalies.report_id
      AND video_analyses.user_id = auth.uid()
    )
  );