import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowLeft, Maximize, Minimize } from 'lucide-react';
import { Lesson } from '../../types';
import { AIChat } from './AIChat';
import useMobile from '../../hooks/use-mobile';
import './LessonViewer.css'; // Import a custom CSS file

interface LessonViewerProps {
  lesson: Lesson;
  onBack: () => void;
}

// Helper function to parse iframe attributes (no changes here)
const parseIframeProps = (embedCode: string) => {
  const iframeRegex = /<iframe\s+([^>]*?)src="([^"]+)"([^>]*?)>/i;
  const match = embedCode.match(iframeRegex);

  if (!match) {
    return { src: '', otherProps: {} };
  }

  const src = match[2];
  const allAttrs = (match[1] + match[3]).trim();
  const propRegex = /(\w+)="([^"]*)"/g;
  let propMatch;
  const otherProps: { [key: string]: any } = {};

  while ((propMatch = propRegex.exec(allAttrs)) !== null) {
    const key = propMatch[1];
    const value = propMatch[2];
    const reactKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    otherProps[reactKey] = value;
  }

  return { src, otherProps };
};

export const LessonViewer: React.FC<LessonViewerProps> = ({ lesson, onBack }) => {
  const embedContainerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isMobile = useMobile();

  const { src, otherProps } = useMemo(() => parseIframeProps(lesson.embedCode), [lesson.embedCode]);

  const handleFullscreenToggle = () => {
    const element = embedContainerRef.current;
    if (element) {
      if (!document.fullscreenElement) {
        element.requestFullscreen().catch((err) => {
          alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isCurrentlyFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const shouldHideUI = isFullscreen && isMobile;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Lesson Content */}
      <div className={`lg:col-span-2 glass p-6 md:p-8 rounded-2xl shadow-xl animate-fadeIn ${isFullscreen ? 'fullscreen-mode-active' : ''}`}>
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 ${shouldHideUI ? 'hidden' : ''}`}>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gradient-to-r from-slate-200 to-slate-300 text-slate-700 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay lại
          </button>
          <button
            onClick={handleFullscreenToggle}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            {isFullscreen ? 'Thoát' : 'Toàn màn hình'}
          </button>
        </div>

        <div className={`mb-6 ${shouldHideUI ? 'hidden' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">{lesson.name}</h2>
          <p className="text-slate-600 text-base md:text-lg">
            {lesson.description || 'Không có mô tả'}
          </p>
        </div>

        <div
          ref={embedContainerRef}
          id="embed-container"
          className={`relative bg-white border-4 border-slate-100 rounded-2xl overflow-hidden shadow-xl ${isFullscreen ? 'fullscreen-embed-active' : 'min-h-[600px]'}`}
        >
          {src && (
            <div
              className={`iframe-container ${isFullscreen ? 'fullscreen-scroll' : ''}`}
            >
              <iframe
                key={src}
                src={src}
                title={otherProps.title || lesson.name}
                className="iframe-embed" // Use a class for consistent styling
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                {...otherProps}
              />
            </div>
          )}
        </div>
      </div>

      {/* AI Chat */}
      <div className={shouldHideUI ? 'hidden' : ''}>
        <AIChat lessonName={lesson.name} />
      </div>
    </div>
  );
};
