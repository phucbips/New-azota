import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Lesson } from '../../types';
import { AIChat } from './AIChat';

interface LessonViewerProps {
  lesson: Lesson;
  onBack: () => void;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({ lesson, onBack }) => {
  useEffect(() => {
    // Ensure iframe loads properly
    const embedContainer = document.getElementById('embed-container');
    if (embedContainer) {
      const iframe = embedContainer.querySelector('iframe');
      if (iframe) {
        iframe.style.width = '100%';
        iframe.style.minHeight = '600px';
        iframe.style.display = 'block';
        iframe.style.border = 'none';
      }
    }
  }, [lesson]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Lesson Content */}
      <div className="lg:col-span-2 glass p-8 rounded-2xl shadow-xl animate-fadeIn">
        <button
          onClick={onBack}
          className="mb-6 px-6 py-3 bg-gradient-to-r from-slate-200 to-slate-300 text-slate-700 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại Danh sách
        </button>

        <div className="mb-6">
          <h2 className="text-4xl font-bold gradient-text mb-3">{lesson.name}</h2>
          <p className="text-slate-600 text-lg">
            {lesson.description || 'Không có mô tả'}
          </p>
        </div>

        <div
          id="embed-container"
          className="bg-white border-4 border-slate-100 rounded-2xl overflow-hidden shadow-xl min-h-[600px]"
          dangerouslySetInnerHTML={{ __html: lesson.embedCode }}
        />
      </div>

      {/* AI Chat */}
      <AIChat lessonName={lesson.name} />
    </div>
  );
};
