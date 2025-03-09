import React, { useRef } from 'react';
import { Shield, AlertTriangle, Info, Upload, CheckCircle2, XCircle, Brain, AudioWaveform as Waveform, Camera, Fingerprint, Network, FileVideo, ChevronDown } from 'lucide-react';
import { useUpload } from './hooks/useUpload';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { upload, uploadState, result } = useUpload();

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      await upload(file);
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <Shield className="w-16 h-16 text-blue-400" />
        </div>
        <h1 className="text-5xl font-bold text-white mb-6">DeepGuard AI</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Advanced forensic deepfake detection powered by multi-modal AI analysis. Protect against face-swap videos and synthetic media manipulation.
        </p>
      </header>

      {/* Main Features */}
      <main className="container mx-auto px-4 py-12">
        {/* Detection Tool */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Forensic Analysis Tool</h2>
            <p className="text-gray-300">Upload a video for comprehensive deep fake detection and analysis</p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <div className="border-2 border-dashed border-blue-400 rounded-lg p-8 text-center">
              <FileVideo className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-300 mb-2">Upload video for analysis</p>
              <p className="text-sm text-gray-400 mb-4">Supports MP4, MOV, AVI formats up to 500MB</p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="video/*"
                className="hidden"
              />
              <button
                onClick={handleUploadClick}
                disabled={uploadState.status === 'uploading' || uploadState.status === 'analyzing'}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploadState.status === 'uploading' ? `Uploading... ${Math.round(uploadState.progress)}%` :
                 uploadState.status === 'analyzing' ? 'Analyzing...' :
                 'Select Video File'}
              </button>
              {uploadState.error && (
                <p className="mt-2 text-red-400">{uploadState.error}</p>
              )}
            </div>
          </div>
        </section>

        {/* Analysis Results */}
        {result && (
          <section className="bg-slate-800/50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Analysis Results</h2>
            <div className="max-w-4xl mx-auto bg-slate-900/50 rounded-lg p-6">
              <div className="grid gap-6">
                <div className="border-b border-slate-700 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">Detection Summary</h3>
                    <div className={`flex items-center ${result.isDeepfake ? 'text-red-400' : 'text-green-400'}`}>
                      {result.isDeepfake ? (
                        <AlertTriangle className="w-5 h-5 mr-2" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                      )}
                      <span className="font-semibold">
                        {result.isDeepfake ? 'Deepfake Detected' : 'No Deepfake Detected'}
                      </span>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Confidence Score</span>
                      <span className="text-white font-semibold">{result.confidence.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${result.isDeepfake ? 'bg-red-400' : 'bg-green-400'}`}
                        style={{ width: `${result.confidence}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Detected Anomalies</h4>
                  <div className="space-y-4">
                    {result.anomalies.map((anomaly, index) => (
                      <div key={index} className="bg-slate-800/50 rounded p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">{anomaly.type}</span>
                          <span className="text-sm text-gray-400">Severity: {anomaly.severity.toFixed(1)}%</span>
                        </div>
                        <p className="text-gray-300 text-sm">{anomaly.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Analysis Methods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Multi-Modal Analysis Techniques</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-lg">
              <Network className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Neural Network Analysis</h3>
              <p className="text-gray-300">Advanced CNNs and RNNs analyze temporal inconsistencies and spatial artifacts</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-lg">
              <Waveform className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Audio-Visual Sync</h3>
              <p className="text-gray-300">Detection of mismatches between speech patterns and facial movements</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-lg">
              <Fingerprint className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Biometric Verification</h3>
              <p className="text-gray-300">Analysis of facial landmarks and biological inconsistencies</p>
            </div>
          </div>
        </section>

        {/* Technical Details Dropdown */}
        <section className="bg-slate-800/30 rounded-xl p-8 mb-12">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between text-white"
          >
            <h2 className="text-2xl font-bold">Technical Specifications</h2>
            <ChevronDown className={`w-6 h-6 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="mt-6 grid gap-6">
              <div className="border-l-2 border-blue-400 pl-4">
                <h3 className="text-lg font-semibold text-white mb-2">Convolutional Neural Networks (CNNs)</h3>
                <p className="text-gray-300">Specialized architecture for detecting spatial inconsistencies in facial features, lighting, and textures</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-4">
                <h3 className="text-lg font-semibold text-white mb-2">Recurrent Neural Networks (RNNs)</h3>
                <p className="text-gray-300">Temporal analysis for detecting inconsistencies in motion and expression changes across video frames</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-4">
                <h3 className="text-lg font-semibold text-white mb-2">Frequency Domain Analysis</h3>
                <p className="text-gray-300">Detection of artifacts in frequency space that are characteristic of GAN-generated content</p>
              </div>
            </div>
          )}
        </section>

        {/* Detection Indicators */}
        <section className="bg-red-500/10 rounded-xl p-8 mb-12">
          <div className="flex items-center justify-center mb-8">
            <AlertTriangle className="w-12 h-12 text-red-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Key Detection Indicators</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start">
              <XCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Temporal Inconsistencies</h4>
                <p className="text-gray-300">Unnatural motion between frames and expression transitions</p>
              </div>
            </div>
            <div className="flex items-start">
              <XCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Audio Misalignment</h4>
                <p className="text-gray-300">Desynchronization between lip movements and speech</p>
              </div>
            </div>
            <div className="flex items-start">
              <XCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Artifact Patterns</h4>
                <p className="text-gray-300">GAN-specific artifacts and compression inconsistencies</p>
              </div>
            </div>
            <div className="flex items-start">
              <XCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Biometric Anomalies</h4>
                <p className="text-gray-300">Inconsistent facial landmarks and biological markers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Resources */}
        <section>
          <div className="text-center mb-8">
            <Info className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Research & Resources</h2>
            <p className="text-gray-300">Understanding deepfake technology and detection methods</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a href="#" className="block bg-slate-800/30 p-6 rounded-lg hover:bg-slate-800/50 transition">
              <h3 className="text-xl font-semibold text-white mb-2">Technical Documentation</h3>
              <p className="text-gray-300">In-depth analysis of our detection methodologies and research papers</p>
            </a>
            <a href="#" className="block bg-slate-800/30 p-6 rounded-lg hover:bg-slate-800/50 transition">
              <h3 className="text-xl font-semibold text-white mb-2">Case Studies</h3>
              <p className="text-gray-300">Real-world examples of detected deepfakes and analysis reports</p>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-slate-700">
        <p className="text-center text-gray-400">© 2024 DeepGuard AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;