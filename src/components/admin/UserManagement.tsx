import React, { useState, useEffect, useMemo } from 'react';
import { userService } from '../../services/user.service';
import { User, UserRole } from '../../types';
import { Trash2, UserPlus, Loader2, Edit2, Plus, Smartphone, Monitor, Database, BookOpen, Search } from 'lucide-react';
import { toast } from 'sonner';
import { formatDate } from '../../lib/formatters';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
import { DataTable } from '../../components/ui/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { useForm } from 'react-hook-form';
import { Course, courseService } from '../../services/course.service';
import { orderService, Order } from '../../services/order.service';

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
  const [courses, setCourses] = useState<Course[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const selectedRole = watch('role');

  useEffect(() => {
    const unsubCourses = courseService.subscribeToCourses(setCourses);
    const unsubOrders = orderService.subscribeToOrders(setOrders);

    const unsubscribe = userService.subscribeToAllUsers((fetchedUsers) => {
      setUsers(fetchedUsers);
      setIsFetching(false);
    });
    return () => {
      unsubCourses();
      unsubOrders();
      unsubscribe();
    };
  }, []);

  // Bản đồ các khóa học đã sở hữu (hợp nhất từ enrolledCourses + đơn paid/pay_later) của từng user
  const userOwnedCourseIdsMap = useMemo(() => {
    const map = new Map<string, string[]>();
    const validCourseIds = new Set(courses.map(c => c.id));

    users.forEach(u => {
      const set = new Set<string>();
      (u.enrolledCourses || []).forEach(cid => {
        if (validCourseIds.size === 0 || validCourseIds.has(cid)) {
          set.add(cid);
        }
      });
      map.set(u.uid, Array.from(set));
    });

    orders.forEach(o => {
      if ((o.status === 'paid' || o.status === 'pay_later') && o.userId) {
        const existing = new Set<string>(map.get(o.userId) || []);
        if (Array.isArray(o.items)) {
          o.items.forEach(item => {
            if (item.courseId && (validCourseIds.size === 0 || validCourseIds.has(item.courseId))) {
              existing.add(item.courseId);
            }
          });
        } else if ((o as any).courseId) {
          existing.add((o as any).courseId);
        }
        map.set(o.userId, Array.from(existing));
      }
    });

    return map;
  }, [users, orders, courses]);

  const courseTitleMap = useMemo(() => {
    const m = new Map<string, string>();
    courses.forEach(c => m.set(c.id, c.title));
    return m;
  }, [courses]);

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
                    role === 'teacher' ? 'bg-primary/10 text-primary' : 'bg-success/10 text-success'}`}>
                    {role === 'teacher' ? 'Giáo viên' : role === 'student' ? 'Học sinh' : 'Admin'}
                </span>
            )
        }
    },
    {
        id: "enrolledCourses",
        header: "Khóa học đã cấp",
        cell: ({ row }) => {
            const u = row.original;
            const ownedIds = userOwnedCourseIdsMap.get(u.uid) || [];
            return (
                <div className="flex flex-wrap items-center gap-1.5 max-w-xs">
                    {ownedIds.length === 0 ? (
                        <span className="text-xs text-muted-foreground">Chưa cấp</span>
                    ) : (
                        <>
                            {ownedIds.slice(0, 2).map(cid => (
                                <span
                                    key={cid}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-success/10 text-success border border-success/20 max-w-[160px] truncate"
                                    title={courseTitleMap.get(cid) || cid}
                                >
                                    <BookOpen className="w-3 h-3 shrink-0" />
                                    <span className="truncate">{courseTitleMap.get(cid) || 'Khóa học'}</span>
                                </span>
                            ))}
                            {ownedIds.length > 2 && (
                                <span
                                    className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold bg-muted text-foreground"
                                    title={ownedIds.map(id => courseTitleMap.get(id) || id).join(', ')}
                                >
                                    +{ownedIds.length - 2} khóa
                                </span>
                            )}
                        </>
                    )}
                    <button
                        type="button"
                        onClick={() => handleEdit(u)}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium text-primary bg-primary/10 hover:bg-primary/15 transition-colors"
                        title="Cấp hoặc chỉnh sửa khóa học"
                    >
                        + Cấp khóa
                    </button>
                </div>
            );
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
                <button onClick={() => handleEdit(row.original)} className="text-muted-foreground hover:text-primary p-1" title="Chỉnh sửa & Cấp khóa học"><Edit2 className="w-5 h-5" /></button>
                <button onClick={() => handleDelete(row.original.uid)} className="text-muted-foreground hover:text-destructive p-1" title="Xóa người dùng"><Trash2 className="w-5 h-5" /></button>
            </div>
        )
    }
  ], [userOwnedCourseIdsMap, courseTitleMap]);

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
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">Mời người dùng mới</h3>
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
             initialOwnedCourses={userOwnedCourseIdsMap.get(editingUser.uid) || editingUser.enrolledCourses || []}
             onClose={() => setIsEditModalOpen(false)}
             onUpdate={() => {
                 setIsEditModalOpen(false);
                 setEditingUser(null);
             }}
          />
      )}

    </div>
  );
};

const EditUserModal: React.FC<{
    user: User;
    courses: Course[];
    initialOwnedCourses: string[];
    onClose: () => void;
    onUpdate: () => void;
}> = ({ user, courses, initialOwnedCourses, onClose, onUpdate }) => {
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            role: user.role,
            grade: user.grade || '10',
        }
    });
    const [loading, setLoading] = useState(false);
    const [selectedCourses, setSelectedCourses] = useState<string[]>(initialOwnedCourses);
    const [courseSearch, setCourseSearch] = useState('');
    const selectedRole = watch('role');

    const filteredCourses = useMemo(() => {
        if (!courseSearch.trim()) return courses;
        const q = courseSearch.toLowerCase().trim();
        return courses.filter(c => c.title.toLowerCase().includes(q));
    }, [courses, courseSearch]);

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
            toast.success(`Đã cập nhật quyền & khóa học cho ${user.email}`);
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
            <div className="bg-card p-6 rounded-xl w-full max-w-lg shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-1 text-card-foreground">Chỉnh sửa & Cấp khóa học</h3>
                <p className="text-sm text-muted-foreground mb-4">{user.email}</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-muted-foreground">Vai trò</label>
                            <select
                                {...register('role')}
                                className="w-full p-2 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary outline-none text-sm"
                            >
                                <option value="student">Học sinh</option>
                                <option value="teacher">Giáo viên</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        {selectedRole === 'student' && (
                            <div>
                                <label className="block text-sm font-medium mb-1 text-muted-foreground">Khối lớp</label>
                                <select
                                    {...register('grade')}
                                    className="w-full p-2 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary outline-none text-sm"
                                >
                                    <option value="10">Khối 10</option>
                                    <option value="11">Khối 11</option>
                                    <option value="12">Khối 12</option>
                                </select>
                            </div>
                        )}
                    </div>

                    <div className="pt-2">
                        <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-medium text-foreground">
                                Phân quyền Khóa học ({selectedCourses.length}/{courses.length} đã cấp)
                            </label>
                            {courses.length > 0 && (
                                <div className="flex items-center gap-2 text-xs">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedCourses(courses.map(c => c.id))}
                                        className="text-primary hover:underline font-medium"
                                    >
                                        Chọn tất cả
                                    </button>
                                    <span className="text-border">|</span>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedCourses([])}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Bỏ chọn
                                    </button>
                                </div>
                            )}
                        </div>

                        {courses.length > 4 && (
                            <div className="relative mb-2">
                                <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    value={courseSearch}
                                    onChange={(e) => setCourseSearch(e.target.value)}
                                    placeholder="Tìm nhanh khóa học..."
                                    className="w-full pl-9 pr-3 py-1.5 text-sm border border-input rounded-lg bg-background text-foreground focus:ring-1 focus:ring-primary outline-none"
                                />
                            </div>
                        )}

                        <div className="space-y-1.5 max-h-56 overflow-y-auto border border-border p-2.5 rounded-lg bg-background">
                            {filteredCourses.map(course => {
                                const isChecked = selectedCourses.includes(course.id);
                                return (
                                    <div
                                        key={course.id}
                                        onClick={() => toggleCourse(course.id)}
                                        className={`flex items-center gap-2.5 p-2 rounded-lg cursor-pointer transition-colors ${
                                            isChecked ? 'bg-success/10 border border-success/20' : 'hover:bg-muted/60 border border-transparent'
                                        }`}
                                    >
                                        <input
                                            type="checkbox"
                                            id={`course-${course.id}`}
                                            checked={isChecked}
                                            onChange={() => {}}
                                            className="w-4 h-4 text-primary rounded focus:ring-primary pointer-events-none"
                                        />
                                        <div className="text-sm font-medium text-foreground flex-1 flex justify-between items-center gap-2">
                                            <span className="line-clamp-1">{course.title}</span>
                                            <span className={`text-xs shrink-0 px-2 py-0.5 rounded-full ${
                                                isChecked ? "bg-success/20 text-success font-semibold" : "text-muted-foreground"
                                            }`}>
                                                {isChecked ? "Đã cấp" : "Chưa cấp"}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                            {filteredCourses.length === 0 && (
                                <p className="text-xs text-muted-foreground py-3 text-center">Không tìm thấy khóa học phù hợp.</p>
                            )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1.5">
                            Học sinh được cấp khóa học sẽ thấy trạng thái <strong>Đã sở hữu / Vào học ngay</strong> và nhận toàn bộ bài tập của khóa đó.
                        </p>
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t border-border">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
