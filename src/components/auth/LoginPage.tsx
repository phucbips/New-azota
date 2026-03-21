import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Modal } from '../shared/Modal';
import { School, Loader2 } from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(!location.pathname.includes('/register'));

  React.useEffect(() => {
      setIsLogin(!location.pathname.includes('/register'));
  }, [location.pathname]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalState, setModalState] = useState({ isOpen: false, title: '', message: '' });

  const showModal = (message: string, title = 'Thông báo') => {
    setModalState({ isOpen: true, title, message });
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
    } catch (error: any) {
      showModal(error.message, 'Lỗi Đăng nhập');
    } finally {
        setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
        if (isLogin) {
            await signInWithEmail(email, password);
        } else {
            await signUpWithEmail(email, password);
        }
    } catch (error: any) {
      showModal(error.message, isLogin ? 'Lỗi Đăng nhập' : 'Lỗi Đăng ký');
    } finally {
        setLoading(false);
    }
  };

  const toggleMode = (e: React.MouseEvent) => {
      e.preventDefault();
      if (isLogin) {
          navigate('/register');
          setIsLogin(false);
      } else {
          navigate('/login');
          setIsLogin(true);
      }
      setModalState({ ...modalState, isOpen: false }); // Clear any errors
  };

  return (
    <div className="bg-background text-foreground font-sans flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-[420px] bg-card rounded-xl shadow-xl border border-border relative overflow-hidden">
        {/* Top colored bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary/80 to-primary absolute top-0 left-0"></div>

        <div className="p-8 sm:p-10 flex flex-col gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 ring-4 ring-primary/5">
              <School className="text-primary w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
                {isLogin ? 'Chào mừng trở lại' : 'Tạo tài khoản mới'}
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
                {isLogin ? 'Đăng nhập vào hệ thống quản lý học tập' : 'Đăng ký để bắt đầu học tập'}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="flex items-center justify-center w-full gap-3 h-12 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground font-medium rounded-lg transition-all duration-200 focus:ring-2 focus:ring-offset-1 focus:ring-ring outline-none disabled:opacity-70"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.2 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              <span>{loading ? 'Đang xử lý...' : 'Tiếp tục với Google'}</span>
            </button>

            <div className="relative flex items-center w-full">
              <div className="flex-grow border-t border-border"></div>
              <span className="flex-shrink-0 mx-3 text-muted-foreground text-xs font-semibold uppercase tracking-wider">Hoặc</span>
              <div className="flex-grow border-t border-border"></div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground" htmlFor="email">Email</label>
                  <input
                    className="w-full rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 h-11 px-4 shadow-sm transition-all outline-none"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-foreground" htmlFor="password">Mật khẩu</label>
                    {isLogin && (
                        <a className="text-xs sm:text-sm text-primary hover:text-primary/90 font-medium transition-colors cursor-pointer">
                            Quên mật khẩu?
                        </a>
                    )}
                  </div>
                  <input
                    className="w-full rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 h-11 px-4 shadow-sm transition-all outline-none"
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 focus:ring-2 focus:ring-offset-2 focus:ring-ring flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {isLogin ? 'Đăng nhập' : 'Đăng ký'}
              </button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {isLogin ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
              <a
                onClick={toggleMode}
                className="text-primary hover:text-primary/90 font-semibold transition-colors cursor-pointer"
              >
                {isLogin ? "Tạo tài khoản" : "Đăng nhập ngay"}
              </a>
            </p>
          </div>
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
