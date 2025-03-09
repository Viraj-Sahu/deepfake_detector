/*
  # DeepFake Detection Schema

  1. New Tables
    - `video_analyses`
      - `id` (uuid, primary key)
      - `video_url` (text)
      - `status` (text)
      - `is_deepfake` (boolean)
      - `confidence_score` (float)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `detection_reports`
      - `id` (uuid, primary key)
      - `analysis_id` (uuid, foreign key)
      - `method` (text)
      - `score` (float)
      - `created_at` (timestamp)
    
    - `anomalies`
      - `id` (uuid, primary key)
      - `report_id` (uuid, foreign key)
      - `type` (text)
      - `description` (text)
      - `timestamp` (float)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create video_analyses table
CREATE TABLE video_analyses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  video_url text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  is_deepfake boolean,
  confidence_score float,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create detection_reports table
CREATE TABLE detection_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  analysis_id uuid REFERENCES video_analyses(id) ON DELETE CASCADE,
  method text NOT NULL,
  score float NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create anomalies table
CREATE TABLE anomalies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id uuid REFERENCES detection_reports(id) ON DELETE CASCADE,
  type text NOT NULL,
  description text NOT NULL,
  timestamp float,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE video_analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE detection_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE anomalies ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own analyses"
  ON video_analyses
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT user_id FROM user_analyses WHERE analysis_id = id
  ));

CREATE POLICY "Users can create analyses"
  ON video_analyses
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view their own reports"
  ON detection_reports
  FOR SELECT
  TO authenticated
  USING (analysis_id IN (
    SELECT id FROM video_analyses WHERE auth.uid() IN (
      SELECT user_id FROM user_analyses WHERE analysis_id = video_analyses.id
    )
  ));

CREATE POLICY "Users can view their own anomalies"
  ON anomalies
  FOR SELECT
  TO authenticated
  USING (report_id IN (
    SELECT id FROM detection_reports WHERE analysis_id IN (
      SELECT id FROM video_analyses WHERE auth.uid() IN (
        SELECT user_id FROM user_analyses WHERE analysis_id = video_analyses.id
      )
    )
  ));