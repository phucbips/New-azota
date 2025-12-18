import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { userService } from '../../services/user.service';
import { GraduationCap, CheckCircle } from 'lucide-react';

export const GradeOnboardingModal: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  // If user is not loaded or already has a grade, do not show
  if (!user || user.grade) return null;

  // Only show for students
  if (user.role !== 'student') return null;

  const handleSelectGrade = async (grade: string) => {
    setLoading(true);
    try {
      await userService.updateUser(user.uid, { grade });
      // The auth context should update automatically via snapshot listener,
      // effectively closing the modal
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

        <div className="grid grid-cols-1 gap-3">
          {['10', '11', '12'].map((grade) => (
            <button
              key={grade}
              disabled={loading}
              onClick={() => handleSelectGrade(grade)}
              className="group relative flex items-center justify-between p-4 rounded-xl border-2 border-slate-100 hover:border-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              <span className="font-bold text-slate-700 group-hover:text-blue-700">
                Khối {grade}
              </span>
              <div className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-blue-600">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>

        {loading && (
             <p className="mt-4 text-sm text-slate-400">Đang cập nhật hồ sơ...</p>
        )}
      </div>
    </div>
  );
};
