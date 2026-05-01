import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Facebook, Phone } from 'lucide-react';
import { Card } from '../ui/card';

export const StudentSupportWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div ref={containerRef} className="fixed bottom-[24px] right-[24px] z-[999] flex flex-col items-end gap-[16px]">
      {/* Popover */}
      {isOpen && (
        <Card className="w-[300px] shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200 p-0 border-border">
          <div className="bg-surface px-[20px] py-[16px] flex justify-between items-center border-b border-border">
            <h3 className="font-bold font-display text-[16px] text-foreground">Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-muted-foreground hover:bg-accent rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-[20px] flex flex-col gap-[12px]">
            <a
              href="https://www.facebook.com/calisthenictop1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-[16px] p-[12px] rounded-[8px] border border-border hover:bg-accent hover:-translate-y-[1px] transition-all cursor-pointer group"
            >
              <div className="w-[40px] h-[40px] rounded-[6px] bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Facebook className="w-[20px] h-[20px] text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-[14px]">Facebook</span>
                <span className="text-[12px] text-muted-foreground">Message Fanpage</span>
              </div>
            </a>

            <a
              href="https://zalo.me/0705526967"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-[16px] p-[12px] rounded-[8px] border border-border hover:bg-accent hover:-translate-y-[1px] transition-all cursor-pointer group"
            >
              <div className="w-[40px] h-[40px] rounded-[6px] bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Phone className="w-[20px] h-[20px] text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-[14px]">Zalo</span>
                <span className="text-[12px] text-muted-foreground">Chat support</span>
              </div>
            </a>
          </div>

          <div className="bg-muted/20 px-[20px] py-[12px] text-center border-t border-border">
             <p className="text-[11px] text-muted-foreground uppercase tracking-wide">Hours: 8:00 - 22:00 Daily</p>
          </div>
        </Card>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-[56px] h-[56px] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:-translate-y-[2px] ${
          isOpen ? 'bg-foreground text-background rotate-90' : 'bg-primary text-white hover:bg-primary-hover hover:shadow-btn-hover'
        }`}
      >
        {isOpen ? <X className="w-[24px] h-[24px]" /> : <MessageCircle className="w-[24px] h-[24px]" />}
      </button>
    </div>
  );
};
