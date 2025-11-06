import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, Sparkles } from 'lucide-react';
import { lessonsService } from '../../services/lessons.service';
import { aiService } from '../../services/ai.service';
import { Lesson } from '../../types';
import { LoadingSpinner } from '../shared/Loading';
import { Modal } from '../shared/Modal';

export const LessonsManagement: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    embedCode: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [modalState, setModalState] = useState({ isOpen: false, title: '', message: '' });

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

  const showModal = (message: string, title = 'Thông báo') => {
    setModalState({ isOpen: true, title, message });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.embedCode) {
      showModal('Tên bài học và Mã nhúng là bắt buộc.', 'Lỗi');
      return;
    }

    try {
      if (isEditing && formData.id) {
        await lessonsService.updateLesson(formData.id, {
          name: formData.name,
          description: formData.description,
          embedCode: formData.embedCode,
        });
        showModal('Cập nhật bài học thành công!');
      } else {
        await lessonsService.createLesson({
          name: formData.name,
          description: formData.description,
          embedCode: formData.embedCode,
        });
        showModal('Thêm bài học thành công!');
      }
      resetForm();
    } catch (error: any) {
      showModal(`Lỗi: ${error.message}`, 'Lỗi');
    }
  };

  const handleEdit = (lesson: Lesson) => {
    setFormData({
      id: lesson.id || '',
      name: lesson.name,
      description: lesson.description,
      embedCode: lesson.embedCode,
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (lessonId: string) => {
    try {
      await lessonsService.deleteLesson(lessonId);
      showModal('Đã xóa bài học.');
    } catch (error: any) {
      showModal(`Lỗi: ${error.message}`, 'Lỗi');
    }
  };

  const resetForm = () => {
    setFormData({ id: '', name: '', description: '', embedCode: '' });
    setIsEditing(false);
  };

  const handleAISuggest = async () => {
    if (!formData.name) {
      showModal('Vui lòng nhập Tên bài học trước khi đề xuất mô tả.', 'Lưu ý');
      return;
    }

    setAiLoading(true);
    try {
      const suggestion = await aiService.suggestLessonDescription(formData.name);
      setFormData({ ...formData, description: suggestion.trim() });
    } catch (error) {
      showModal('Lỗi khi kết nối với AI. Vui lòng thử lại.', 'Lỗi AI');
    } finally {
      setAiLoading(false);
    }
  };

  const escapeHTML = (str: string) => {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-100"
        >
          <h3 className="text-xl font-bold mb-6 gradient-text">
            {isEditing ? 'Chỉnh sửa Bài học' : 'Thêm Bài học Mới'}
          </h3>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Tên bài học
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-slate-700">Mô tả</label>
              <button
                type="button"
                onClick={handleAISuggest}
                disabled={aiLoading}
                className="text-xs text-indigo-600 font-medium hover:underline flex items-center transition-opacity hover:opacity-80 disabled:opacity-50"
              >
                {aiLoading ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-1" />
                    Đề xuất Mô tả
                  </>
                )}
              </button>
            </div>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Mã nhúng (HTML/iframe)
            </label>
            <textarea
              value={formData.embedCode}
              onChange={(e) => setFormData({ ...formData, embedCode: e.target.value })}
              rows={5}
              className="input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl font-mono text-sm"
              placeholder="Lưu ý: Chỉ chấp nhận mã HTML an toàn (ví dụ: iframe)."
              required
            />
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              className="btn-primary flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              {isEditing ? 'Cập nhật' : 'Thêm'}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="flex-1 py-3 bg-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-300 transition-all"
              >
                Hủy
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="lg:col-span-2">
        <h3 className="text-xl font-bold mb-6 text-slate-800">Danh sách Bài học</h3>
        <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-2">
          {loading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner />
            </div>
          ) : lessons.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 text-slate-300">📚</div>
              <p className="text-slate-500 font-medium">Chưa có bài học nào được tạo</p>
            </div>
          ) : (
            lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="card-hover bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-md"
              >
                <div className="flex justify-between items-start min-w-0">
                  <div className="flex-1 min-w-0 mr-4">
                    <h4 className="text-lg font-bold text-slate-800 mb-2 truncate">{lesson.name}</h4>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {lesson.description || 'Không có mô tả'}
                    </p>
                    <div className="bg-slate-50 p-3 rounded-xl">
                      {(() => {
                        const isIframe = lesson.embedCode?.includes('<iframe');
                        const contentType = isIframe ? '📹 Video/Iframe Content' : '📄 HTML Content';
                        const preview = isIframe ? 'Contains embedded video or interactive content' : 'Contains HTML content';
                        
                        return (
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-600">{contentType}</span>
                            <span className="text-xs text-slate-400 truncate ml-2">{preview}</span>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-shrink-0" style={{ minWidth: '80px' }}>
                    <button
                      onClick={() => handleEdit(lesson)}
                      className="flex items-center justify-center gap-1 px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 font-semibold transition-all whitespace-nowrap"
                    >
                      <Pencil className="w-4 h-4" />
                      <span className="hidden sm:inline">Sửa</span>
                    </button>
                    <button
                      onClick={() => lesson.id && handleDelete(lesson.id)}
                      className="flex items-center justify-center gap-1 px-3 py-2 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 font-semibold transition-all whitespace-nowrap"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Xóa</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Modal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        title={modalState.title}
        message={modalState.message}
      />
    </div>
  );
};
