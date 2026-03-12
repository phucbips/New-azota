import React, { useState, useMemo, useEffect } from 'react';
import { Users, BookOpen, Star, UserPlus } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { userService } from '../../services/user.service';
import { courseService } from '../../services/course.service';
import { orderService } from '../../services/order.service';

export const StatsTab: React.FC = () => {
  const [period, setPeriod] = useState<"7d" | "30d" | "90d" | "all">("30d");
  const [users, setUsers] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const unsubUsers = userService.subscribeToAllUsers(data => setUsers(data));
    const unsubCourses = courseService.subscribeToCourses(data => setCourses(data));
    const unsubOrders = orderService.subscribeToOrders(data => setOrders(data));

    return () => {
        unsubUsers();
        unsubCourses();
        unsubOrders();
    };
  }, []);

  const timeFilteredUsers = useMemo(() => {
      if (period === "all") return users;
      const days = period === "7d" ? 7 : period === "30d" ? 30 : 90;
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);
      return users.filter(u => {
          if (!u.joinedAt) return false;
          const d = u.joinedAt.toDate ? u.joinedAt.toDate() : new Date(u.joinedAt);
          return d >= cutoff;
      });
  }, [users, period]);

  const userChartData = useMemo(() => {
      const map: Record<string, number> = {};
      timeFilteredUsers.forEach(u => {
          const d = u.joinedAt?.toDate ? u.joinedAt.toDate() : new Date();
          const day = d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" });
          map[day] = (map[day] || 0) + 1;
      });
      return Object.entries(map).reverse().map(([date, count]) => ({ date, count }));
  }, [timeFilteredUsers]);

  const topCourses = useMemo(() => {
      const paidOrders = orders.filter(o => o.status === 'paid');
      const counts: Record<string, { title: string, revenue: number, students: number }> = {};
      paidOrders.forEach(o => {
          if (!counts[o.courseId]) counts[o.courseId] = { title: o.courseTitle, revenue: 0, students: 0 };
          counts[o.courseId].revenue += o.amount;
          counts[o.courseId].students += 1;
      });
      return Object.values(counts).sort((a, b) => b.revenue - a.revenue).slice(0, 5);
  }, [orders]);

  const stats = {
      totalStudents: users.filter(u => u.role === 'student').length,
      newStudentsThisMonth: timeFilteredUsers.filter(u => u.role === 'student').length,
      totalCourses: courses.filter(c => c.isActive).length,
      avgRating: 4.8 // Fixed rating until Review feature is fully ported
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(price);
  };

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
             <h3 className="font-display text-xl font-bold mb-6">Khóa học có doanh thu cao</h3>
             <div className="space-y-4">
                 {topCourses.length === 0 ? (
                     <div className="text-center text-sm text-muted-foreground py-8">Chưa có dữ liệu</div>
                 ) : topCourses.map((c, i) => (
                     <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                         <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary">
                             #{i + 1}
                         </div>
                         <div className="flex-1 min-w-0">
                             <h4 className="font-bold text-foreground truncate">{c.title}</h4>
                             <p className="text-sm text-muted-foreground">{c.students} học viên</p>
                         </div>
                         <div className="font-bold text-emerald-600 whitespace-nowrap">
                             {formatPrice(c.revenue)}
                         </div>
                     </div>
                 ))}
             </div>
          </div>
      </div>
    </div>
  );
};
