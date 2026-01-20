import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { notificationService } from '../../services/notification.service';
import { toast } from 'sonner';
import { Send, Users, User, Shield } from 'lucide-react';

const notificationSchema = z.object({
  title: z.string().min(3, "Tiêu đề quá ngắn"),
  message: z.string().min(5, "Nội dung quá ngắn"),
  type: z.enum(['info', 'warning', 'success']),
  targetAudience: z.enum(['all', 'student', 'teacher', 'specific']),
  receiverId: z.string().optional()
});

type NotificationFormData = z.infer<typeof notificationSchema>;

export const NotificationManager: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<NotificationFormData>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      type: 'info',
      targetAudience: 'all'
    }
  });

  const targetAudience = watch('targetAudience');

  const onSubmit = async (data: NotificationFormData) => {
    try {
      setLoading(true);
      await notificationService.createNotification({
        title: data.title,
        message: data.message,
        type: data.type,
        targetAudience: data.targetAudience,
        receiverId: data.receiverId
      });
      toast.success('Gửi thông báo thành công!');
      reset();
    } catch (error) {
      console.error(error);
      toast.error('Lỗi khi gửi thông báo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
            <Send className="w-5 h-5" />
        </div>
        <h2 className="text-lg font-bold text-slate-900">Gửi thông báo</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tiêu đề</label>
                <input
                    {...register('title')}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                    placeholder="VD: Thông báo bảo trì..."
                />
                {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Loại thông báo</label>
                <select
                    {...register('type')}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white"
                >
                    <option value="info">Thông tin (Xanh dương)</option>
                    <option value="warning">Cảnh báo (Cam)</option>
                    <option value="success">Thành công (Xanh lá)</option>
                </select>
            </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nội dung</label>
            <textarea
                {...register('message')}
                rows={3}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                placeholder="Nhập nội dung thông báo..."
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Đối tượng nhận</label>
                <select
                    {...register('targetAudience')}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white"
                >
                    <option value="all">Tất cả người dùng</option>
                    <option value="student">Học sinh</option>
                    <option value="teacher">Giáo viên</option>
                    <option value="specific">Người dùng cụ thể (Theo ID)</option>
                </select>
            </div>

            {targetAudience === 'specific' && (
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">User ID</label>
                    <input
                        {...register('receiverId')}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                        placeholder="Nhập UID người nhận..."
                    />
                </div>
            )}
        </div>

        <div className="pt-2">
            <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 disabled:opacity-50 flex items-center gap-2"
            >
                <Send className="w-4 h-4" />
                {loading ? 'Đang gửi...' : 'Gửi thông báo'}
            </button>
        </div>
      </form>
    </div>
  );
};
