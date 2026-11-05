import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PageHeader } from '../../components/ui/PageHeader';
import { assignmentService } from '../../services/assignment.service';
import { Assignment } from '../../types';
import { useAuth } from '../../hooks/useAuth';
import { Plus, Edit2, Trash2, Search, BookOpen, GraduationCap, RotateCcw } from 'lucide-react';
import { formatDate } from '../../lib/formatters';
import { AssignmentForm } from '../../components/assignments/AssignmentForm';
import { toast } from 'sonner';
import { EmptyState } from '../../components/shared/EmptyState';
import { Skeleton } from '../../components/shared/Skeleton';

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-card rounded-xl border border-border w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-5 border-b border-border flex justify-between items-center">
          <h3 className="font-semibold text-lg">{title}</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground/70 hover:text-muted-foreground"
          >
            ✕
          </button>
        </div>
        <div className="p-5 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

const GRADE_OPTIONS = [
  { value: 'all', label: 'Tất cả khối' },
  { value: '10', label: 'Khối 10' },
  { value: '11', label: 'Khối 11' },
  { value: '12', label: 'Khối 12' },
] as const;

export const TeacherAssignments: React.FC = () => {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const urlSearchQuery = (searchParams.get('q') || '').toLowerCase();
  const [localSearch, setLocalSearch] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAssignment, setEditingAssignment] = useState<Assignment | null>(null);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    const unsubscribe = assignmentService.subscribeToTeacherAssignments(
      user.uid,
      (data) => {
        setAssignments(data);
        setIsFetching(false);
      }
    );
    return () => unsubscribe();
  }, [user]);

  const handleCreate = () => {
    setEditingAssignment(null);
    setIsModalOpen(true);
  };

  const handleEdit = (assignment: Assignment) => {
    if (assignment.type === 'smart_exam' && assignment.id) {
      navigate(
        `/teacher/assignments/builder?id=${assignment.id}&courseId=${
          assignment.courseId || 'general'
        }`
      );
      return;
    }
    setEditingAssignment(assignment);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bạn có chắc chắn muốn xóa bài tập này?')) return;
    try {
      await assignmentService.deleteAssignment(id);
      toast.success('Đã xóa bài tập');
    } catch (error) {
      toast.error('Không thể xóa bài tập');
    }
  };

  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      if (editingAssignment) {
        await assignmentService.updateAssignment(editingAssignment.id!, {
          ...data,
          gradeLevel: Number(data.gradeLevel),
        });
        toast.success('Đã cập nhật bài tập');
        if (data.type === 'smart_exam') {
          window.open(
            `/teacher/assignments/builder?id=${editingAssignment.id}&courseId=${
              data.courseId || 'general'
            }`,
            '_blank'
          );
          setIsModalOpen(false);
          return;
        }
      } else {
        const newAssignmentId = await assignmentService.createAssignment({
          ...data,
          gradeLevel: Number(data.gradeLevel),
          teacherId: user!.uid,
          creatorName: user!.displayName || user!.email,
        });
        toast.success('Đã tạo bài tập mới');
        if (data.type === 'smart_exam' && newAssignmentId) {
          window.open(
            `/teacher/assignments/builder?id=${newAssignmentId}&courseId=${
              data.courseId || 'general'
            }`,
            '_blank'
          );
          setIsModalOpen(false);
          return;
        }
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      toast.error('Thao tác thất bại');
    } finally {
      setLoading(false);
    }
  };

  const subjectStats = useMemo(() => {
    const baseList =
      selectedGrade === 'all'
        ? assignments
        : assignments.filter((a) => String(a.gradeLevel) === selectedGrade);

    const counts: Record<string, number> = {};
    baseList.forEach((a) => {
      const subj = (a.subject || 'Chung').trim() || 'Chung';
      counts[subj] = (counts[subj] || 0) + 1;
    });

    const allSubjectsSet = new Set<string>();
    assignments.forEach((a) => {
      const subj = (a.subject || 'Chung').trim() || 'Chung';
      allSubjectsSet.add(subj);
    });

    return Array.from(allSubjectsSet)
      .sort((a, b) => a.localeCompare(b, 'vi'))
      .map((name) => ({
        name,
        count: counts[name] || 0,
      }));
  }, [assignments, selectedGrade]);

  const gradeCounts = useMemo(() => {
    const baseList =
      selectedSubject === 'all'
        ? assignments
        : assignments.filter(
            (a) => ((a.subject || 'Chung').trim() || 'Chung') === selectedSubject
          );

    const map: Record<string, number> = {
      all: baseList.length,
      '10': 0,
      '11': 0,
      '12': 0,
    };
    baseList.forEach((a) => {
      const g = String(a.gradeLevel || '');
      if (map[g] !== undefined) {
        map[g] += 1;
      }
    });
    return map;
  }, [assignments, selectedSubject]);

  const effectiveQuery = (localSearch.trim() || urlSearchQuery).toLowerCase();

  const filteredAssignments = useMemo(() => {
    return assignments.filter((assignment) => {
      if (
        selectedGrade !== 'all' &&
        String(assignment.gradeLevel) !== selectedGrade
      ) {
        return false;
      }

      const normSubject = (assignment.subject || 'Chung').trim() || 'Chung';
      if (selectedSubject !== 'all' && normSubject !== selectedSubject) {
        return false;
      }

      if (effectiveQuery) {
        const haystack = [
          assignment.title,
          assignment.topic,
          assignment.subject,
          String(assignment.gradeLevel),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(effectiveQuery)) {
          return false;
        }
      }

      return true;
    });
  }, [assignments, selectedGrade, selectedSubject, effectiveQuery]);

  const hasActiveFilter =
    selectedGrade !== 'all' || selectedSubject !== 'all' || Boolean(localSearch.trim());

  const resetFilters = () => {
    setSelectedGrade('all');
    setSelectedSubject('all');
    setLocalSearch('');
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          title="My Assignments"
          description="Quản lý bài tập bạn đã tạo theo Môn học và Khối lớp 10, 11, 12."
        />
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => navigate('/teacher/assignments/builder')}
            className="h-10 px-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold rounded-lg border border-border transition-all flex items-center gap-2 text-sm"
          >
            <Plus className="w-4 h-4" />
            Tạo Đề thi Azota (.docx)
          </button>
          <button
            onClick={handleCreate}
            className="h-10 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all flex items-center gap-2 text-sm"
          >
            <Plus className="w-4 h-4" />
            Create New
          </button>
        </div>
      </div>

      {/* Filter Bar: Grade Level (10, 11, 12) + Subject + Search */}
      <div className="bg-card rounded-xl border border-border p-4 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Grade Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>Khối lớp:</span>
            </div>
            {GRADE_OPTIONS.map((g) => {
              const active = selectedGrade === g.value;
              const count = gradeCounts[g.value] ?? 0;
              return (
                <button
                  key={g.value}
                  type="button"
                  onClick={() => setSelectedGrade(g.value)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 border ${
                    active
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-muted-foreground border-border hover:bg-muted/60 hover:text-foreground'
                  }`}
                >
                  <span>{g.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] ${
                      active
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input & Reset */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Tìm tên bài tập, chủ đề..."
                className="w-full h-9 pl-9 pr-3 rounded-lg border border-border bg-background text-xs outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            {hasActiveFilter && (
              <button
                type="button"
                onClick={resetFilters}
                className="h-9 px-3 rounded-lg border border-border bg-muted/40 hover:bg-muted text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1.5 shrink-0 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Đặt lại
              </button>
            )}
          </div>
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap pt-3 border-t border-border/70">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
            <BookOpen className="w-4 h-4 text-primary" />
            <span>Môn học:</span>
          </div>
          <button
            type="button"
            onClick={() => setSelectedSubject('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors border ${
              selectedSubject === 'all'
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-muted-foreground border-border hover:bg-muted/60 hover:text-foreground'
            }`}
          >
            Tất cả môn ({selectedGrade === 'all' ? assignments.length : gradeCounts[selectedGrade] ?? 0})
          </button>

          {subjectStats.map((subj) => {
            const active = selectedSubject === subj.name;
            return (
              <button
                key={subj.name}
                type="button"
                onClick={() => setSelectedSubject(subj.name)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 border ${
                  active
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-muted-foreground border-border hover:bg-muted/60 hover:text-foreground'
                }`}
              >
                <span>{subj.name}</span>
                <span
                  className={`px-1.5 py-0.2 rounded text-[10px] ${
                    active
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {subj.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* List */}
      {isFetching ? (
        <div className="bg-card rounded-xl border border-border p-6 space-y-4">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      ) : filteredAssignments.length > 0 ? (
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="px-6 py-3 bg-muted/30 border-b border-border flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Hiển thị <strong className="text-foreground">{filteredAssignments.length}</strong> / {assignments.length} bài tập
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-semibold text-foreground">Assignment</th>
                  <th className="px-6 py-4 font-semibold text-foreground">Môn học</th>
                  <th className="px-6 py-4 font-semibold text-foreground">Chủ đề (Topic)</th>
                  <th className="px-6 py-4 font-semibold text-foreground">Khối lớp</th>
                  <th className="px-6 py-4 font-semibold text-foreground">Ngày tạo</th>
                  <th className="px-6 py-4 font-semibold text-foreground text-right">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredAssignments.map((assignment) => (
                  <tr
                    key={assignment.id}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {assignment.coverImageUrl ? (
                          <img
                            src={assignment.coverImageUrl}
                            className="w-10 h-10 rounded-lg object-cover bg-muted"
                            alt=""
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground/70 font-semibold text-xs">
                            IMG
                          </div>
                        )}
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground">
                            {assignment.title}
                          </span>
                          <a
                            href={assignment.embedUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-primary hover:underline truncate max-w-[150px]"
                          >
                            View Source
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold">
                        {assignment.subject || 'Chung'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {assignment.topic}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full bg-muted text-foreground text-xs font-semibold border border-border">
                        Khối {assignment.gradeLevel}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {formatDate(assignment.createdAt)}
                    </td>
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
        <div className="bg-card rounded-xl border border-border p-6">
          <EmptyState
            title="Không tìm thấy bài tập phù hợp"
            description={
              hasActiveFilter
                ? 'Không có bài tập nào khớp với bộ lọc Môn học / Khối lớp đang chọn.'
                : 'Hãy tạo bài tập mới để bắt đầu.'
            }
            icon={Search}
            action={
              hasActiveFilter ? (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-semibold hover:bg-secondary/80 border border-border"
                >
                  <RotateCcw className="w-4 h-4" />
                  Xóa bộ lọc
                </button>
              ) : (
                <button
                  onClick={handleCreate}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90"
                >
                  <Plus className="w-4 h-4" />
                  Create Assignment
                </button>
              )
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
