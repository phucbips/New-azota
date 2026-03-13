import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Assignment } from '../../types';
import CloudinaryUploadWidget from '../ui/CloudinaryUploadWidget';
import { SubjectSelector } from './SubjectSelector';
import { Loader2, Save } from 'lucide-react';
import { toast } from 'sonner';

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
  embedUrl: z.string().transform(extractIframeSrc).pipe(z.string().url("Must be a valid URL hoặc Iframe")),
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
      embedUrl: defaultValues?.embedUrl || '',
      coverImageUrl: defaultValues?.coverImageUrl || '',
    }
  });

  const subject = watch('subject');
  const coverImageUrl = watch('coverImageUrl');

  const handleFormSubmit = async (data: AssignmentFormData) => {
    try {
      await onSubmit(data);
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
            className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
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
            className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
            placeholder="e.g. Chapter 1: Functions"
          />
          {errors.topic && <span className="text-xs text-red-500">{errors.topic.message}</span>}
        </div>

        {/* Grade Level */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-slate-700">Grade Level <span className="text-red-500">*</span></label>
          <select
            {...register('gradeLevel')}
            className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm bg-white"
          >
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
          {errors.gradeLevel && <span className="text-xs text-red-500">{errors.gradeLevel.message}</span>}
        </div>

        {/* Embed URL */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-slate-700">Embed URL (hoặc Mã nhúng Iframe) <span className="text-red-500">*</span></label>
          <input
            {...register('embedUrl')}
            className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
            placeholder="Dán link Azota, Youtube hoặc mã <iframe> vào đây..."
          />
          {errors.embedUrl && <span className="text-xs text-red-500">{errors.embedUrl.message}</span>}
        </div>

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
          className="h-10 px-4 rounded-lg text-slate-600 font-bold text-sm hover:bg-slate-100 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="h-10 px-6 rounded-lg bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save Assignment
        </button>
      </div>
    </form>
  );
};
