import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../../components/ui/PageHeader';
import { useNavigate } from 'react-router-dom';
import { assignmentService } from '../../services/assignment.service';
import { Assignment } from '../../types';
import { useAuth } from '../../hooks/useAuth';
import { Plus, Edit2, Trash2, Search } from 'lucide-react';
import { formatDate } from '../../lib/formatters';
import { AssignmentForm } from '../../components/assignments/AssignmentForm';
import { toast } from 'sonner';
import { EmptyState } from '../../components/shared/EmptyState';
import { Skeleton } from '../../components/shared/Skeleton';

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-card rounded-xl shadow-md w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-5 border-b border-border flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <button onClick={onClose} className="text-muted-foreground/70 hover:text-muted-foreground">✕</button>
                </div>
                <div className="p-5 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const TeacherAssignments: React.FC = () => {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const searchQuery = (searchParams.get('q') || '').toLowerCase();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAssignment, setEditingAssignment] = useState<Assignment | null>(null);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (!user) return;
    const unsubscribe = assignmentService.subscribeToTeacherAssignments(user.uid, (data) => {
      setAssignments(data);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, [user]);

  const handleCreate = () => {
      setEditingAssignment(null);
      setIsModalOpen(true);
  };

  const handleEdit = (assignment: Assignment) => {
      setEditingAssignment(assignment);
      setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
      if (!confirm('Are you sure you want to delete this assignment?')) return;
      try {
          await assignmentService.deleteAssignment(id);
          toast.success('Assignment deleted');
      } catch (error) {
          toast.error('Failed to delete assignment');
      }
  };

  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
      setLoading(true);
      try {
          if (editingAssignment) {
              await assignmentService.updateAssignment(editingAssignment.id!, {
                  ...data,
                  gradeLevel: Number(data.gradeLevel)
              });
              toast.success('Assignment updated');
              if (data.type === 'smart_exam') {
                  window.open(`/teacher/assignments/builder?id=${editingAssignment.id}&courseId=${data.courseId || 'general'}`, '_blank'); setIsModalOpen(false);
                  return;
              }
          } else {
              const newAssignmentId = await assignmentService.createAssignment({
                  ...data,
                  gradeLevel: Number(data.gradeLevel),
                  teacherId: user!.uid,
                  creatorName: user!.displayName || user!.email
              });
              toast.success('Assignment created');
              if (data.type === 'smart_exam' && newAssignmentId) {
                  window.open(`/teacher/assignments/builder?id=${newAssignmentId}&courseId=${data.courseId || 'general'}`, '_blank'); setIsModalOpen(false);
                  return;
              }
          }
          setIsModalOpen(false);
      } catch (error) {
          console.error(error);
          toast.error('Operation failed');
      } finally {
          setLoading(false);
      }
  };

  const filteredAssignments = useMemo(() => {
      if (!searchQuery) return assignments;
      return assignments.filter((assignment) => {
        const haystack = [
          assignment.title,
          assignment.topic,
          assignment.subject,
          String(assignment.gradeLevel),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(searchQuery);
      });
  }, [assignments, searchQuery]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
            title="My Assignments"
            description="Manage the assignments you have created."
        />
        <button
            onClick={handleCreate}
            className="h-10 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2"
        >
            <Plus className="w-5 h-5" />
            Create New
        </button>
      </div>

      {/* Stats / Filters (Optional placeholder) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-card p-4 rounded-xl border border-border shadow-sm flex flex-col">
              <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Total Assignments</span>
              <span className="text-2xl font-semibold text-foreground">{assignments.length}</span>
          </div>
      </div>

      {/* List */}
      {isFetching ? (
        <div className="bg-card rounded-xl shadow-sm border border-border p-6 space-y-4">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      ) : filteredAssignments.length > 0 ? (
        <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-muted/50 border-b border-border">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-foreground">Assignment</th>
                            <th className="px-6 py-4 font-semibold text-foreground">Topic</th>
                            <th className="px-6 py-4 font-semibold text-foreground">Grade</th>
                            <th className="px-6 py-4 font-semibold text-foreground">Date</th>
                            <th className="px-6 py-4 font-semibold text-foreground text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {filteredAssignments.map((assignment) => (
                            <tr key={assignment.id} className="hover:bg-muted transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        {assignment.coverImageUrl ? (
                                            <img src={assignment.coverImageUrl} className="w-10 h-10 rounded-lg object-cover bg-muted" />
                                        ) : (
                                            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground/70 font-semibold text-xs">IMG</div>
                                        )}
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-foreground">{assignment.title}</span>
                                            <a href={assignment.embedUrl} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline truncate max-w-[150px]">
                                                View Source
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-muted-foreground">{assignment.topic}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold border border-border">
                                        Grade {assignment.gradeLevel}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-muted-foreground">{formatDate(assignment.createdAt)}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button
                                          onClick={() => handleEdit(assignment)}
                                          className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                          onClick={() => handleDelete(assignment.id!)}
                                          className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      ) : (
        <div className="bg-card rounded-xl border border-border shadow-sm p-6">
          <EmptyState
            title="No assignments found"
            description="Try adjusting your search or create a new assignment."
            icon={Search}
            action={
              <button
                onClick={handleCreate}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90"
              >
                <Plus className="w-4 h-4" />
                Create Assignment
              </button>
            }
          />
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingAssignment ? 'Edit Assignment' : 'Create New Assignment'}
      >
          <AssignmentForm
            defaultValues={editingAssignment || {}}
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
            isLoading={loading}
          />
      </Modal>
    </div>
  );
};
