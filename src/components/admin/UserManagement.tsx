import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { userService } from '../../services/user.service';
import { User, UserRole } from '../../types';
import { Trash2, UserPlus, Loader2, Edit2, MoreVertical, Plus, Filter, Smartphone, Monitor, Database } from 'lucide-react';
import { toast } from 'sonner';
import { formatDate } from '../../lib/formatters';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
import { DataTable } from '../../components/ui/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { useForm } from 'react-hook-form';
import { Course, courseService } from '../../services/course.service';
import { orderService } from '../../services/order.service';

type CreateUserForm = {
  email: string;
  role: UserRole;
  grade?: string;
};

export const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { register, handleSubmit, watch, reset } = useForm<CreateUserForm>({
      defaultValues: { role: 'student', grade: '10' }
  });

  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [isAddMode, setIsAddMode] = useState(false);
  const [migrationLoading, setMigrationLoading] = useState(false);

  // Edit Mode State
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [enrollingUser, setEnrollingUser] = useState<User | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);

  // Filter States - Simplified as Table handles search, but we might want advanced filtering later
  // For now, let's pass all users to the table and let it handle search if we want client side search.
  // But wait, the previous implementation had server-side subscription but client-side filtering?
  // Yes, `userService.subscribeToAllUsers` gets all users.

  const selectedRole = watch('role');

  useEffect(() => {
    courseService.getActiveCourses().then(setCourses);

    const unsubscribe = userService.subscribeToAllUsers((fetchedUsers) => {
      setUsers(fetchedUsers);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  const onSubmit = async (data: CreateUserForm) => {
    setLoading(true);
    try {
      if (data.role === 'student' && !data.grade) {
          toast.error('Vui lòng chọn Khối cho học sinh');
          return;
      }

      await userService.createInvitation(
          data.email,
          data.role,
          data.role === 'student' ? (data.grade || null) : null
      );
      toast.success(`Đã mời ${data.email} thành công!`);
      reset({ role: 'student', grade: '10', email: '' });
      setIsAddMode(false);
    } catch (error: any) {
      toast.error(error.message || 'Có lỗi xảy ra khi tạo tài khoản');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (uid: string) => {
      if(!confirm('Bạn có chắc chắn muốn xóa người dùng này?')) return;
      try {
          await userService.deleteUser(uid);
          toast.success('Đã xóa người dùng');
      } catch (error) {
          toast.error('Lỗi khi xóa người dùng');
      }
  };

  const handleBulkDelete = async (selectedUsers: User[]) => {
      if(!confirm(`Bạn có chắc chắn muốn xóa ${selectedUsers.length} người dùng đã chọn?`)) return;
      try {
          await Promise.all(selectedUsers.map(u => userService.deleteUser(u.uid)));
          toast.success(`Đã xóa ${selectedUsers.length} người dùng`);
      } catch (error) {
          toast.error('Lỗi khi xóa người dùng');
      }
  };

  const handleEdit = (user: User) => {
      setEditingUser(user);
      setIsEditModalOpen(true);
  };

  const handleRunMigration = async () => {
      if (!confirm('Hành động này sẽ cập nhật dữ liệu cho các user cũ (thêm joinedAt nếu thiếu). Bạn có chắc chắn?')) return;
      setMigrationLoading(true);
      try {
          await userService.runMigration();
          toast.success('Migration hoàn tất!');
      } catch (error) {
          console.error(error);
          toast.error('Có lỗi xảy ra khi migration.');
      } finally {
          setMigrationLoading(false);
      }
  };

  const formatLastActive = (user: User) => {
     const device = user.lastDevice || 'Unknown';
     const timeAgo = user.lastLoginAt ? formatDistanceToNow(user.lastLoginAt.toDate(), { addSuffix: true, locale: vi }) : '';

     if (!user.lastLoginAt) return '--';

     return (
         <div className="flex flex-col">
             <span className="text-foreground">{timeAgo}</span>
             <span className="text-xs text-muted-foreground flex items-center gap-1">
                 {device === 'PC' ? <Monitor className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                 {device}
             </span>
         </div>
     );
  };

  // Define Columns for DataTable
  const columns: ColumnDef<User>[] = useMemo(() => [
    {
        id: "select",
        header: ({ table }) => (
          <input
            type="checkbox"
            className="rounded border-input text-primary w-4 h-4"
            checked={table.getIsAllPageRowsSelected()}
            onChange={(e) => table.toggleAllPageRowsSelected(!!e.target.checked)}
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            className="rounded border-input text-primary w-4 h-4"
            checked={row.getIsSelected()}
            onChange={(e) => row.toggleSelected(!!e.target.checked)}
          />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "email",
        header: "Người dùng",
        cell: ({ row }) => {
            const u = row.original;
            return (
                <div className="flex items-center gap-3">
                    <img src={u.photoURL} alt="" className="h-10 w-10 rounded-full bg-muted object-cover" />
                    <div>
                    <div className="font-medium text-foreground">{u.displayName || u.email.split('@')[0]}</div>
                    <div className="text-sm text-muted-foreground">{u.email}</div>
                        {u.grade && <div className="text-xs text-muted-foreground/80">Khối {u.grade}</div>}
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "role",
        header: "Vai trò",
        cell: ({ row }) => {
            const role = row.original.role;
            return (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                    ${role === 'admin' ? 'bg-primary/10 text-primary border border-primary/20' :
                    role === 'teacher' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'}`}>
                    {role === 'teacher' ? 'Giáo viên' : role === 'student' ? 'Học sinh' : 'Admin'}
                </span>
            )
        }
    },
    {
        accessorKey: "joinedAt",
        header: "Tham gia",
        cell: ({ row }) => <span className="text-muted-foreground">{formatDate(row.original.joinedAt)}</span>
    },
    {
        id: "lastActive",
        header: "Đăng nhập cuối",
        cell: ({ row }) => formatLastActive(row.original)
    },
    {
        id: "actions",
        cell: ({ row }) => (
            <div className="flex items-center justify-end gap-2">
                {row.original.role === 'student' && (
                    <button
                        onClick={() => setEnrollingUser(row.original)}
                        className="text-xs font-bold text-primary bg-primary/10 hover:bg-primary/20 px-2 py-1 rounded-md transition-colors"
                    >
                        Cấp khóa học
                    </button>
                )}
                <button onClick={() => handleEdit(row.original)} className="text-muted-foreground hover:text-primary p-1"><Edit2 className="w-5 h-5" /></button>
                <button onClick={() => handleDelete(row.original.uid)} className="text-muted-foreground hover:text-destructive p-1"><Trash2 className="w-5 h-5" /></button>
            </div>
        )
    }
  ], []);

  return (
    <div className="flex flex-col gap-6">
        {/* Actions Bar */}
        <div className="flex flex-col gap-4">
             {/* Header with Add Button */}
             <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <button
                        onClick={handleRunMigration}
                        disabled={migrationLoading}
                        className="flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-muted-foreground px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                        title="Fix missing joinedAt data"
                    >
                         <Database className="w-5 h-5" />
                         {migrationLoading ? '...' : 'Fix Data'}
                    </button>
                </div>

                <button
                    onClick={() => setIsAddMode(!isAddMode)}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-primary/20 whitespace-nowrap"
                >
                    <Plus className="w-5 h-5" />
                    Thêm người dùng
                </button>
            </div>
        </div>

      {/* Add User Form (Collapsible) */}
      {isAddMode && (
          <div className="bg-card p-6 rounded-xl border border-border shadow-sm animate-fadeIn">
            <h3 className="text-lg font-bold mb-4 text-card-foreground">Mời người dùng mới</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
                <label className="block text-sm font-medium mb-1 text-muted-foreground">Email</label>
                <input
                {...register('email', { required: 'Vui lòng nhập email' })}
                type="email"
                className="w-full p-2.5 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-primary outline-none"
                placeholder="user@example.com"
                />
            </div>

            <div className="w-full md:w-40">
                <label className="block text-sm font-medium mb-1 text-muted-foreground">Vai trò</label>
                <select
                {...register('role')}
                className="w-full p-2.5 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-primary outline-none"
                >
                <option value="student">Học sinh</option>
                <option value="teacher">Giáo viên</option>
                <option value="admin">Admin</option>
                </select>
            </div>

            {selectedRole === 'student' && (
                <div className="w-full md:w-40 animate-fadeIn">
                <label className="block text-sm font-medium mb-1 text-muted-foreground">Khối</label>
                <select
                    {...register('grade')}
                    className="w-full p-2.5 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-primary outline-none"
                >
                    <option value="10">Khối 10</option>
                    <option value="11">Khối 11</option>
                    <option value="12">Khối 12</option>
                </select>
                </div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserPlus className="w-4 h-4" />}
                {loading ? 'Đang thêm...' : 'Mời'}
            </button>
            </form>
        </div>
      )}

      {/* Replaced Manual Table with DataTable */}
      <DataTable
        columns={columns}
        data={users}
        searchColumn="email"
        searchPlaceholder="Tìm kiếm theo email..."
        isLoading={isFetching}
        onBulkDelete={handleBulkDelete}
      />

      {/* Edit Modal */}
      {isEditModalOpen && editingUser && (
          <EditUserModal
             user={editingUser}
             courses={courses}
             onClose={() => setIsEditModalOpen(false)}
             onUpdate={() => {
                 setIsEditModalOpen(false);
                 setEditingUser(null);
             }}
          />
      )}

      {/* Enroll Modal */}
      {enrollingUser && (
          <EnrollUserModal
              user={enrollingUser}
              courses={courses}
              onClose={() => setEnrollingUser(null)}
          />
      )}
    </div>
  );
};

const EnrollUserModal: React.FC<{ user: User, courses: Course[], onClose: () => void }> = ({ user, courses, onClose }) => {
    const [selectedCourseId, setSelectedCourseId] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEnroll = async () => {
        if (!selectedCourseId) return toast.error("Vui lòng chọn khóa học");
        setLoading(true);
        try {
            const course = courses.find(c => c.id === selectedCourseId);
            if (!course) return;

            // Admin manual enrollment bypasses payment, direct to paid status
            await orderService.createOrder({
                userId: user.uid,
                userEmail: user.email,
                userName: user.displayName || user.email,
                items: [{ courseId: course.id, courseTitle: course.title, price: 0 }],
                originalAmount: 0,
                discount: 0,
                amount: 0,
                paymentMethod: 'cash',
                status: 'paid', // Immediately paid/active
            });

            // Update course enrollment count
            await courseService.updateCourse(course.id, {
                enrollmentCount: (course.enrollmentCount || 0) + 1
            });

            toast.success(`Đã cấp khóa học cho ${user.email}`);
            onClose();
        } catch (error) {
            console.error(error);
            toast.error("Lỗi cấp khóa học");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn px-4">
            <div className="bg-card p-6 rounded-xl w-full max-w-md shadow-2xl border border-border">
                <h3 className="text-xl font-bold mb-4 text-card-foreground">Cấp khóa học cho học sinh</h3>
                <p className="text-sm text-muted-foreground mb-4">Học sinh: {user.email}</p>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-muted-foreground">Chọn khóa học</label>
                        <select
                            value={selectedCourseId}
                            onChange={(e) => setSelectedCourseId(e.target.value)}
                            className="w-full p-2.5 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                        >
                            <option value="">-- Chọn khóa học --</option>
                            {courses.map(course => (
                                <option key={course.id} value={course.id}>{course.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                            Hủy
                        </button>
                        <button
                            onClick={handleEnroll}
                            disabled={loading || !selectedCourseId}
                            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Đang cấp...' : 'Cấp quyền truy cập'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EditUserModal: React.FC<{ user: User, courses: Course[], onClose: () => void, onUpdate: () => void }> = ({ user, courses, onClose, onUpdate }) => {
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            role: user.role,
            grade: user.grade || '10',
        }
    });
    const [loading, setLoading] = useState(false);
    const [selectedCourses, setSelectedCourses] = useState<string[]>(user.enrolledCourses || []);
    const selectedRole = watch('role');

    const toggleCourse = (courseId: string) => {
        if (selectedCourses.includes(courseId)) {
            setSelectedCourses(selectedCourses.filter(id => id !== courseId));
        } else {
            setSelectedCourses([...selectedCourses, courseId]);
        }
    };

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            await userService.updateUser(user.uid, {
                role: data.role,
                grade: data.role === 'student' ? data.grade : null,
                enrolledCourses: selectedCourses,
            });
            toast.success('Cập nhật người dùng thành công');
            onUpdate();
        } catch (error) {
            toast.error('Cập nhật thất bại');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn px-4">
            <div className="bg-card p-6 rounded-xl w-full max-w-md shadow-2xl border border-border">
                <h3 className="text-xl font-bold mb-4 text-card-foreground">Edit User</h3>
                <p className="text-sm text-muted-foreground mb-4">{user.email}</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-muted-foreground">Role</label>
                        <select
                            {...register('role')}
                            className="w-full p-2 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                        >
                            <option value="student">Học sinh</option>
                            <option value="teacher">Giáo viên</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {selectedRole === 'student' && (
                        <div>
                            <label className="block text-sm font-medium mb-1 text-muted-foreground">Grade Level</label>
                            <select
                                {...register('grade')}
                                className="w-full p-2 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                            >
                                <option value="10">Khối 10</option>
                                <option value="11">Khối 11</option>
                                <option value="12">Khối 12</option>
                            </select>
                        </div>
                    )}

                    <div className="pt-2">
                        <label className="block text-sm font-medium mb-2 text-foreground">Phân quyền Khóa học / Môn học</label>
                        <div className="space-y-2 max-h-48 overflow-y-auto border border-border p-3 rounded-lg bg-background">
                            {courses.map(course => (
                                <div key={course.id} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id={`course-${course.id}`}
                                        checked={selectedCourses.includes(course.id)}
                                        onChange={() => toggleCourse(course.id)}
                                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                                    />
                                    <label htmlFor={`course-${course.id}`} className="text-sm font-medium text-muted-foreground flex-1 cursor-pointer">
                                        {course.title}
                                    </label>
                                </div>
                            ))}
                            {courses.length === 0 && (
                                <p className="text-xs text-muted-foreground">Chưa có khóa học nào hoạt động.</p>
                            )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Người dùng sẽ nhận được tất cả bài tập thuộc các khóa học được chọn.</p>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
