import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { userService } from '../../services/user.service';
import { User, UserRole } from '../../types';
import { Trash2, UserPlus, Check, X, Loader2, Edit2 } from 'lucide-react';
import { toast } from 'sonner';

type CreateUserForm = {
  email: string;
  role: UserRole;
  grade?: string;
};

export const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { register, handleSubmit, watch, reset, setValue } = useForm<CreateUserForm>({
      defaultValues: { role: 'student', grade: '10' }
  });
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);

  // Edit Mode State
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const selectedRole = watch('role');

  useEffect(() => {
    const unsubscribe = userService.subscribeToAllUsers((fetchedUsers) => {
      setUsers(fetchedUsers);
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

  const teachers = users.filter(u => u.role === 'teacher');
  const students = users.filter(u => u.role === 'student');

  return (
    <div className="space-y-8">
      {/* Form tạo user */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-blue-600" />
            Mời người dùng mới
        </h3>
        <p className="text-slate-500 mb-4 text-sm">
            Nhập email của người dùng. Họ sẽ được tự động cấp quyền khi đăng nhập bằng Google hoặc Email này.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label className="block text-sm font-medium mb-1 text-slate-700">Email</label>
            <input
              {...register('email', { required: 'Vui lòng nhập email' })}
              type="email"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="nguyenvana@gmail.com"
            />
          </div>

          <div className="w-full md:w-40">
            <label className="block text-sm font-medium mb-1 text-slate-700">Vai trò</label>
            <select
              {...register('role')}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="student">Học sinh</option>
              <option value="teacher">Giáo viên</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {selectedRole === 'student' && (
            <div className="w-full md:w-40 animate-fadeIn">
              <label className="block text-sm font-medium mb-1 text-slate-700">Khối</label>
              <select
                {...register('grade')}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
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
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserPlus className="w-4 h-4" />}
            {loading ? 'Đang thêm...' : 'Thêm'}
          </button>
        </form>
      </div>

      {/* Danh sách Giáo viên */}
      <div>
        <h3 className="text-lg font-bold mb-3 text-slate-800">Danh sách Giáo viên ({teachers.length})</h3>
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 font-semibold text-slate-600">Email</th>
                <th className="p-4 font-semibold text-slate-600">Ngày tham gia</th>
                <th className="p-4 font-semibold text-slate-600 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map(teacher => (
                <tr key={teacher.uid} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="p-4">
                      <div className="font-medium text-slate-900">{teacher.displayName || teacher.email}</div>
                      <div className="text-sm text-slate-500">{teacher.email}</div>
                  </td>
                  <td className="p-4 text-slate-500">
                    {teacher.joinedAt?.toDate().toLocaleDateString('vi-VN')}
                  </td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button
                        onClick={() => handleEdit(teacher)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Sửa"
                    >
                        <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => handleDelete(teacher.uid)}
                        disabled={deleteLoading === teacher.uid}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                        title="Xóa"
                    >
                        {deleteLoading === teacher.uid ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                    </button>
                  </td>
                </tr>
              ))}
              {teachers.length === 0 && (
                <tr>
                    <td colSpan={3} className="p-8 text-center text-slate-500">Chưa có giáo viên nào</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Danh sách Học sinh */}
      <div>
        <h3 className="text-lg font-bold mb-3 text-slate-800">Danh sách Học sinh ({students.length})</h3>
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 font-semibold text-slate-600">Email</th>
                <th className="p-4 font-semibold text-slate-600">Khối</th>
                <th className="p-4 font-semibold text-slate-600">Ngày tham gia</th>
                <th className="p-4 font-semibold text-slate-600 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.uid} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="p-4">
                      <div className="font-medium text-slate-900">{student.displayName || student.email}</div>
                      <div className="text-sm text-slate-500">{student.email}</div>
                  </td>
                  <td className="p-4 text-slate-500">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-bold">
                        {student.grade ? `Khối ${student.grade}` : 'Chưa xếp lớp'}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500">
                    {student.joinedAt?.toDate().toLocaleDateString('vi-VN')}
                  </td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button
                        onClick={() => handleEdit(student)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Sửa"
                    >
                        <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => handleDelete(student.uid)}
                        disabled={deleteLoading === student.uid}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                        title="Xóa"
                    >
                        {deleteLoading === student.uid ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                    </button>
                  </td>
                </tr>
              ))}
               {students.length === 0 && (
                <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-500">Chưa có học sinh nào</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
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
            toast.success('Đã cập nhật thông tin người dùng');
            onUpdate();
        } catch (error) {
            toast.error('Lỗi khi cập nhật');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-2xl">
                <h3 className="text-xl font-bold mb-4">Chỉnh sửa người dùng</h3>
                <p className="text-sm text-slate-500 mb-4">{user.email}</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700">Vai trò</label>
                        <select
                            {...register('role')}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option value="student">Học sinh</option>
                            <option value="teacher">Giáo viên</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {selectedRole === 'student' && (
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-700">Khối</label>
                            <select
                                {...register('grade')}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <option value="10">Khối 10</option>
                                <option value="11">Khối 11</option>
                                <option value="12">Khối 12</option>
                            </select>
                        </div>
                    )}

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="isWhitelisted"
                            {...register('isWhitelisted')}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="isWhitelisted" className="text-sm font-medium text-slate-700">Đã kích hoạt (Whitelisted)</label>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
