import React, { useMemo, useState, useEffect } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { assignmentService } from '../../services/assignment.service';
import { Assignment } from '../../types';
import { useAuth } from '../../hooks/useAuth';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { AssignmentForm } from '../../components/assignments/AssignmentForm';
import { toast } from 'sonner';
import { useDashboardSearch } from '../../contexts/DashboardSearchContext';

// Reusing the inline Modal from TeacherAssignments for speed/consistency in this turn.
const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600">✕</button>
                </div>
                <div className="p-5 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const AdminAssignments: React.FC = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAssignment, setEditingAssignment] = useState<Assignment | null>(null);
  const [loading, setLoading] = useState(false);
  const { searchQuery } = useDashboardSearch();

  useEffect(() => {
    // Admin sees ALL assignments
    const unsubscribe = assignmentService.subscribeToAllAssignments((data) => {
      setAssignments(data);
    });
    return () => unsubscribe();
  }, []); // Run once on mount

  const filteredAssignments = useMemo(() => {
      const term = searchQuery.trim().toLowerCase();
      if (!term) return assignments;
      return assignments.filter((assignment) => {
          const titleMatch = assignment.title?.toLowerCase().includes(term);
          const subjectMatch = assignment.subject?.toLowerCase().includes(term);
          return Boolean(titleMatch || subjectMatch);
      });
  }, [assignments, searchQuery]);

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

  const handleSubmit = async (data: any) => {
      setLoading(true);
      try {
          if (editingAssignment) {
              await assignmentService.updateAssignment(editingAssignment.id!, {
                  ...data,
                  gradeLevel: Number(data.gradeLevel)
              });
              toast.success('Assignment updated');
          } else {
              if (!user) return;
              await assignmentService.createAssignment({
                  ...data,
                  gradeLevel: Number(data.gradeLevel),
                  teacherId: user.uid // Admin creating assignment
              });
              toast.success('Assignment created');
          }
          setIsModalOpen(false);
      } catch (error) {
          console.error(error);
          toast.error('Operation failed');
      } finally {
          setLoading(false);
      }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
            title="All Assignments"
            description="Manage all assignments across the platform."
        />
        <button
            onClick={handleCreate}
            className="h-10 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-sm shadow-blue-600/20 transition-all flex items-center gap-2"
        >
            <Plus className="w-5 h-5" />
            Create Assignment
        </button>
      </div>

      {/* List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                          <th className="px-6 py-4 font-bold text-slate-700">Assignment</th>
                          <th className="px-6 py-4 font-bold text-slate-700">Topic</th>
                          <th className="px-6 py-4 font-bold text-slate-700">Grade</th>
                          <th className="px-6 py-4 font-bold text-slate-700">Creator</th>
                          <th className="px-6 py-4 font-bold text-slate-700 text-right">Actions</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                      {filteredAssignments.length > 0 ? filteredAssignments.map((assignment) => (
                          <tr key={assignment.id} className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4">
                                  <div className="flex items-center gap-3">
                                      {assignment.coverImageUrl ? (
                                          <img src={assignment.coverImageUrl} className="w-10 h-10 rounded-lg object-cover bg-slate-100" />
                                      ) : (
                                          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs">IMG</div>
                                      )}
                                      <div className="flex flex-col">
                                          <span className="font-bold text-slate-900">{assignment.title}</span>
                                          <a href={assignment.embedUrl} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline truncate max-w-[150px]">
                                              Link
                                          </a>
                                      </div>
                                  </div>
                              </td>
                              <td className="px-6 py-4 text-slate-600">{assignment.topic}</td>
                              <td className="px-6 py-4">
                                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
                                      Grade {assignment.gradeLevel}
                                  </span>
                              </td>
                              <td className="px-6 py-4 text-slate-500 font-mono text-xs">
                                  {(assignment.teacherId || 'unknown').slice(0, 8)}...
                              </td>
                              <td className="px-6 py-4 text-right">
                                  <div className="flex justify-end gap-2">
                                      <button
                                        onClick={() => handleEdit(assignment)}
                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                      >
                                          <Edit2 className="w-4 h-4" />
                                      </button>
                                      <button
                                        onClick={() => handleDelete(assignment.id!)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                      >
                                          <Trash2 className="w-4 h-4" />
                                      </button>
                                  </div>
                              </td>
                          </tr>
                      )) : (
                          <tr>
                              <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                  No assignments found.
                              </td>
                          </tr>
                      )}
                  </tbody>
              </table>
          </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingAssignment ? 'Edit Assignment (Admin)' : 'Create Assignment (Admin)'}
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
