'use client';

import { useState } from 'react';

interface FigmaEmbedProps {
  figmaUrl: string;
  title?: string;
  width?: string | number;
  height?: string | number;
}

export default function FigmaEmbed({ 
  figmaUrl, 
  title = "Figma Prototype", 
  width = "100%", 
  height = "600px" 
}: FigmaEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Convert Figma URL to embed format
  const getEmbedUrl = (url: string) => {
    // If it's already an embed URL, return as is
    if (url.includes('/embed')) {
      return url;
    }
    
    // Convert regular Figma URL to embed URL
    const embedUrl = url.replace('/file/', '/embed/');
    return embedUrl;
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading Figma prototype...</p>
            </div>
          </div>
        )}
        
        {hasError ? (
          <div className="flex items-center justify-center h-96 bg-gray-100">
            <div className="text-center">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Unable to load prototype</h3>
              <p className="text-gray-600 mb-4">Please check the Figma URL and try again.</p>
              <a 
                href={figmaUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Open in Figma
              </a>
            </div>
          </div>
        ) : (
          <iframe
            src={getEmbedUrl(figmaUrl)}
            title={title}
            width={width}
            height={height}
            allowFullScreen
            onLoad={handleLoad}
            onError={handleError}
            className="w-full border-0"
            style={{ minHeight: typeof height === 'number' ? `${height}px` : height }}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
