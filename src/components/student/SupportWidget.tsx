import React, { useState, useEffect, useRef } from 'react';
import { Phone, X, MessageSquare, Facebook } from 'lucide-react';
import { cn } from '../../lib/utils';

export const SupportWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Support Panel (Popover) */}
      <div
        ref={panelRef}
        className={cn(
            "bg-white rounded-xl shadow-xl w-80 overflow-hidden transition-all duration-300 origin-bottom-right",
            isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        )}
      >
        <div className="bg-blue-600 px-4 py-3 flex justify-between items-center text-white">
            <h3 className="font-bold text-sm">Hỗ trợ trực tuyến</h3>
            <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
                <X className="w-4 h-4" />
            </button>
        </div>

        <div className="p-4 flex flex-col gap-3">
            <a
                href="https://www.facebook.com/calisthenictop1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-colors group"
            >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    {/* Replaced custom SVG with Lucide Facebook icon */}
                    <Facebook className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-slate-800 text-sm group-hover:text-blue-700">Facebook</span>
                    <span className="text-xs text-slate-500">Nhắn tin qua Facebook</span>
                </div>
            </a>

            <a
                href="https://zalo.me/0705526967"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-colors group"
            >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-slate-800 text-sm group-hover:text-blue-700">Zalo</span>
                    <span className="text-xs text-slate-500">Chat Zalo (0705526967)</span>
                </div>
            </a>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
            "w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200",
            isOpen && "rotate-45 bg-red-500 hover:bg-red-600"
        )}
      >
        {isOpen ? (
            <X className="w-6 h-6" />
        ) : (
            <div className="relative">
                <MessageSquare className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-blue-600"></span>
            </div>
        )}
      </button>
    </div>
  );
};
