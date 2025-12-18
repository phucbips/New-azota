import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { assignmentService } from '../../services/assignment.service';
import { Assignment } from '../../types';
import { Plus, Trash2, Edit2, Loader2, Link, Eye, X, ChevronDown, Upload, Info } from 'lucide-react';
import { toast } from 'sonner';
import { formatDate } from '../../lib/formatters';

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
  const [previewCode, setPreviewCode] = useState<string | null>(null);

  const watchedEmbedCode = watch('embedCode');

  useEffect(() => {
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
          toast.success('Assignment updated');
          setEditingId(null);
      } else {
          await assignmentService.createAssignment({
            ...data,
            createdByTeacherId: user.uid,
          });
          toast.success('Assignment published');
      }
      reset({ title: '', description: '', embedCode: '', targetGrade: '10' });
    } catch (error) {
      toast.error('Operation failed');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    try {
      await assignmentService.deleteAssignment(id);
      toast.success('Deleted');
    } catch (error) {
      toast.error('Failed to delete');
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
    <div className="flex flex-col gap-8">
      {/* Form Card */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 flex flex-col gap-6">
          {/* Title */}
          <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-900">Assignment Title <span className="text-red-500">*</span></label>
              <input
                {...register('title', { required: true })}
                className="w-full h-12 px-4 rounded-lg bg-white border border-slate-200 text-slate-900 text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                placeholder="e.g., Introduction to Algebra II"
              />
          </div>

          {/* Grade Select */}
          <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-900">Assign to Grade <span className="text-red-500">*</span></label>
              <div className="relative">
                  <select
                    {...register('targetGrade', { required: true })}
                    className="w-full h-12 px-4 pr-10 rounded-lg bg-white border border-slate-200 text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none cursor-pointer"
                  >
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <ChevronDown className="w-5 h-5" />
                  </div>
              </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-slate-900">Description & Instructions</label>
                  <span className="text-xs text-slate-500">Markdown supported</span>
              </div>
              <textarea
                {...register('description')}
                rows={6}
                className="w-full p-4 rounded-lg bg-white border border-slate-200 text-slate-900 text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-y"
                placeholder="Detail the requirements, objectives..."
              />
          </div>

          {/* Embed Link */}
          <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-900">External Resource Link (Azota) <span className="text-red-500">*</span></label>
              <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                      <Link className="w-5 h-5" />
                  </div>
                  <input
                    {...register('embedCode', { required: true })}
                    className="w-full h-12 pl-11 pr-24 rounded-lg bg-white border border-slate-200 text-slate-900 text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    placeholder="https://"
                  />
                  {watchedEmbedCode && (
                      <button
                        type="button"
                        onClick={() => setPreviewCode(watchedEmbedCode)}
                        className="absolute right-2 top-2 h-8 px-3 bg-slate-100 text-slate-600 rounded-md text-xs font-bold hover:bg-slate-200 transition-colors flex items-center gap-1"
                      >
                          <Eye className="w-3 h-3" /> Preview
                      </button>
                  )}
              </div>
          </div>

          <div className="h-px bg-slate-200 my-2"></div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3">
              {editingId && (
                  <button type="button" onClick={cancelEdit} className="h-10 px-5 rounded-lg text-slate-600 font-bold hover:bg-slate-100 transition-colors">
                      Cancel
                  </button>
              )}
              <button type="button" className="h-10 px-5 rounded-lg text-slate-600 font-bold hover:bg-slate-100 transition-colors">
                  Save Draft
              </button>
              <button
                type="submit"
                disabled={loading}
                className="h-10 px-5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 disabled:opacity-50"
              >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (editingId ? <Upload className="w-5 h-5" /> : <Upload className="w-5 h-5" />)}
                  {editingId ? 'Update Assignment' : 'Publish Assignment'}
              </button>
          </div>
      </form>

      {/* Helper Tip */}
      <div className="flex gap-3 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <Info className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <p className="text-sm text-blue-900">
              <strong>Tip:</strong> You can edit this assignment after publishing, but students who have already submitted work may need to be notified of changes.
          </p>
      </div>

      {/* List (Teacher view of created assignments) */}
      {assignments.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 font-bold text-slate-900">Recently Created</div>
              <div className="divide-y divide-slate-100">
                  {assignments.map(a => (
                      <div key={a.id} className="p-4 sm:px-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                          <div>
                              <h4 className="font-bold text-slate-900">{a.title}</h4>
                              <p className="text-sm text-slate-500 mt-1">Grade {a.targetGrade} • {formatDate(a.createdAt)}</p>
                          </div>
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button onClick={() => handleEdit(a)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Edit2 className="w-4 h-4" /></button>
                              <button onClick={() => handleDelete(a.id!)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      )}

      {/* Preview Modal */}
      {previewCode && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setPreviewCode(null)}>
              <div className="bg-white w-full max-w-4xl h-[80vh] rounded-xl overflow-hidden flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
                  <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                      <h3 className="font-bold">Preview</h3>
                      <button onClick={() => setPreviewCode(null)}><X className="w-6 h-6" /></button>
                  </div>
                  <div className="flex-1 bg-slate-100 relative">
                      {previewCode.startsWith('<iframe') ? (
                          <div dangerouslySetInnerHTML={{ __html: previewCode }} className="w-full h-full absolute inset-0 [&>iframe]:w-full [&>iframe]:h-full" />
                      ) : (
                          <iframe src={previewCode} className="w-full h-full absolute inset-0" />
                      )}
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};
