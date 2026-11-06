import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/button';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const { user, signOut } = useAuth();

  // Đăng xuất có xử lý lỗi
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error);
      alert("Đăng xuất thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <header className="mb-6 flex items-center justify-between rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-3">
        <img
          src={user?.photoURL}
          alt="Avatar"
          className="h-10 w-10 rounded-full border border-border bg-muted object-cover"
        />
        <div>
          <h1 className="text-base font-semibold text-foreground">{title}</h1>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </div>
      </div>
      <Button variant="outline" onClick={handleSignOut}>
        <LogOut />
        Đăng xuất
      </Button>
    </header>
  );
};
