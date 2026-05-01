import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Assignment } from '../../types';
import CloudinaryUploadWidget from '../ui/CloudinaryUploadWidget';
import { SubjectSelector } from './SubjectSelector';
import { Loader2, Save } from 'lucide-react';
import { toast } from 'sonner';
import { SmartExamBuilder } from './SmartExamBuilder';
import { Question } from '../../types';

const extractIframeSrc = (input: string) => {
  // Check if input looks like an iframe tag
  if (input.trim().toLowerCase().startsWith('<iframe') && input.includes('src=')) {
      const match = input.match(/src=["']([^"']+)["']/);
      if (match && match[1]) {
          return match[1];
      }
  }
  return input.trim();
};

const assignmentSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  subject: z.string().min(1, "Subject is required"),
  topic: z.string().min(2, "Topic is required"),
  gradeLevel: z.coerce.number().min(10).max(12),
  type: z.enum(['embed', 'video', 'native_code', 'smart_exam']).default('embed'),
  embedUrl: z.string().transform(extractIframeSrc), // Removed strict URL validation to allow raw HTML/code when type is native_code
  coverImageUrl: z.string().optional(),
});

type AssignmentFormData = z.infer<typeof assignmentSchema>;

interface AssignmentFormProps {
  defaultValues?: Partial<Assignment>;
  onSubmit: (data: AssignmentFormData) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export const AssignmentForm: React.FC<AssignmentFormProps> = ({
  defaultValues,
  onSubmit,
  onCancel,
  isLoading = false
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<AssignmentFormData>({
    resolver: zodResolver(assignmentSchema),
    defaultValues: {
      title: defaultValues?.title || '',
      subject: defaultValues?.subject || '',
      topic: defaultValues?.topic || '',
      gradeLevel: defaultValues?.gradeLevel || 10,
      type: defaultValues?.type || 'embed',
      embedUrl: defaultValues?.embedUrl || '',
      coverImageUrl: defaultValues?.coverImageUrl || '',
    }
  });

  const subject = watch('subject');
  const type = watch('type');
  const coverImageUrl = watch('coverImageUrl');

  const [smartQuestions, setSmartQuestions] = React.useState<Question[]>(defaultValues?.questions || []);

  const handleFormSubmit = async (data: AssignmentFormData) => {
    try {
      // Pass the questions array if it's a smart exam
      const finalData = data.type === 'smart_exam'
          ? { ...data, questions: smartQuestions }
          : data;
      await onSubmit(finalData as any);
    } catch (error) {
      console.error(error);
      toast.error('Failed to save assignment');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {/* Title */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-slate-700">Assignment Title <span className="text-red-500">*</span></label>
          <input
            {...register('title')}
            className="w-full h-11 px-3 rounded-[6px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/12 focus:border-primary transition-all text-sm"
            placeholder="e.g. Calculus Chapter 1 Review"
          />
          {errors.title && <span className="text-xs text-red-500">{errors.title.message}</span>}
        </div>

        {/* Subject Selector */}
        <SubjectSelector
            value={subject}
            onChange={(val) => setValue('subject', val, { shouldValidate: true })}
            error={errors.subject?.message}
        />

        {/* Topic */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-slate-700">Topic / Chapter <span className="text-red-500">*</span></label>
          <input
            {...register('topic')}
            className="w-full h-11 px-3 rounded-[6px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/12 focus:border-primary transition-all text-sm"
            placeholder="e.g. Chapter 1: Functions"
          />
          {errors.topic && <span className="text-xs text-red-500">{errors.topic.message}</span>}
        </div>

        {/* Type & Grade Level */}
        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-slate-700">Grade Level <span className="text-red-500">*</span></label>
              <select
                {...register('gradeLevel')}
                className="w-full h-11 px-3 rounded-[6px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/12 focus:border-primary transition-all text-sm bg-white"
              >
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
              {errors.gradeLevel && <span className="text-xs text-red-500">{errors.gradeLevel.message}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-slate-700">Loại bài học <span className="text-red-500">*</span></label>
              <select
                {...register('type')}
                className="w-full h-11 px-3 rounded-[6px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/12 focus:border-primary transition-all text-sm bg-white"
              >
                <option value="embed">Bài tập (Azota, Quizlet...)</option>
                <option value="video">Video (Youtube...)</option>
                <option value="native_code">Thiết kế Trực tiếp (HTML/JS)</option>
                <option value="smart_exam">Đề thi Thông minh (DOCX/AI)</option>
              </select>
            </div>
        </div>

        {/* Content Input (Depends on type) */}
        {type === 'smart_exam' ? (
            <div className="bg-primary/10 border border-primary/20 rounded-[12px] p-6 shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m10 10-2 2 2 2"/><path d="m14 14 2-2-2-2"/></svg>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Đề thi Thông minh</h4>
                <p className="text-slate-600 mb-6 max-w-sm">Tạo đề thi từ file DOCX hoặc văn bản thô, hỗ trợ nhận diện tự động bằng AI và Regex.</p>
                <div className="text-sm text-amber-700 bg-amber-50 px-4 py-3 rounded-[6px] border border-amber-200 font-medium">
                    Tính năng này yêu cầu không gian làm việc rộng. Sau khi nhấn "Save", bạn sẽ được chuyển đến trang Builder toàn màn hình để tải lên đề và biên tập chi tiết.
                </div>
            </div>
        ) : type === 'native_code' ? (
            <div className="flex flex-col gap-3">
              <div className="bg-primary/10 border border-primary/20 rounded-[12px] p-4 text-sm text-primary">
                  <p className="font-bold mb-1">Tạo bài tập tự động (HTML/JS Native):</p>
                  <p>Bạn có thể dán mã HTML/CSS/JS thuần túy của mình vào ô bên dưới. Hệ thống sẽ tự động hiển thị nó dưới dạng một ứng dụng web thu nhỏ trong bài học của học viên.</p>
                  <p className="mt-2 text-xs opacity-80">Gợi ý: Dùng prompt "Trợ lý Trích xuất Đề thi Azota" với AI để chuyển đổi ảnh đề thi thành mảng text, sau đó dán vào mã HTML mẫu để có ngay form trắc nghiệm tương tác!</p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 h-[500px]">
                  <div className="flex-1 flex flex-col gap-1.5 h-full">
                      <div className="flex justify-between items-center">
                          <label className="text-sm font-bold text-slate-700">Mã HTML/JS (Editor) <span className="text-red-500">*</span></label>
                      </div>
                      <textarea
                        {...register('embedUrl')}
                        className="flex-1 w-full p-4 rounded-[12px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/12 focus:border-primary transition-all text-sm font-mono bg-[#1e1e1e] text-[#d4d4d4] resize-none"
                        placeholder="<!DOCTYPE html>\n<html lang='vi'>\n<head>\n  <meta charset='UTF-8'>\n  <title>Quiz</title>\n</head>\n<body>\n  <h1>Bài kiểm tra của bạn</h1>\n</body>\n</html>"
                      />
                      {errors.embedUrl && <span className="text-xs text-red-500">{errors.embedUrl.message}</span>}
                  </div>

                  {/* Live Preview Pane */}
                  <div className="flex-1 flex flex-col gap-1.5 h-full hidden md:flex">
                      <label className="text-sm font-bold text-slate-700">Xem trước (Live Preview)</label>
                      <div className="flex-1 border border-border rounded-[12px] overflow-hidden bg-white">
                          <iframe
                             srcDoc={watch('embedUrl') || '<h3>Preview will appear here...</h3>'}
                             className="w-full h-full border-none"
                             sandbox="allow-scripts allow-modals"
                          />
                      </div>
                  </div>
              </div>
            </div>
        ) : (
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-slate-700">
                  {type === 'video' ? 'Link Video Youtube' : 'Link Bài tập / Mã Iframe'} <span className="text-red-500">*</span>
              </label>
              <input
                {...register('embedUrl')}
                className="w-full h-11 px-3 rounded-[6px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/12 focus:border-primary transition-all text-sm"
                placeholder={type === 'video' ? "https://youtube.com/watch?v=..." : "Dán link Azota hoặc mã <iframe> vào đây..."}
              />
              {errors.embedUrl && <span className="text-xs text-red-500">{errors.embedUrl.message}</span>}
            </div>
        )}

        {/* Cover Image (Cloudinary) */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-slate-700">Cover Image (Optional)</label>
          <CloudinaryUploadWidget
            onUploadSuccess={(url) => setValue('coverImageUrl', url)}
            defaultImage={defaultValues?.coverImageUrl}
            label="Upload Cover Image"
          />
          <input type="hidden" {...register('coverImageUrl')} />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
        <button
          type="button"
          onClick={onCancel}
          className="h-10 px-4 rounded-[6px] text-slate-600 font-bold text-sm hover:bg-slate-100 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="h-10 px-6 rounded-[6px] bg-primary text-white font-bold text-sm hover:bg-primary-hover shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save Assignment
        </button>
      </div>
    </form>
  );
};
