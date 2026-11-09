import React from 'react';
import { Info } from 'lucide-react';
import { Button } from '../ui/button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = 'Thông báo',
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 p-4 backdrop-blur-[2px] animate-fade-in">
      <div className="modal-content w-full max-w-md rounded-xl border border-border bg-popover p-6 shadow-lg animate-zoom-in">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Info className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{message}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>Đã hiểu</Button>
        </div>
      </div>
    </div>
  );
};
