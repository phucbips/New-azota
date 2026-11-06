import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Modal } from '../shared/Modal';
import { GraduationCap, Loader2, ArrowLeft } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const LoginPage: React.FC = () => {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail, resetPassword } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(!location.pathname.includes('/register'));
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  React.useEffect(() => {
    setIsLogin(!location.pathname.includes('/register'));
    setIsForgotPassword(false);
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
      if (isForgotPassword) {
        await resetPassword(email);
        showModal(
          `Liên kết đặt lại mật khẩu đã được gửi tới ${email}. Vui lòng kiểm tra hộp thư đến hoặc thư rác (Spam).`,
          'Đã gửi email khôi phục'
        );
        setIsForgotPassword(false);
      } else if (isLogin) {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password);
      }
    } catch (error: any) {
      showModal(
        error.message,
        isForgotPassword ? 'Lỗi khôi phục mật khẩu' : isLogin ? 'Lỗi Đăng nhập' : 'Lỗi Đăng ký'
      );
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsForgotPassword(false);
    if (isLogin) {
      navigate('/register');
      setIsLogin(false);
    } else {
      navigate('/login');
      setIsLogin(true);
    }
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 p-4 text-foreground">
      <Link to="/" className="mb-6 flex items-center gap-2 text-sm font-semibold text-foreground">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <GraduationCap className="h-4 w-4" />
        </div>
        <span>EduPlatform</span>
      </Link>

      <div className="w-full max-w-[380px] rounded-xl border border-border bg-card p-6 sm:p-7">
        <div className="mb-6 text-center">
          <h1 className="text-lg font-semibold tracking-tight text-foreground">
            {isForgotPassword
              ? 'Khôi phục mật khẩu'
              : isLogin
                ? 'Chào mừng trở lại'
                : 'Tạo tài khoản mới'}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {isForgotPassword
              ? 'Nhập email đăng ký để nhận liên kết đặt lại mật khẩu'
              : isLogin
                ? 'Đăng nhập vào hệ thống quản lý học tập'
                : 'Đăng ký để bắt đầu học tập'}
          </p>
        </div>

        {isForgotPassword ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground" htmlFor="reset-email">
                Email
              </label>
              <Input
                id="reset-email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>

            <Button type="submit" disabled={loading} className="mt-1 h-10 w-full">
              {loading && <Loader2 className="animate-spin" />}
              Gửi liên kết đặt lại mật khẩu
            </Button>

            <button
              type="button"
              onClick={() => setIsForgotPassword(false)}
              className="mt-1 inline-flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Quay lại đăng nhập
            </button>
          </form>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="h-10 w-full"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.2 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>{loading ? 'Đang xử lý...' : 'Tiếp tục với Google'}</span>
              </Button>

              <div className="relative flex w-full items-center py-1">
                <div className="flex-grow border-t border-border" />
                <span className="mx-3 flex-shrink-0 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Hoặc
                </span>
                <div className="flex-grow border-t border-border" />
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground" htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-foreground" htmlFor="password">
                      Mật khẩu
                    </label>
                    {isLogin && (
                      <button
                        type="button"
                        onClick={() => setIsForgotPassword(true)}
                        className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        Quên mật khẩu?
                      </button>
                    )}
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" disabled={loading} className="mt-1 h-10 w-full">
                  {loading && <Loader2 className="animate-spin" />}
                  {isLogin ? 'Đăng nhập' : 'Đăng ký'}
                </Button>
              </form>
            </div>

            <p className="mt-5 text-center text-xs text-muted-foreground">
              {isLogin ? 'Chưa có tài khoản? ' : 'Đã có tài khoản? '}
              <a
                onClick={toggleMode}
                className="cursor-pointer font-medium text-foreground underline-offset-4 hover:underline"
              >
                {isLogin ? 'Tạo tài khoản' : 'Đăng nhập ngay'}
              </a>
            </p>
          </>
        )}
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
