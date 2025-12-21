import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Facebook, Phone } from 'lucide-react';

export const StudentSupportWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4">
      {/* Popover */}
      {isOpen && (
        <div className="w-72 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 flex justify-between items-center text-white">
            <h3 className="font-bold text-sm">Hỗ trợ học viên</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 flex flex-col gap-3">
            <a
              href="https://www.facebook.com/calisthenictop1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer group relative z-50"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-800 text-sm group-hover:text-blue-700">Facebook</span>
                <span className="text-xs text-slate-500">Nhắn tin Fanpage</span>
              </div>
            </a>

            <a
              href="https://zalo.me/0705526967"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer group relative z-50"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-800 text-sm group-hover:text-blue-700">Zalo</span>
                <span className="text-xs text-slate-500">Chat hỗ trợ ngay</span>
              </div>
            </a>
          </div>

          <div className="bg-slate-50 px-4 py-2 text-center border-t border-slate-100">
             <p className="text-[10px] text-slate-400">Hoạt động: 8:00 - 22:00 hàng ngày</p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer relative z-[1000] hover:scale-105 active:scale-95 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};
