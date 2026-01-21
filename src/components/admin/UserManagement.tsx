import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { userService } from '../../services/user.service';
import { User, UserRole } from '../../types';
import { Trash2, UserPlus, Loader2, Edit2, Search, MoreVertical, Plus, Filter, Smartphone, Monitor, Database } from 'lucide-react';
import { toast } from 'sonner';
import { formatDate } from '../../lib/formatters';
import { Skeleton } from '../shared/Skeleton';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';

type CreateUserForm = {
  email: string;
  role: UserRole;
  grade?: string;
};

export const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit, watch, reset } = useForm<CreateUserForm>({
      defaultValues: { role: 'student', grade: '10' }
  });

  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [isAddMode, setIsAddMode] = useState(false); // Toggle form visibility
  const [searchTerm, setSearchTerm] = useState('');

  const [migrationLoading, setMigrationLoading] = useState(false);

  // Edit Mode State
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Filter States
  const [roleFilter, setRoleFilter] = useState<UserRole | 'all'>('all');
  const [gradeFilter, setGradeFilter] = useState<string | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');

  const selectedRole = watch('role');

  useEffect(() => {
    const unsubscribe = userService.subscribeToAllUsers((fetchedUsers) => {
      setUsers(fetchedUsers);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
      setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  // Filter Logic
  useEffect(() => {
      let results = users;

      // Search Term
      if (searchTerm) {
          const lowerTerm = searchTerm.toLowerCase();
          results = results.filter(u =>
              (u.email?.toLowerCase().includes(lowerTerm) || u.displayName?.toLowerCase().includes(lowerTerm))
          );
      }

      // Role Filter
      if (roleFilter !== 'all') {
          results = results.filter(u => u.role === roleFilter);
      }

      // Grade Filter
      if (gradeFilter !== 'all') {
           results = results.filter(u => u.grade === gradeFilter);
      }

      // Status Filter
      if (statusFilter !== 'all') {
          const isActive = statusFilter === 'active';
          results = results.filter(u => u.isWhitelisted === isActive);
      }

      setFilteredUsers(results);
  }, [searchTerm, users, roleFilter, gradeFilter, statusFilter]);

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
      setDeleteLoading(uid);
      try {
          await userService.deleteUser(uid);
          toast.success('Đã xóa người dùng');
      } catch (error) {
          toast.error('Lỗi khi xóa người dùng');
      } finally {
          setDeleteLoading(null);
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

  return (
    <div className="flex flex-col gap-6">
        {/* Actions Bar */}
        <div className="flex flex-col gap-4">
             {/* Search and Add */}
             <div className="bg-card p-4 rounded-xl border border-border shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between w-full">
                <div className="relative w-full md:max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="text-muted-foreground w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 border-input rounded-lg text-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Search by name, email..."
                        value={searchTerm}
                        onChange={e => {
                          const value = e.target.value;
                          setSearchTerm(value);
                          const nextParams = new URLSearchParams(searchParams);
                          if (value.trim()) {
                            nextParams.set('q', value);
                          } else {
                            nextParams.delete('q');
                          }
                          setSearchParams(nextParams, { replace: true });
                        }}
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    {/* Migration Tool */}
                    <button
                        onClick={handleRunMigration}
                        disabled={migrationLoading}
                        className="flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-muted-foreground px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                        title="Fix missing joinedAt data"
                    >
                         <Database className="w-5 h-5" />
                         {migrationLoading ? '...' : 'Fix Data'}
                    </button>

                    <button
                        onClick={() => setIsAddMode(!isAddMode)}
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-primary/20 whitespace-nowrap flex-1 md:flex-none"
                    >
                        <Plus className="w-5 h-5" />
                        Thêm người dùng
                    </button>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
                 <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-fit">
                    <Filter className="w-4 h-4" />
                    <span>Lọc theo:</span>
                 </div>
                 <div className="flex flex-wrap gap-2 w-full">
                    <select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value as any)}
                        className="text-sm border border-input rounded-lg px-3 py-2 bg-background text-foreground outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">Tất cả vai trò</option>
                        <option value="admin">Admin</option>
                        <option value="teacher">Giáo viên</option>
                        <option value="student">Học sinh</option>
                    </select>

                    <select
                        value={gradeFilter}
                        onChange={(e) => setGradeFilter(e.target.value)}
                        className="text-sm border border-input rounded-lg px-3 py-2 bg-background text-foreground outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">Tất cả khối</option>
                        <option value="10">Khối 10</option>
                        <option value="11">Khối 11</option>
                        <option value="12">Khối 12</option>
                    </select>

                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value as any)}
                        className="text-sm border border-input rounded-lg px-3 py-2 bg-background text-foreground outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">Tất cả trạng thái</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                 </div>
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

      {/* Desktop Table View */}
      <div className="hidden md:block bg-card rounded-xl border border-border shadow-sm overflow-hidden">
        {isFetching ? (
          <div className="p-6 space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : (
        <>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 border-b border-border text-xs uppercase text-muted-foreground font-semibold tracking-wider">
                <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded border-input text-primary w-4 h-4" /></th>
                <th className="px-6 py-4">Người dùng</th>
                <th className="px-6 py-4">Vai trò</th>
                <th className="px-6 py-4">Tham gia</th>
                <th className="px-6 py-4">Đăng nhập cuối</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredUsers.map(u => (
                <tr key={u.uid} className="group hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded border-input text-primary w-4 h-4" /></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={u.photoURL} alt="" className="h-10 w-10 rounded-full bg-muted object-cover" />
                      <div>
                        <div className="font-medium text-foreground">{u.displayName || u.email.split('@')[0]}</div>
                        <div className="text-sm text-muted-foreground">{u.email}</div>
                         {u.grade && <div className="text-xs text-muted-foreground/80">Khối {u.grade}</div>}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                      ${u.role === 'admin' ? 'bg-primary/10 text-primary border border-primary/20' :
                        u.role === 'teacher' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'}`}>
                      {u.role === 'teacher' ? 'Giáo viên' : u.role === 'student' ? 'Học sinh' : 'Admin'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {formatDate(u.joinedAt)}
                  </td>
                   <td className="px-6 py-4 text-sm text-muted-foreground">
                    {formatLastActive(u)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${u.isWhitelisted ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                      <span className="text-sm text-muted-foreground">{u.isWhitelisted ? 'Active' : 'Inactive'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => handleEdit(u)} className="text-muted-foreground hover:text-primary p-1"><Edit2 className="w-5 h-5" /></button>
                      <button onClick={() => handleDelete(u.uid)} className="text-muted-foreground hover:text-destructive p-1"><Trash2 className="w-5 h-5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                  <tr><td colSpan={7} className="p-8 text-center text-muted-foreground">
                     <div className="flex flex-col items-center justify-center gap-2">
                        <span>Không tìm thấy người dùng nào.</span>
                        {/* Suggest migration if list is empty but might have data */}
                        <button onClick={handleRunMigration} className="text-primary text-xs hover:underline">
                            Thử đồng bộ dữ liệu cũ?
                        </button>
                     </div>
                  </td></tr>
              )}
            </tbody>
          </table>

          {/* Pagination Footer (Static for now) */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-card">
              <div className="text-sm text-muted-foreground">
                  Hiển thị <span className="font-medium text-foreground">1-{filteredUsers.length}</span> trên <span className="font-medium text-foreground">{filteredUsers.length}</span> kết quả
              </div>
              <div className="flex gap-2">
                  <button disabled className="px-3 py-1 text-sm rounded border border-input text-muted-foreground hover:bg-muted disabled:opacity-50">Trước</button>
                  <button disabled className="px-3 py-1 text-sm rounded border border-input text-muted-foreground hover:bg-muted disabled:opacity-50">Sau</button>
              </div>
          </div>
        </>
        )}
      </div>

      {/* Mobile Card List View */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {isFetching ? (
          <div className="bg-card p-4 rounded-xl border border-border shadow-sm space-y-3">
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-2/3" />
          </div>
        ) : (
          filteredUsers.map(u => (
              <div key={u.uid} className="bg-card p-4 rounded-xl border border-border shadow-sm flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                          <img src={u.photoURL} className="h-12 w-12 rounded-full bg-muted object-cover" />
                          <div>
                              <h3 className="font-medium text-foreground">{u.displayName || u.email.split('@')[0]}</h3>
                              <p className="text-sm text-muted-foreground">{u.email}</p>
                              {u.grade && <span className="text-xs text-muted-foreground/80">Khối {u.grade}</span>}
                          </div>
                      </div>
                      <button onClick={() => handleEdit(u)} className="text-muted-foreground">
                          <MoreVertical className="w-5 h-5" />
                      </button>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-border mt-1">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                          ${u.role === 'admin' ? 'bg-primary/10 text-primary' :
                          u.role === 'teacher' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'}`}>
                          {u.role === 'teacher' ? 'Giáo viên' : u.role === 'student' ? 'Học sinh' : 'Admin'}
                      </span>
                      <div className="flex items-center gap-2">
                           <div className="flex items-center gap-1.5 text-xs text-muted-foreground mr-2">
                                {u.lastDevice === 'PC' && <Monitor className="w-3.5 h-3.5" />}
                                {(u.lastDevice === 'iOS' || u.lastDevice === 'Android') && <Smartphone className="w-3.5 h-3.5" />}
                                <span>{u.lastDevice}</span>
                            </div>
                          <div className={`h-2 w-2 rounded-full ${u.isWhitelisted ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                      </div>
                  </div>
              </div>
          ))
        )}
      </div>

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

                    <div className="flex items-center gap-2 pt-2">
                        <input
                            type="checkbox"
                            id="isWhitelisted"
                            {...register('isWhitelisted')}
                            className="w-4 h-4 text-primary rounded focus:ring-primary"
                        />
                        <label htmlFor="isWhitelisted" className="text-sm font-medium text-muted-foreground">Active Account (Whitelisted)</label>
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
