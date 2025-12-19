import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { userService } from '../../services/user.service';
import { GraduationCap, CheckCircle, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export const GradeOnboardingModal: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  // If user is not loaded or already has a grade, do not show
  if (!user || user.grade) return null;

  // Only show for students
  if (user.role !== 'student') return null;

  const handleConfirm = async () => {
    if (!selectedGrade) return;
    setLoading(true);
    try {
      await userService.updateUser(user.uid, { grade: selectedGrade });
    } catch (error) {
      console.error("Failed to update grade", error);
      alert("Failed to update grade. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <GraduationCap className="w-8 h-8 text-blue-600" />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-2">Chào mừng bạn!</h2>
        <p className="text-slate-500 mb-8">
          Vui lòng chọn khối lớp của bạn để bắt đầu.
        </p>

        <div className="grid grid-cols-1 gap-3 mb-8">
          {['10', '11', '12'].map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={cn(
                "group relative flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200",
                selectedGrade === grade
                  ? "border-blue-600 bg-blue-50 ring-2 ring-blue-600/20"
                  : "border-slate-100 hover:border-blue-600 hover:bg-slate-50"
              )}
            >
              <span className={cn(
                  "font-bold text-lg",
                  selectedGrade === grade ? "text-blue-700" : "text-slate-700"
              )}>
                Khối {grade}
              </span>
              <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                  selectedGrade === grade ? "border-blue-600 bg-blue-600" : "border-slate-200"
              )}>
                  {selectedGrade === grade && <CheckCircle className="w-4 h-4 text-white" />}
              </div>
            </button>
          ))}
        </div>

        <button
            onClick={handleConfirm}
            disabled={!selectedGrade || loading}
            className="w-full h-12 rounded-xl bg-blue-600 text-white font-bold text-base shadow-md shadow-blue-500/20 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
        >
            {loading ? 'Đang lưu...' : 'Xác nhận'}
            {!loading && <ChevronRight className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};
