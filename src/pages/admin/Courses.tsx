import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Course, courseService } from '../../services/course.service';
import { Assignment, assignmentService } from '../../services/assignment.service';
import { useAuth } from '../../hooks/useAuth';
import CloudinaryUploadWidget from '../../components/ui/CloudinaryUploadWidget';
import { SaaSButton } from '../../components/ui/SaaSButton';
import { Plus, Edit2, Trash2, Tag, BookOpen, ToggleLeft, ToggleRight } from 'lucide-react';
import { toast } from 'sonner';
import { Loading } from '../../components/shared/Loading';

export const AdminCourses: React.FC = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState('');
  const [selectedAssignments, setSelectedAssignments] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const unsubCourses = courseService.subscribeToCourses((data) => {
        setCourses(data);
        setLoading(false);
    });

    const unsubAssignments = assignmentService.subscribeToAllAssignments((data) => {
        setAssignments(data);
    });

    return () => {
        unsubCourses();
        unsubAssignments();
    };
  }, []);

  // Auto-heal: Check for ghost assignments when both courses and assignments are loaded
  useEffect(() => {
      if (courses.length > 0 && assignments.length > 0) {
          const assignmentIdsSet = new Set(assignments.map(a => a.id));
          courses.forEach(course => {
              if (course.assignmentIds && course.assignmentIds.length > 0) {
                  const validAssignmentIds = course.assignmentIds.filter(id => assignmentIdsSet.has(id));
                  if (validAssignmentIds.length !== course.assignmentIds.length) {
                      console.log(`Auto-healing course ${course.id}: removing ghost assignments`);
                      // Update the course in the background
                      courseService.updateCourse(course.id, { assignmentIds: validAssignmentIds }).catch(console.error);
                  }
              }
          });
      }
  }, [courses, assignments]);

  const handleOpenModal = (course?: Course) => {
    if (course) {
        setEditingCourse(course);
        setTitle(course.title);
        setDescription(course.description);
        setPrice(course.price);
        setImageUrl(course.imageUrl || '');

        // Filter out ghost assignments before opening the modal
        const assignmentIdsSet = new Set(assignments.map(a => a.id));
        const validAssignmentIds = (course.assignmentIds || []).filter(id => assignmentIdsSet.has(id));
        setSelectedAssignments(validAssignmentIds);

        setIsActive(course.isActive);
    } else {
        setEditingCourse(null);
        setTitle('');
        setDescription('');
        setPrice(0);
        setImageUrl('');
        setSelectedAssignments([]);
        setIsActive(true);
    }
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
          if (editingCourse) {
              await courseService.updateCourse(editingCourse.id, {
                  title, description, price, imageUrl, assignmentIds: selectedAssignments, isActive
              });
              toast.success("Cập nhật khóa học thành công");
          } else {
              await courseService.createCourse({
                  title, description, price, imageUrl, assignmentIds: selectedAssignments, isActive, createdBy: user!.uid
              });
              toast.success("Tạo khóa học thành công");
          }
          setShowModal(false);
      } catch (error) {
          toast.error("Có lỗi xảy ra");
          console.error(error);
      }
  };

  const handleDelete = async (id: string) => {
      if (confirm("Bạn có chắc muốn xóa khóa học này?")) {
          await courseService.deleteCourse(id);
          toast.success("Đã xóa khóa học");
      }
  };

  const toggleAssignment = (id: string) => {
      setSelectedAssignments(prev =>
          prev.includes(id) ? prev.filter(aid => aid !== id) : [...prev, id]
      );
  };

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <PageHeader
        title="Quản lý Khóa học"
        subtitle="Tạo các combo khóa học (bao gồm nhiều bài tập) và định giá bán."
        action={
            <SaaSButton onClick={() => handleOpenModal()} className="flex items-center gap-2">
                <Plus className="w-4 h-4" /> Thêm Khóa học
            </SaaSButton>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
            <div key={course.id} className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                <div className="aspect-video w-full bg-muted relative">
                    {course.imageUrl ? (
                        <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">No Image</div>
                    )}
                    {!course.isActive && (
                        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                            <span className="bg-foreground text-background px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Đã ẩn</span>
                        </div>
                    )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-lg text-card-foreground line-clamp-1">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{course.description}</p>

                    <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4" /> {course.assignmentIds.length} Bài học
                        </div>
                        <div className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                            <Tag className="w-4 h-4" />
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(course.price)}
                        </div>
                    </div>

                    <div className="mt-auto pt-5 flex items-center justify-between border-t border-border">
                        <span className="text-xs text-muted-foreground">{course.enrollmentCount} Lượt mua</span>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => handleOpenModal(course)} className="p-1.5 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                                <Edit2 className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDelete(course.id)} className="p-1.5 text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        {courses.length === 0 && (
            <div className="col-span-full py-12 text-center bg-card rounded-2xl border border-border border-dashed">
                <p className="text-muted-foreground">Chưa có khóa học nào. Hãy tạo khóa học đầu tiên!</p>
            </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
            <div className="bg-card rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl border border-border animate-in zoom-in-95">
                <div className="p-6 border-b border-border flex items-center justify-between">
                    <h2 className="text-xl font-display font-bold text-foreground">
                        {editingCourse ? 'Chỉnh sửa Khóa học' : 'Tạo Khóa học mới'}
                    </h2>
                    <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground">X</button>
                </div>

                <div className="p-6 overflow-y-auto space-y-5">
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Tên khóa học</label>
                        <input
                            required
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="w-full p-3 border border-input rounded-xl bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
                            placeholder="VD: Lập trình ReactJS Thực Chiến..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Mô tả</label>
                        <textarea
                            required
                            rows={3}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className="w-full p-3 border border-input rounded-xl bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm resize-none"
                            placeholder="Mô tả nội dung khóa học..."
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Giá bán (VNĐ)</label>
                            <input
                                required
                                type="number"
                                min={0}
                                value={price}
                                onChange={e => setPrice(Number(e.target.value))}
                                className="w-full p-3 border border-input rounded-xl bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Trạng thái</label>
                            <button
                                type="button"
                                onClick={() => setIsActive(!isActive)}
                                className={`w-full p-3 rounded-xl border flex items-center justify-between font-bold transition-all shadow-sm ${isActive ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600' : 'bg-muted border-input text-muted-foreground'}`}
                            >
                                {isActive ? 'Đang Mở bán' : 'Đang Ẩn'}
                                {isActive ? <ToggleRight className="w-6 h-6" /> : <ToggleLeft className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Ảnh bìa khóa học</label>
                        <CloudinaryUploadWidget
                            onSuccess={(url) => setImageUrl(url)}
                            folder="courses"
                        />
                        {imageUrl && (
                            <div className="mt-3 aspect-video w-48 rounded-xl overflow-hidden border border-border shadow-sm">
                                <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                            </div>
                        )}
                    </div>

                    <div className="pt-4 border-t border-border">
                        <label className="block text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Chọn Bài học (Assignments) vào Combo</label>
                        <div className="space-y-2 max-h-48 overflow-y-auto p-1 scrollbar-hide">
                            {assignments.map(ass => (
                                <label key={ass.id} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${selectedAssignments.includes(ass.id) ? 'border-primary bg-primary/5 shadow-sm' : 'border-input bg-card hover:bg-accent'}`}>
                                    <input
                                        type="checkbox"
                                        checked={selectedAssignments.includes(ass.id)}
                                        onChange={() => toggleAssignment(ass.id)}
                                        className="w-4 h-4 text-primary rounded"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-foreground line-clamp-1">{ass.title}</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Môn: {ass.subject} • Cấp: {ass.gradeLevel}</p>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-border bg-muted/30 rounded-b-2xl flex justify-end gap-3">
                    <button onClick={() => setShowModal(false)} className="px-5 py-2.5 rounded-xl font-semibold hover:bg-muted transition-colors">
                        Hủy
                    </button>
                    <SaaSButton onClick={handleSave}>
                        Lưu Khóa học
                    </SaaSButton>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default AdminCourses;
