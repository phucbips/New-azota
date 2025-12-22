import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, Loader2, Lock, Copy } from 'lucide-react';
import { SaaSButton } from '../ui/SaaSButton';
import { cn } from '../../lib/utils';

interface SecureExamVerifyProps {
  embedLink: string;
  examPassword: string;
}

export function SecureExamVerify({ embedLink, examPassword }: SecureExamVerifyProps) {
  const [status, setStatus] = useState<'LOCKED' | 'VERIFYING' | 'UNLOCKED'>('LOCKED');

  // Reset to LOCKED when embedLink changes (user switches assignment)
  useEffect(() => {
    setStatus('LOCKED');
  }, [embedLink]);

  const handleVerify = () => {
    setStatus('VERIFYING');

    // Simulate API delay
    setTimeout(() => {
      setStatus('UNLOCKED');
      // Auto-copy password to clipboard
      navigator.clipboard.writeText(examPassword).catch((err) => {
        console.error('Failed to copy password:', err);
      });
    }, 1500);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-[280px] bg-white z-20 flex flex-col items-center justify-center border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="flex flex-col items-center text-center space-y-4 max-w-md px-4">

        {/* LOCKED STATE */}
        {status === 'LOCKED' && (
          <>
            <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-2">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              Hệ thống bảo mật lớp VIP
            </h3>
            <p className="text-slate-500 text-sm mb-4">
              Vui lòng xác minh thiết bị để hiển thị mật khẩu làm bài.
            </p>
            <SaaSButton
              onClick={handleVerify}
              size="lg"
              className="w-full sm:w-auto font-semibold shadow-lg shadow-blue-200/50"
            >
              <Lock className="mr-2 h-4 w-4" />
              XÁC MINH DANH TÍNH ĐỂ LẤY MẬT KHẨU
            </SaaSButton>
          </>
        )}

        {/* VERIFYING STATE */}
        {status === 'VERIFYING' && (
          <>
            <Loader2 className="h-12 w-12 text-blue-600 animate-spin mb-2" />
            <h3 className="text-lg font-medium text-slate-700">
              Đang kiểm tra thiết bị...
            </h3>
            <p className="text-slate-400 text-sm">
              Vui lòng không tắt trình duyệt.
            </p>
          </>
        )}

        {/* UNLOCKED STATE */}
        {status === 'UNLOCKED' && (
          <>
            <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center mb-2 animate-in zoom-in duration-300">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>

            <div className="flex flex-col items-center space-y-2 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="text-green-600 font-medium flex items-center gap-2">
                ✅ Xác minh thành công!
              </span>

              <div className="relative group cursor-pointer" onClick={() => navigator.clipboard.writeText(examPassword)}>
                <div className="bg-slate-100 px-6 py-3 rounded-xl border border-slate-200 flex items-center gap-3 hover:bg-slate-200 transition-colors">
                  <span className="text-3xl font-mono font-bold text-slate-800 tracking-wider">
                    {examPassword}
                  </span>
                  <Copy className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-green-600 font-medium opacity-100 transition-opacity">
                  Đã copy mật khẩu
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
