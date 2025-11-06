import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { userService } from '../../services/user.service';
import { User } from '../../types';
import { LoadingSpinner } from '../shared/Loading';
import { Modal } from '../shared/Modal';

export const WhitelistManagement: React.FC = () => {
  const [students, setStudents] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [modalState, setModalState] = useState({ isOpen: false, title: '', message: '' });

  useEffect(() => {
    const unsubscribe = userService.subscribeToWhitelistedStudents(
      (data) => {
        setStudents(data);
        setLoading(false);
      },
      (error) => {
        console.error('Error loading whitelisted students:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const showModal = (message: string, title = 'Thông báo') => {
    setModalState({ isOpen: true, title, message });
  };

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    try {
      await userService.whitelistStudent(email.trim());
      showModal(`Đã kích hoạt tài khoản cho ${email}!`);
      setEmail('');
    } catch (error: any) {
      showModal(error.message, 'Lỗi');
    }
  };

  const handleRemoveStudent = async (uid: string) => {
    try {
      await userService.removeFromWhitelist(uid);
      showModal('Đã gỡ kích hoạt tài khoản.');
    } catch (error: any) {
      showModal(`Lỗi: ${error.message}`, 'Lỗi');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <form
          onSubmit={handleAddStudent}
          className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-100"
        >
          <h3 className="text-xl font-bold mb-6 text-green-700">
            Thêm Học sinh vào Danh sách
          </h3>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Học sinh
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl"
              placeholder="hocsinh@gmail.com"
              required
            />
            <p className="text-xs text-slate-500 mt-1">
              Học sinh phải đăng nhập ít nhất 1 lần để được tìm thấy.
            </p>
          </div>
          <button
            type="submit"
            className="btn-primary w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Kích hoạt Tài khoản
          </button>
        </form>
      </div>

      <div className="lg:col-span-2">
        <h3 className="text-xl font-bold mb-6 text-slate-800">
          Danh sách Học sinh đã Kích hoạt
        </h3>
        <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-2">
          {loading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner />
            </div>
          ) : students.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 text-slate-300">👥</div>
              <p className="text-slate-500 font-medium">
                Chưa có học sinh nào được kích hoạt
              </p>
            </div>
          ) : (
            students.map((student) => (
              <div
                key={student.uid}
                className="card-hover bg-white p-5 rounded-2xl border-2 border-slate-100 shadow-md"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center flex-1">
                    <img
                      src={
                        student.photoURL ||
                        'https://ui-avatars.com/api/?name=User&background=667eea&color=fff'
                      }
                      alt="Avatar"
                      className="w-12 h-12 rounded-xl mr-4 border-2 border-slate-200"
                    />
                    <div className="truncate">
                      <p className="font-bold text-slate-800 truncate">
                        {student.displayName}
                      </p>
                      <p className="text-sm text-slate-500 truncate">{student.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveStudent(student.uid)}
                    className="flex items-center gap-2 px-5 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 font-semibold transition-all flex-shrink-0 ml-4"
                  >
                    <X className="w-4 h-4" />
                    Xóa
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Modal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        title={modalState.title}
        message={modalState.message}
      />
    </div>
  );
};
