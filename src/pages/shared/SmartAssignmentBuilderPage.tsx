import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ChevronLeft, Save, FileQuestion, BookOpen, Clock, AlertCircle } from 'lucide-react';
import { SmartExamBuilder } from '../../components/assignments/SmartExamBuilder';
import { Question, Assignment } from '../../types';
import { assignmentService } from '../../services/assignment.service';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'sonner';
import { Loading } from '../../components/shared/Loading';

export const SmartAssignmentBuilderPage: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const location = useLocation();

    // Check if we are editing an existing assignment
    const searchParams = new URLSearchParams(location.search);
    const existingId = searchParams.get('id');
    const courseId = searchParams.get('courseId');

    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [durationMin, setDurationMin] = useState(60);
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        if (existingId) {
            const loadExisting = async () => {
                setIsLoading(true);
                try {
                    const id = existingId;
                    const courseIdFromUrl = courseId;
                    // Note: We might need a direct fetch by ID in lessonsService, or we can just fetch all assignments for the course.
                    if (courseIdFromUrl) {
                        const assignments = await assignmentService.getAllAssignments();
                        const existing = assignments.find(a => a.id === id);
                        if (existing) {
                            setTitle(existing.title);
                            // @ts-ignore
                            setDescription(existing.description || '');
                            setQuestions(existing.questions || []);
                            // @ts-ignore
                            if (existing.duration) setDurationMin(existing.duration);
                        } else {
                            toast.error('Không tìm thấy bài tập!');
                        }
                    } else {
                        toast.error('Thiếu ID khóa học để tải bài tập!');
                    }
                } catch (error) {
                    console.error('Lỗi tải bài tập:', error);
                    toast.error('Có lỗi xảy ra khi tải dữ liệu.');
                } finally {
                    setIsLoading(false);
                }
            };
            loadExisting();
        }
    }, [existingId, courseId]);

    const handleSave = async () => {
        if (!title.trim()) {
            toast.error('Vui lòng nhập tên đề thi');
            return;
        }

        if (questions.length === 0) {
            toast.error('Đề thi chưa có câu hỏi nào');
            return;
        }

        // Validate questions
        const invalidQuestion = questions.find(q =>
            !q.text.trim() ||
            (q.type === 'multiple_choice' && (!q.options || q.options.length === 0 || q.correctAnswers.length === 0))
        );

        if (invalidQuestion) {
            toast.error('Có câu hỏi chưa nhập đủ nội dung, đáp án hoặc chưa chọn đáp án đúng.');
            return;
        }

        if (!user || !courseId) {
            toast.error('Thiếu thông tin người dùng hoặc khóa học (courseId). Vui lòng thử lại từ màn hình quản lý bài tập.');
            return;
        }

        setIsSaving(true);
        try {
            const assignmentData: Partial<Assignment> = {
                title,
                description,
                courseId: courseId,
                type: 'smart_exam',
                questions,
                // @ts-ignore
                duration: durationMin,
                teacherId: user.uid,
                isPublished: true,
                order: 99 // Put at end for now
            };

            if (existingId) {
                await assignmentService.updateAssignment(existingId, assignmentData);
                toast.success('Cập nhật đề thi thành công!');
            } else {
                await assignmentService.createAssignment(assignmentData as Omit<Assignment, 'id' | 'createdAt' | 'updatedAt'>);
                toast.success('Tạo đề thi thành công!');
            }

            // Go back to the previous page (likely the assignment management page)
            navigate(-1);
        } catch (error) {
            console.error('Lỗi lưu bài tập:', error);
            toast.error('Có lỗi xảy ra khi lưu đề thi.');
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loading />
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen bg-slate-100 overflow-hidden">
            {/* TOP HEADER BAR */}
            <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 shadow-sm z-10 shrink-0">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div>
                        <h1 className="text-xl font-extrabold text-slate-800">
                            {existingId ? 'Chỉnh sửa Đề thi Thông minh' : 'Tạo Đề thi Thông minh'}
                        </h1>
                        <p className="text-sm text-slate-500">Phân tích bằng AI hoặc Regex từ file DOCX</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="px-4 py-1.5 bg-amber-50 border border-amber-200 text-amber-700 rounded-lg text-sm font-medium flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Đang ở chế độ nháp
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-md transition-all disabled:opacity-50"
                    >
                        {isSaving ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <Save className="w-5 h-5" />
                        )}
                        Lưu Đề thi
                    </button>
                </div>
            </div>

            {/* MAIN CONTENT WORKSPACE */}
            <div className="flex-1 overflow-hidden flex flex-col p-6 gap-6">

                {/* SETTINGS BAR */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm shrink-0 flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <label className="block text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                            <FileQuestion className="w-4 h-4 text-slate-400" />
                            Tên Đề thi <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none text-slate-800 font-medium bg-slate-50 focus:bg-white transition-colors"
                            placeholder="VD: Đề thi Giữa kỳ Tiếng Anh 10..."
                        />
                    </div>

                    <div className="flex-1">
                        <label className="block text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4 text-slate-400" />
                            Mô tả (Tùy chọn)
                        </label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none text-slate-800 bg-slate-50 focus:bg-white transition-colors"
                            placeholder="Mô tả ngắn gọn về đề thi..."
                        />
                    </div>

                    <div className="w-full md:w-48">
                        <label className="block text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-slate-400" />
                            Thời gian (phút)
                        </label>
                        <input
                            type="number"
                            min="1"
                            value={durationMin}
                            onChange={(e) => setDurationMin(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none text-slate-800 font-bold bg-slate-50 focus:bg-white transition-colors"
                        />
                    </div>
                </div>

                {/* BUILDER WORKSPACE */}
                <div className="flex-1 overflow-hidden">
                    <SmartExamBuilder
                        questions={questions}
                        onChange={setQuestions}
                    />
                </div>
            </div>
        </div>
    );
};
