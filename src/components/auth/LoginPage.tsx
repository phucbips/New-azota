import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Modal } from '../shared/Modal';

export const LoginPage: React.FC = () => {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalState, setModalState] = useState({ isOpen: false, title: '', message: '' });

  const currentDomain = window.location.hostname;

  const showModal = (message: string, title = 'Thông báo') => {
    setModalState({ isOpen: true, title, message });
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error: any) {
      showModal(error.message, 'Lỗi');
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
    } catch (error: any) {
      showModal(error.message, 'Lỗi');
    }
  };

  const handleEmailRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUpWithEmail(email, password);
    } catch (error: any) {
      showModal(error.message, 'Lỗi');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 animate-fadeIn">
      <div className="glass p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 animate-float">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-2">Chào mừng!</h1>
          <p className="text-slate-600">Đăng nhập để tiếp tục học tập</p>
        </div>

        {/* Domain Warning - hidden by default */}
        <div
          id="domain-warning"
          className="hidden bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 text-sm"
        >
          <p className="font-bold">Lỗi Đăng nhập Google?</p>
          <p className="mb-2">
            Nếu bạn đang gặp lỗi "auth/unauthorized-domain", hãy thực hiện các bước sau:
          </p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Truy cập Firebase Console (Authentication - Settings - Authorized domains).</li>
            <li>Nhấn Add domain.</li>
            <li>
              Sao chép và dán tên miền này:{' '}
              <code className="font-mono text-xs bg-red-200 p-1 rounded-md mt-1 break-all">
                {currentDomain}
              </code>
            </li>
            <li>Lưu lại và thử đăng nhập lại.</li>
          </ol>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-slate-200">
          <nav className="flex space-x-1">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-3 px-4 font-semibold transition-all ${
                activeTab === 'login'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Đăng nhập
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-3 px-4 font-semibold transition-all ${
                activeTab === 'register'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Đăng ký
            </button>
          </nav>
        </div>

        {/* Login Form */}
        {activeTab === 'login' && (
          <form onSubmit={handleEmailLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Mật khẩu
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl transition-all"
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Đăng nhập
            </button>
          </form>
        )}

        {/* Register Form */}
        {activeTab === 'register' && (
          <form onSubmit={handleEmailRegister} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Mật khẩu
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Ít nhất 6 ký tự"
                className="input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl transition-all"
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Đăng ký
            </button>
          </form>
        )}

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="flex-1 border-t border-slate-200"></div>
          <span className="px-4 text-sm text-slate-500 font-medium">hoặc</span>
          <div className="flex-1 border-t border-slate-200"></div>
        </div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center px-4 py-4 bg-white border-2 border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <img
            className="w-6 h-6 mr-3"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google"
          />
          <span className="text-base font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
            Tiếp tục với Google
          </span>
        </button>
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
