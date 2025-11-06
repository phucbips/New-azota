import React from 'react';
import { Info } from 'lucide-react';

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
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="modal-content glass p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
            <Info className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600">{message}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Đã hiểu
          </button>
        </div>
      </div>
    </div>
  );
};
