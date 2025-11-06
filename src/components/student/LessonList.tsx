import React, { useState, useEffect } from 'react';
import { FileText, ChevronRight } from 'lucide-react';
import { lessonsService } from '../../services/lessons.service';
import { Lesson } from '../../types';
import { LoadingSpinner } from '../shared/Loading';

interface LessonListProps {
  onSelectLesson: (lesson: Lesson) => void;
}

export const LessonList: React.FC<LessonListProps> = ({ onSelectLesson }) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = lessonsService.subscribeToLessons(
      (data) => {
        setLessons(data);
        setLoading(false);
      },
      (error) => {
        console.error('Error loading lessons:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center col-span-full py-12">
        <LoadingSpinner />
      </div>
    );
  }

  if (lessons.length === 0) {
    return (
      <div className="col-span-full text-center py-16">
        <div className="text-6xl mb-4 text-slate-300">📚</div>
        <p className="text-slate-500 font-medium">Hiện chưa có bài học nào được chia sẻ</p>
      </div>
    );
  }

  return (
    <>
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          onClick={() => onSelectLesson(lesson)}
          className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all"
        >
          <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          <div className="p-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{lesson.name}</h3>
            <p className="text-slate-600 text-sm mb-4 line-clamp-2">
              {lesson.description || 'Không có mô tả'}
            </p>
          </div>
          <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-slate-100">
            <span className="text-sm font-bold text-blue-600 flex items-center">
              Bắt đầu học
              <ChevronRight className="w-4 h-4 ml-2" />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
