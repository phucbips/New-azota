import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { assignmentService } from '../../services/assignment.service';
import { Assignment } from '../../types';
import { Plus, Trash2, Edit2, Loader2, Link, Eye, X } from 'lucide-react';
import { toast } from 'sonner';

type AssignmentForm = {
  title: string;
  description: string;
  embedCode: string;
  targetGrade: string;
};

export const AssignmentManagement: React.FC = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<AssignmentForm>({
      defaultValues: { targetGrade: '10' }
  });
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Preview state
  const [previewCode, setPreviewCode] = useState<string | null>(null);

  const watchedEmbedCode = watch('embedCode');

  useEffect(() => {
    // Only subscribe if user exists AND is whitelisted/teacher to avoid permission errors
    if (!user || !user.isWhitelisted) return;

    const unsubscribe = assignmentService.subscribeToTeacherAssignments(user.uid, (data) => {
      setAssignments(data);
    });
    return () => unsubscribe();
  }, [user]);

  const onSubmit = async (data: AssignmentForm) => {
    if (!user) return;
    setLoading(true);
    try {
      if (editingId) {
          await assignmentService.updateAssignment(editingId, data);
          toast.success('Đã cập nhật bài tập');
          setEditingId(null);
      } else {
          await assignmentService.createAssignment({
            ...data,
            createdByTeacherId: user.uid,
          });
          toast.success('Đã tạo bài tập mới');
      }
      reset({ title: '', description: '', embedCode: '', targetGrade: '10' });
    } catch (error) {
      toast.error('Có lỗi xảy ra');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bạn có chắc chắn muốn xóa bài tập này?')) return;
    try {
      await assignmentService.deleteAssignment(id);
      toast.success('Đã xóa bài tập');
    } catch (error) {
      toast.error('Lỗi khi xóa bài tập');
    }
  };

  const handleEdit = (assignment: Assignment) => {
      setEditingId(assignment.id!);
      reset({
          title: assignment.title,
          description: assignment.description,
          embedCode: assignment.embedCode,
          targetGrade: assignment.targetGrade
      });
  };

  const cancelEdit = () => {
      setEditingId(null);
      reset({ title: '', description: '', embedCode: '', targetGrade: '10' });
  };

  return (
    <div className="space-y-8">
      {/* Form */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          {editingId ? <Edit2 className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-blue-600" />}
          {editingId ? 'Cập nhật Bài tập' : 'Tạo Bài tập Mới'}
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700">Tiêu đề <span className="text-red-500">*</span></label>
              <input
                {...register('title', { required: 'Vui lòng nhập tiêu đề' })}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Bài tập Toán Tuần 1"
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700">Dành cho Khối <span className="text-red-500">*</span></label>
              <select
                {...register('targetGrade', { required: true })}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              >
                <option value="10">Khối 10</option>
                <option value="11">Khối 11</option>
                <option value="12">Khối 12</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">Mô tả</label>
            <textarea
              {...register('description')}
              rows={3}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Hướng dẫn làm bài..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700 flex items-center gap-1">
                <Link className="w-4 h-4" /> Link Azota (Embed Link) <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
                <input
                  {...register('embedCode', { required: 'Vui lòng nhập link Azota' })}
                  className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm bg-slate-50"
                  placeholder="https://azota.vn/..."
                />
                {watchedEmbedCode && (
                    <button
                        type="button"
                        onClick={() => setPreviewCode(watchedEmbedCode)}
                        className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 flex items-center gap-2 text-sm font-medium"
                    >
                        <Eye className="w-4 h-4" /> Xem trước
                    </button>
                )}
            </div>
            <p className="text-xs text-slate-500 mt-1">Dán link bài tập Azota hoặc mã nhúng (iframe) vào đây.</p>
             {errors.embedCode && <p className="text-red-500 text-xs mt-1">{errors.embedCode.message}</p>}
          </div>

          <div className="flex justify-end gap-3 pt-2">
             {editingId && (
                 <button
                    type="button"
                    onClick={cancelEdit}
                    className="px-6 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                 >
                     Hủy
                 </button>
             )}
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (editingId ? <Edit2 className="w-4 h-4" /> : <Plus className="w-4 h-4" />)}
              {loading ? 'Đang xử lý...' : (editingId ? 'Cập nhật' : 'Tạo Bài tập')}
            </button>
          </div>
        </form>
      </div>

      {/* List */}
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800">Danh sách Bài tập đã tạo ({assignments.length})</h3>
          <div className="grid gap-4">
              {assignments.map(assignment => (
                  <div key={assignment.id} className="bg-white p-4 rounded-xl border border-slate-200 hover:shadow-md transition-shadow flex justify-between items-start">
                      <div>
                          <div className="flex items-center gap-2 mb-1">
                              <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-bold">
                                  Khối {assignment.targetGrade}
                              </span>
                              <h4 className="font-bold text-slate-900">{assignment.title}</h4>
                          </div>
                          <p className="text-sm text-slate-600 mb-2 line-clamp-2">{assignment.description}</p>
                          <div className="text-xs text-slate-400">
                              Ngày tạo: {assignment.createdAt?.toDate().toLocaleDateString('vi-VN')}
                          </div>
                      </div>
                      <div className="flex gap-2">
                           <button
                              onClick={() => handleEdit(assignment)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Sửa"
                           >
                               <Edit2 className="w-4 h-4" />
                           </button>
                           <button
                              onClick={() => handleDelete(assignment.id!)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              title="Xóa"
                           >
                               <Trash2 className="w-4 h-4" />
                           </button>
                      </div>
                  </div>
              ))}
              {assignments.length === 0 && (
                  <div className="text-center p-8 text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                      Chưa có bài tập nào. Hãy tạo bài tập đầu tiên!
                  </div>
              )}
          </div>
      </div>

      {/* Preview Modal */}
      {previewCode && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fadeIn" onClick={() => setPreviewCode(null)}>
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
                  <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                      <h3 className="font-bold text-slate-800 flex items-center gap-2"><Eye className="w-4 h-4" /> Xem trước nội dung</h3>
                      <button onClick={() => setPreviewCode(null)} className="p-1 hover:bg-slate-200 rounded-full transition-colors"><X className="w-5 h-5" /></button>
                  </div>
                  <div className="flex-1 bg-slate-100 relative min-h-[400px]">
                      {previewCode.startsWith('<iframe') ? (
                          <div dangerouslySetInnerHTML={{ __html: previewCode }} className="w-full h-full absolute inset-0 [&>iframe]:w-full [&>iframe]:h-full" />
                      ) : (
                          <iframe
                              src={previewCode}
                              className="w-full h-full absolute inset-0"
                              title="Preview"
                              allowFullScreen
                          />
                      )}
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};
