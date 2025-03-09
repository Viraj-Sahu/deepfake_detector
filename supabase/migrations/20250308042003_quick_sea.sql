/*
  # Video Analysis Schema

  1. New Tables
    - `video_analyses`: Stores main analysis results
      - `id` (uuid, primary key)
      - `video_url` (text): URL of the uploaded video
      - `status` (text): Current analysis status
      - `is_deepfake` (boolean): Whether video is detected as deepfake
      - `confidence_score` (float): Confidence level of the detection
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `detection_reports`: Stores detailed analysis reports
      - `id` (uuid, primary key)
      - `analysis_id` (uuid, foreign key)
      - `method` (text): Detection method used
      - `score` (float): Detection score
      - `created_at` (timestamp)
    
    - `anomalies`: Stores specific anomalies found
      - `id` (uuid, primary key)
      - `report_id` (uuid, foreign key)
      - `type` (text): Type of anomaly
      - `description` (text): Detailed description
      - `timestamp` (float): Timestamp in video where anomaly was found
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create video_analyses table
CREATE TABLE IF NOT EXISTS video_analyses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  video_url text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  is_deepfake boolean,
  confidence_score float,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create detection_reports table
CREATE TABLE IF NOT EXISTS detection_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  analysis_id uuid REFERENCES video_analyses(id) ON DELETE CASCADE,
  method text NOT NULL,
  score float NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create anomalies table
CREATE TABLE IF NOT EXISTS anomalies (
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
CREATE POLICY "Users can read their own analyses"
  ON video_analyses
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own analyses"
  ON video_analyses
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can read their own reports"
  ON detection_reports
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM video_analyses
    WHERE video_analyses.id = detection_reports.analysis_id
    AND video_analyses.id = auth.uid()
  ));

CREATE POLICY "Users can read their own anomalies"
  ON anomalies
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM detection_reports
    JOIN video_analyses ON video_analyses.id = detection_reports.analysis_id
    WHERE detection_reports.id = anomalies.report_id
    AND video_analyses.id = auth.uid()
  ));