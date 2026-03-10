import React, { useState, useMemo } from 'react';
import { Users, BookOpen, Star, UserPlus } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const StatsTab: React.FC = () => {
  const [period, setPeriod] = useState<"7d" | "30d" | "90d" | "all">("30d");

  // Mock data for educational platform stats
  const stats = {
    totalStudents: 1250,
    newStudentsThisMonth: 120,
    totalCourses: 45,
    avgRating: 4.8
  };

  const userChartData = [
    { date: "01/10", count: 12 },
    { date: "02/10", count: 19 },
    { date: "03/10", count: 15 },
    { date: "04/10", count: 25 },
    { date: "05/10", count: 22 },
    { date: "06/10", count: 30 },
    { date: "07/10", count: 28 },
  ];

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">

      <div className="flex gap-2 mb-4">
        {["7d", "30d", "90d", "all"].map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p as any)}
            className={`rounded-full px-4 py-1.5 text-sm font-bold transition-all ${
              period === p
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {p === "7d" ? "7 ngày" : p === "30d" ? "30 ngày" : p === "90d" ? "90 ngày" : "Tất cả"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                 <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
          </div>
          <h3 className="text-3xl font-extrabold text-foreground">{stats.totalStudents}</h3>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mt-1">Tổng học viên</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                 <UserPlus className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-full">+12%</span>
          </div>
          <h3 className="text-3xl font-extrabold text-foreground">{stats.newStudentsThisMonth}</h3>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mt-1">Học viên mới</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                 <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
          </div>
          <h3 className="text-3xl font-extrabold text-foreground">{stats.totalCourses}</h3>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mt-1">Khóa học active</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-yellow-500/10 rounded-xl">
                 <Star className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
          </div>
          <h3 className="text-3xl font-extrabold text-foreground">{stats.avgRating} / 5.0</h3>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mt-1">Đánh giá trung bình</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-display text-xl font-bold mb-6">Tăng trưởng học viên</h3>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={userChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    />
                    <Tooltip
                        contentStyle={{ borderRadius: '12px', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))' }}
                        cursor={{ fill: 'hsl(var(--muted))' }}
                    />
                    <Bar
                        dataKey="count"
                        fill="hsl(var(--primary))"
                        radius={[4, 4, 0, 0]}
                        maxBarSize={40}
                    />
                  </BarChart>
                </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
             <h3 className="font-display text-xl font-bold mb-6">Khóa học nổi bật</h3>
             <div className="space-y-4">
                 {[1, 2, 3].map((i) => (
                     <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                         <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary">
                             #{i}
                         </div>
                         <div className="flex-1">
                             <h4 className="font-bold text-foreground">ReactJS Thực Chiến</h4>
                             <p className="text-sm text-muted-foreground">340 học viên • 4.9 sao</p>
                         </div>
                         <div className="font-bold text-emerald-600">
                             24.5M ₫
                         </div>
                     </div>
                 ))}
             </div>
          </div>
      </div>
    </div>
  );
};
