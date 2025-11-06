import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  // 1. Lấy hàm signOut từ hook useAuth()
  const { user, signOut } = useAuth();

  // 2. Tạo hàm xử lý đăng xuất mới để thêm xử lý lỗi
  const handleSignOut = async () => {
    try {
      // Gọi hàm đăng xuất bất đồng bộ (giả định)
      await signOut(); 
      // Có thể thêm thông báo thành công ở đây nếu cần,
      // nhưng thường thì việc chuyển hướng sẽ diễn ra tự động.
    } catch (error) {
      // Xử lý lỗi: Log lỗi ra console và thông báo cho người dùng
      console.error("Lỗi khi đăng xuất:", error);
      alert("Đăng xuất thất bại. Vui lòng thử lại.");
      // Tùy chọn: Có thể sử dụng thư viện thông báo (toast/snackbar) thay cho alert
    }
  };

  return (
    <header className="glass rounded-2xl mb-8 p-6 shadow-xl animate-slideIn">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={user?.photoURL}
            alt="Avatar"
            className="w-14 h-14 rounded-2xl mr-4 border-4 border-white shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-bold gradient-text">{title}</h1>
            <p className="text-sm text-slate-500 font-medium">{user?.email}</p>
          </div>
        </div>
        {/* 3. Thay đổi onClick để gọi hàm xử lý mới */}
        <button
          onClick={handleSignOut} // <-- Đã thay đổi
          className="btn-primary px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Đăng xuất
        </button>
      </div>
    </header>
  );
};