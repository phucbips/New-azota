import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, Save, Clock, Shuffle } from 'lucide-react';
import { SmartExamBuilder } from '../../components/assignments/SmartExamBuilder';
import { Question, Assignment } from '../../types';
import { assignmentService } from '../../services/assignment.service';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'sonner';
import { Loading } from '../../components/shared/Loading';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Switch } from '../../components/ui/switch';

export const SmartAssignmentBuilderPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const existingId = searchParams.get('id');
  const courseId = searchParams.get('courseId') || 'general';

  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [durationMin, setDurationMin] = useState(45);
  const [shuffleQuestions, setShuffleQuestions] = useState(false);
  const [shuffleOptions, setShuffleOptions] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (!existingId) return;
    const loadExisting = async () => {
      setIsLoading(true);
      try {
        const assignments = await assignmentService.getAssignments();
        const existing = assignments.find((a) => a.id === existingId);
        if (existing) {
          setTitle(existing.title);
          setDescription(existing.description || '');
          setQuestions(existing.questions || []);
          if (existing.duration || existing.timeLimit) {
            setDurationMin(Number(existing.duration || existing.timeLimit));
          }
          setShuffleQuestions(Boolean(existing.shuffleQuestions));
          setShuffleOptions(Boolean(existing.shuffleOptions));
        } else {
          toast.error('Không tìm thấy bài tập!');
        }
      } catch (error) {
        console.error('Lỗi tải bài tập:', error);
        toast.error('Có lỗi xảy ra khi tải dữ liệu.');
      } finally {
        setIsLoading(false);
      }
    };
    loadExisting();
  }, [existingId]);

  const handleSave = async () => {
    if (!title.trim()) {
      toast.error('Vui lòng nhập tên đề thi.');
      return;
    }

    if (questions.length === 0) {
      toast.error('Đề thi chưa có câu hỏi nào.');
      return;
    }

    const invalidQuestion = questions.find((q) => {
      if (!q.text.trim()) return true;
      if (q.type === 'multiple_choice' || q.type === 'checkbox') {
        return !q.options || q.options.length < 2 || q.correctAnswers.length === 0;
      }
      if (q.type === 'true_false') {
        return !q.subQuestions || q.subQuestions.length === 0;
      }
      if (q.type === 'short_answer') {
        return !q.correctAnswers || q.correctAnswers.length === 0;
      }
      return false;
    });

    if (invalidQuestion) {
      toast.error('Có câu hỏi chưa nhập đủ nội dung hoặc chưa thiết lập đáp án đúng.');
      return;
    }

    if (!user) {
      toast.error('Bạn cần đăng nhập để lưu đề thi.');
      return;
    }

    setIsSaving(true);
    try {
      const totalPoints = questions.reduce((acc, q) => acc + (Number(q.points) || 0), 0);
      const assignmentData: Partial<Assignment> = {
        title,
        description,
        courseId,
        type: 'smart_exam',
        questions,
        totalPoints: Math.round(totalPoints * 100) / 100,
        duration: durationMin,
        timeLimit: durationMin,
        shuffleQuestions,
        shuffleOptions,
        teacherId: user.uid,
      };

      if (existingId) {
        await assignmentService.updateAssignment(existingId, assignmentData);
        toast.success('Đã lưu đề thi thành công!');
      } else {
        await assignmentService.createAssignment(
          assignmentData as Omit<Assignment, 'id' | 'createdAt' | 'updatedAt'>
        );
        toast.success('Đã tạo đề thi mới thành công!');
      }

      navigate(-1);
    } catch (error) {
      console.error('Lỗi lưu bài tập:', error);
      toast.error('Có lỗi xảy ra khi lưu đề thi.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <div className="flex min-h-[calc(100dvh-7rem)] flex-col gap-5">
      {/* TOP BAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-lg font-semibold text-foreground sm:text-xl">
              {existingId ? 'Biên tập Đề thi Chuẩn Azota' : 'Tạo Đề thi Chuẩn Azota'}
            </h1>
            <p className="text-xs text-muted-foreground">
              Hỗ trợ file Word (.docx) gạch chân, dấu *, bảng đáp án, câu Đúng/Sai a-b-c-d và Trả lời ngắn
            </p>
          </div>
        </div>

        <Button onClick={handleSave} disabled={isSaving}>
          <Save />
          {isSaving ? 'Đang lưu...' : 'Lưu đề thi'}
        </Button>
      </div>

      {/* EXAM CONFIG BAR */}
      <div className="grid grid-cols-1 gap-4 rounded-xl border border-border bg-card p-4 md:grid-cols-12">
        <div className="space-y-1 md:col-span-4">
          <label className="text-xs font-medium text-foreground">
            Tên đề thi <span className="text-destructive">*</span>
          </label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="VD: Đề kiểm tra giữa kỳ 1 Toán 12..."
          />
        </div>

        <div className="space-y-1 md:col-span-3">
          <label className="text-xs font-medium text-foreground">Ghi chú / Mô tả</label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Hướng dẫn làm bài..."
          />
        </div>

        <div className="space-y-1 md:col-span-2">
          <label className="flex items-center gap-1 text-xs font-medium text-foreground">
            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
            Thời gian (phút)
          </label>
          <Input
            type="number"
            min={1}
            value={durationMin}
            onChange={(e) => setDurationMin(parseInt(e.target.value, 10) || 45)}
          />
        </div>

        <div className="flex flex-col justify-center gap-2 md:col-span-3">
          <label className="flex items-center justify-between gap-2 text-xs text-foreground">
            <span className="flex items-center gap-1.5">
              <Shuffle className="h-3.5 w-3.5 text-muted-foreground" />
              Đảo thứ tự câu hỏi
            </span>
            <Switch checked={shuffleQuestions} onCheckedChange={setShuffleQuestions} />
          </label>
          <label className="flex items-center justify-between gap-2 text-xs text-foreground">
            <span className="flex items-center gap-1.5">
              <Shuffle className="h-3.5 w-3.5 text-muted-foreground" />
              Đảo phương án A, B, C, D
            </span>
            <Switch checked={shuffleOptions} onCheckedChange={setShuffleOptions} />
          </label>
        </div>
      </div>

      {/* BUILDER */}
      <div className="flex-1">
        <SmartExamBuilder
          questions={questions}
          onChange={setQuestions}
          durationMin={durationMin}
          shuffleQuestions={shuffleQuestions}
          shuffleOptions={shuffleOptions}
        />
      </div>
    </div>
  );
};
