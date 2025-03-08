import React from 'react';

export const WebViewDemo = () => {
  return (
    <div className="w-full h-screen">
      <iframe 
        src="https://example.com"
        width="100%"
        height="100%"
        title="WebView Demo"
        sandbox="allow-scripts allow-same-origin"
        className="border-none"
      />
    </div>
  );
};