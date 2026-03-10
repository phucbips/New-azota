import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { courseService } from '../../services/course.service';
import { Course } from '../../types';
import {
  PlusCircle,
  Trash2,
  Edit,
  Image as ImageIcon,
  Loader2,
  Search,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../../hooks/useAuth';
import { Timestamp } from 'firebase/firestore';

export const AdminCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Form State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    coverImageUrl: '',
    isActive: true,
  });

  const { user } = useAuth();

  useEffect(() => {
    const unsubscribe = courseService.subscribeToAllCourses((data) => {
      setCourses(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      price: 0,
      coverImageUrl: '',
      isActive: true,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (course: Course) => {
    setFormData({
      title: course.title,
      description: course.description,
      price: course.price,
      coverImageUrl: course.coverImageUrl || '',
      isActive: course.isActive,
    });
    setEditingId(course.id || null);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa khóa học này không?')) return;
    try {
      await courseService.deleteCourse(id);
      toast.success('Đã xóa khóa học thành công');
    } catch (error) {
      toast.error('Lỗi khi xóa khóa học');
      console.error(error);
    }
  };

  const toggleActive = async (id: string, currentStatus: boolean) => {
    try {
      await courseService.updateCourse(id, { isActive: !currentStatus });
      toast.success(`Đã ${!currentStatus ? 'bật' : 'tắt'} khóa học`);
    } catch (error) {
      toast.error('Lỗi khi cập nhật trạng thái');
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      toast.error('Vui lòng nhập tên khóa học');
      return;
    }
    if (!user) {
      toast.error('Bạn cần đăng nhập để thực hiện');
      return;
    }

    setSaving(true);
    try {
      if (editingId) {
        await courseService.updateCourse(editingId, {
          title: formData.title.trim(),
          description: formData.description.trim(),
          price: Number(formData.price),
          coverImageUrl: formData.coverImageUrl.trim(),
          isActive: formData.isActive,
        });
        toast.success('Đã cập nhật khóa học');
      } else {
        await courseService.createCourse({
          title: formData.title.trim(),
          description: formData.description.trim(),
          price: Number(formData.price),
          coverImageUrl: formData.coverImageUrl.trim(),
          isActive: formData.isActive,
          teacherId: user.uid,
        });
        toast.success('Đã tạo khóa học mới');
      }
      resetForm();
    } catch (error: any) {
      toast.error(`Lỗi: ${error.message}`);
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const filteredCourses = courses.filter(c =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6 pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <PageHeader title="Quản lý Khóa Học" subtitle="Tạo và quản lý các khóa học trong hệ thống." />
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
        >
          <PlusCircle className="h-4 w-4" /> Thêm khóa học
        </button>
      </div>

      {showForm && (
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
          <h3 className="mb-4 text-lg font-bold text-foreground">{editingId ? 'Cập nhật khóa học' : 'Thêm khóa học mới'}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-muted-foreground">Tên khóa học *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(p => ({ ...p, title: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
                  placeholder="Nhập tên khóa học..."
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-muted-foreground">Giá (VNĐ) *</label>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={formData.price}
                  onChange={(e) => setFormData(p => ({ ...p, price: Number(e.target.value) }))}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
                  placeholder="Ví dụ: 500000"
                />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-sm font-semibold text-muted-foreground">Mô tả</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(p => ({ ...p, description: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors min-h-[80px]"
                  placeholder="Mô tả ngắn gọn về khóa học..."
                />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-sm font-semibold text-muted-foreground">URL Ảnh bìa</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <ImageIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      type="url"
                      value={formData.coverImageUrl}
                      onChange={(e) => setFormData(p => ({ ...p, coverImageUrl: e.target.value }))}
                      className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary transition-colors"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2 flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData(p => ({ ...p, isActive: e.target.checked }))}
                  className="rounded border-border text-primary focus:ring-primary h-4 w-4"
                />
                <label htmlFor="isActive" className="text-sm font-medium text-foreground cursor-pointer">
                  Khóa học đang hoạt động (Hiển thị cho học sinh)
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-border mt-6">
              <button
                type="submit"
                disabled={saving}
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
              >
                {saving ? (
                  <span className="flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Đang lưu...</span>
                ) : 'Lưu khóa học'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="rounded-full border border-border bg-background px-6 py-2.5 text-sm font-bold text-muted-foreground hover:bg-muted transition-colors"
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Tìm kiếm khóa học..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Course List */}
      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : filteredCourses.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-12 text-center text-muted-foreground flex flex-col items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
            <Search className="h-6 w-6 text-muted-foreground/50" />
          </div>
          <p>Không tìm thấy khóa học nào.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourses.map((course) => (
            <div key={course.id} className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
              <div className="relative aspect-video bg-muted border-b border-border overflow-hidden">
                {course.coverImageUrl ? (
                  <img src={course.coverImageUrl} alt={course.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex w-full h-full items-center justify-center text-muted-foreground/50">
                    <ImageIcon className="h-10 w-10" />
                  </div>
                )}
                <div className="absolute top-2 right-2 flex gap-1">
                  <span className={`flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold shadow-sm backdrop-blur-md ${
                    course.isActive ? 'bg-emerald-500/90 text-white' : 'bg-zinc-500/90 text-white'
                  }`}>
                    {course.isActive ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                    {course.isActive ? 'Hoạt động' : 'Tạm ẩn'}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h4 className="font-bold text-foreground line-clamp-1 mb-1" title={course.title}>{course.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1">
                  {course.description || 'Không có mô tả.'}
                </p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                  <span className="font-bold text-primary">
                    {course.price > 0 ? formatPrice(course.price) : 'Miễn phí'}
                  </span>

                  <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => toggleActive(course.id!, course.isActive)}
                      title={course.isActive ? "Ẩn khóa học" : "Hiện khóa học"}
                      className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                      {course.isActive ? <XCircle className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => handleEdit(course)}
                      title="Sửa khóa học"
                      className="rounded-lg p-2 text-blue-500 hover:bg-blue-500/10 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(course.id!)}
                      title="Xóa khóa học"
                      className="rounded-lg p-2 text-destructive hover:bg-destructive/10 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
