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

  // Filter States - Simplified as Table handles search, but we might want advanced filtering later
  // For now, let's pass all users to the table and let it handle search if we want client side search.
  // But wait, the previous implementation had server-side subscription but client-side filtering?
  // Yes, `userService.subscribeToAllUsers` gets all users.

  const selectedRole = watch('role');

  useEffect(() => {
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
        accessorKey: "isWhitelisted",
        header: "Trạng thái",
        cell: ({ row }) => (
            <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${row.original.isWhitelisted ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                <span className="text-sm text-muted-foreground">{row.original.isWhitelisted ? 'Active' : 'Inactive'}</span>
            </div>
        )
    },
    {
        id: "actions",
        cell: ({ row }) => (
            <div className="flex items-center justify-end gap-2">
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
                        className="flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-muted-foreground px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                        title="Fix missing joinedAt data"
                    >
                         <Database className="w-5 h-5" />
                         {migrationLoading ? '...' : 'Fix Data'}
                    </button>
                </div>

                <button
                    onClick={() => setIsAddMode(!isAddMode)}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                >
                    <Plus className="w-5 h-5" />
                    Thêm người dùng
                </button>
            </div>
        </div>

      {/* Add User Form (Collapsible) */}
      {isAddMode && (
          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm animate-fadeIn">
            <h3 className="text-xl font-display font-bold mb-4 text-card-foreground">Mời người dùng mới</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
                <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Email</label>
                <input
                {...register('email', { required: 'Vui lòng nhập email' })}
                type="email"
                className="w-full p-3 border border-input bg-background text-foreground rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
                placeholder="user@example.com"
                />
            </div>

            <div className="w-full md:w-40">
                <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Vai trò</label>
                <select
                {...register('role')}
                className="w-full p-3 border border-input bg-background text-foreground rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
                >
                <option value="student">Học sinh</option>
                <option value="teacher">Giáo viên</option>
                <option value="admin">Admin</option>
                </select>
            </div>

            {selectedRole === 'student' && (
                <div className="w-full md:w-40 animate-fadeIn">
                <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Khối</label>
                <select
                    {...register('grade')}
                    className="w-full p-3 border border-input bg-background text-foreground rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
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
                className="w-full md:w-auto px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
            >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <UserPlus className="w-5 h-5" />}
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

const EditUserModal: React.FC<{ user: User, onClose: () => void, onUpdate: () => void }> = ({ user, onClose, onUpdate }) => {
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            role: user.role,
            grade: user.grade || '10',
            isWhitelisted: user.isWhitelisted
        }
    });
    const [loading, setLoading] = useState(false);
    const selectedRole = watch('role');

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            await userService.updateUser(user.uid, {
                role: data.role,
                grade: data.role === 'student' ? data.grade : null,
                isWhitelisted: data.isWhitelisted
            });
            toast.success('User updated successfully');
            onUpdate();
        } catch (error) {
            toast.error('Update failed');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200 px-4">
            <div className="bg-card p-8 rounded-2xl w-full max-w-md shadow-2xl border border-border animate-in zoom-in-95 duration-200">
                <h3 className="text-2xl font-display font-bold mb-1 text-card-foreground">Chỉnh sửa người dùng</h3>
                <p className="text-sm font-medium text-muted-foreground mb-6">{user.email}</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Role</label>
                        <select
                            {...register('role')}
                            className="w-full p-3 border border-input rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
                        >
                            <option value="student">Học sinh</option>
                            <option value="teacher">Giáo viên</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {selectedRole === 'student' && (
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Grade Level</label>
                            <select
                                {...register('grade')}
                                className="w-full p-3 border border-input rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
                            >
                                <option value="10">Khối 10</option>
                                <option value="11">Khối 11</option>
                                <option value="12">Khối 12</option>
                            </select>
                        </div>
                    )}

                    <div className="flex items-center gap-3 p-4 border border-border/50 rounded-xl bg-muted/30">
                        <input
                            type="checkbox"
                            id="isWhitelisted"
                            {...register('isWhitelisted')}
                            className="w-5 h-5 text-primary rounded focus:ring-primary"
                        />
                        <label htmlFor="isWhitelisted" className="text-sm font-bold text-foreground">Kích hoạt tài khoản (Active)</label>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 text-muted-foreground hover:bg-muted font-semibold rounded-xl transition-colors"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-5 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-md disabled:opacity-50"
                        >
                            {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
