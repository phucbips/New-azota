import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, ArrowRight, Star, Clock } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';

export const StudentHome: React.FC = () => {
  const { user } = useAuth();

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Chào buổi sáng';
    if (hour < 18) return 'Chào buổi chiều';
    return 'Chào buổi tối';
  };

  return (
    <div className="flex flex-col gap-8 pb-32 min-h-[100dvh]">
      {/* Welcome Section */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {greeting()}, {user?.displayName}! 👋
        </h1>
        <p className="text-slate-500">
            Hôm nay bạn muốn học gì?
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <BookOpen className="w-24 h-24" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                <div className="p-2 bg-white/20 rounded-lg w-fit backdrop-blur-sm">
                    <BookOpen className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-blue-100 text-sm font-medium mb-1">Bài tập cần làm</p>
                    <h3 className="text-3xl font-bold">12</h3>
                </div>
            </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <Trophy className="w-24 h-24 text-yellow-500" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                <div className="p-2 bg-yellow-50 rounded-lg w-fit">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                    <p className="text-slate-500 text-sm font-medium mb-1">Điểm trung bình</p>
                    <h3 className="text-3xl font-bold text-slate-900">8.5</h3>
                </div>
            </div>
        </div>
      </div>

      {/* Main Action - Mobile Optimized */}
      <div className="mt-4 relative z-50 w-full">
         <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-lg font-bold text-slate-900">Truy cập nhanh</h2>
         </div>

         <Link
            to="/student/assignments"
            className="block w-full cursor-pointer group"
         >
            <div className="bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/50 border border-slate-100 active:scale-95 transition-all duration-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                                Vào làm bài tập
                            </h3>
                            <p className="text-slate-500 text-sm">Xem danh sách bài tập của bạn</p>
                        </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
         </Link>
      </div>

      {/* Recent Activity / Recommendations */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold text-slate-900 px-1">Hoạt động gần đây</h2>
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <div className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                    <Star className="w-5 h-5" />
                 </div>
                 <div>
                    <p className="text-sm font-semibold text-slate-900">Hoàn thành bài tập Toán</p>
                    <p className="text-xs text-slate-500 mt-0.5">Bạn đạt 9.5 điểm</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-slate-400">
                        <Clock className="w-3 h-3" />
                        <span>2 giờ trước</span>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};
