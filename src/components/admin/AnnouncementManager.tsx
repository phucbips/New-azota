import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { announcementService } from '../../services/announcement.service';
import { Announcement } from '../../types';
import CloudinaryUploadWidget from '../ui/CloudinaryUploadWidget';
import { toast } from 'sonner';
import { Megaphone, Trash2, Eye, EyeOff, Plus, Save } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { format } from 'date-fns';

const announcementSchema = z.object({
  title: z.string().min(3, "Tiêu đề quá ngắn"),
  content: z.string().min(10, "Nội dung quá ngắn"),
  imageUrl: z.string().optional()
});

type AnnouncementFormData = z.infer<typeof announcementSchema>;

export const AnnouncementManager: React.FC = () => {
  const { user } = useAuth();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isCreating, setIsCreating] = useState(false);

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<AnnouncementFormData>({
    resolver: zodResolver(announcementSchema)
  });

  useEffect(() => {
    const unsubscribe = announcementService.subscribeToAnnouncements(true, setAnnouncements);
    return unsubscribe;
  }, []);

  const onSubmit = async (data: AnnouncementFormData) => {
    if (!user) return;
    try {
      await announcementService.createAnnouncement({
        ...data,
        authorId: user.uid
      });
      toast.success('Đăng thông báo thành công');
      reset();
      setIsCreating(false);
    } catch (error) {
      console.error(error);
      toast.error('Lỗi khi đăng thông báo');
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Bạn có chắc muốn xóa thông báo này?')) {
        await announcementService.deleteAnnouncement(id);
        toast.success('Đã xóa thông báo');
    }
  };

  const handleToggle = async (item: Announcement) => {
    await announcementService.toggleActive(item.id, item.isActive);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-[6px] text-purple-600 dark:text-purple-400">
                <Megaphone className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-foreground">Quản lý Bảng tin</h2>
        </div>
        <button
            onClick={() => setIsCreating(!isCreating)}
            className="px-4 py-2 bg-foreground text-background rounded-[6px] text-sm font-bold hover:bg-foreground/90 transition-colors flex items-center gap-2"
        >
            {isCreating ? 'Hủy' : <><Plus className="w-4 h-4" /> Tạo thông báo mới</>}
        </button>
      </div>

      {isCreating && (
        <div className="bg-surface rounded-[12px] border border-border shadow-sm p-6 animate-in slide-in-from-top-4">
             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Tiêu đề</label>
                    <input
                        {...register('title')}
                        className="w-full px-3 py-2 border border-input rounded-[6px] bg-background text-foreground outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Tiêu đề thông báo..."
                    />
                    {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Nội dung</label>
                    <textarea
                        {...register('content')}
                        rows={4}
                        className="w-full px-3 py-2 border border-input rounded-[6px] bg-background text-foreground outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Nội dung chi tiết..."
                    />
                    {errors.content && <p className="text-xs text-red-500 mt-1">{errors.content.message}</p>}
                </div>

                <div>
                     <label className="block text-sm font-medium text-muted-foreground mb-1">Hình ảnh đính kèm (Tùy chọn)</label>
                     <div className="max-w-md">
                        <CloudinaryUploadWidget
                            label=""
                            onUploadSuccess={(url) => setValue('imageUrl', url)}
                        />
                     </div>
                </div>

                <div className="pt-2">
                    <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground font-bold rounded-[6px] hover:bg-primary/90 shadow-lg shadow-primary/30 flex items-center gap-2">
                        <Save className="w-4 h-4" /> Đăng tin
                    </button>
                </div>
             </form>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {announcements.map(item => (
            <div key={item.id} className={`bg-surface border rounded-[12px] p-4 flex gap-4 ${!item.isActive ? 'opacity-60 border-dashed' : 'border-border'}`}>
                {item.imageUrl && (
                    <img src={item.imageUrl} alt="" className="w-24 h-24 object-cover rounded-[6px] bg-muted flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-card-foreground truncate">{item.title}</h3>
                        <div className="flex items-center gap-2">
                             <button
                                onClick={() => handleToggle(item)}
                                className={`p-1.5 rounded-md transition-colors ${item.isActive ? 'text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20' : 'text-muted-foreground hover:bg-muted'}`}
                                title={item.isActive ? "Đang hiển thị" : "Đang ẩn"}
                             >
                                {item.isActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                             </button>
                             <button
                                onClick={() => handleDelete(item.id)}
                                className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                             >
                                <Trash2 className="w-4 h-4" />
                             </button>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{item.content}</p>
                    <p className="text-xs text-muted-foreground/60 mt-2">
                        Đăng lúc: {item.createdAt?.toMillis ? format(item.createdAt.toDate(), 'dd/MM/yyyy HH:mm') : 'Unknown'}
                    </p>
                </div>
            </div>
        ))}
        {announcements.length === 0 && (
            <div className="text-center py-12 text-muted-foreground border-2 border-dashed border-border rounded-[12px]">
                Chưa có thông báo nào.
            </div>
        )}
      </div>
    </div>
  );
};
