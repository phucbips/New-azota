import React, { useEffect, useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { AnalyticsStatCard } from '../../components/analytics/AnalyticsStatCard';
import { AnalyticsChart } from '../../components/analytics/AnalyticsChart';
import { AnalyticsTabs } from '../../components/analytics/AnalyticsTabs';
import { analyticsService } from '../../services/analytics.service';
import { userService } from '../../services/user.service';
import { enrollmentService } from '../../services/enrollment.service';
import { courseService } from '../../services/course.service';
import { reviewService } from '../../services/review.service';
import { Enrollment, Course, CourseReview } from '../../types';
import { useTranslation } from 'react-i18next';
import { Calendar, MoreHorizontal, Layout, CheckSquare, Square, DollarSign, Users, CreditCard, TrendingUp, Loader2 } from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar
} from "recharts";
import { useDashboardConfig } from '../../contexts/DashboardConfigContext';
import { cn } from '../../lib/utils';
import * as Popover from '@radix-ui/react-popover';

export const AdminOverview: React.FC = () => {
  const { t } = useTranslation();
  const { widgets, toggleWidget } = useDashboardConfig();

  const [trafficData, setTrafficData] = useState<{ date: string; visitors: number; page_views: number }[]>([]);
  const [aggStats, setAggStats] = useState<any>({ os: {}, browsers: {}, devices: {}, total_visits: 0, total_page_views: 0 });
  const [totalUsers, setTotalUsers] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loadingTop, setLoadingTop] = useState(true);
  const [feedbacks, setFeedbacks] = useState<CourseReview[]>([]);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState(true);
  const [ratingFilter, setRatingFilter] = useState<number>(0);

  const [activeMetric, setActiveMetric] = useState<'visitors' | 'page_views'>('visitors');

  useEffect(() => {
    const unsubscribeTraffic = analyticsService.subscribeToDailyTraffic(7, (data) => {
        setTrafficData(data);
    });

    const unsubscribeAgg = analyticsService.subscribeToAggregates((data) => {
        setAggStats(data);
    });

    const unsubscribeUsers = userService.subscribeToAllUsers((users) => setTotalUsers(users.length));
    const unsubscribeOnline = userService.subscribeToOnlineUsers((count) => setOnlineUsers(count));
    const unsubscribeEnrollments = enrollmentService.subscribeToAllEnrollments((data) => setEnrollments(data));
    const unsubscribeCourses = courseService.subscribeToAllCourses((data) => {
        setCourses(data);
        setLoadingTop(false);
    });
    const unsubscribeReviews = reviewService.subscribeToAllReviews((data) => {
        setFeedbacks(data);
        setLoadingFeedbacks(false);
    });

    return () => {
        unsubscribeTraffic();
        unsubscribeAgg();
        unsubscribeUsers();
        unsubscribeOnline();
        unsubscribeEnrollments();
        unsubscribeCourses();
        unsubscribeReviews();
    };
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const revenueStats = {
    total: enrollments.filter(e => e.status === 'paid').reduce((sum, e) => sum + e.amount, 0),
    pending: enrollments.filter(e => e.status === 'pending').reduce((sum, e) => sum + e.amount, 0),
    totalEnrollments: enrollments.length,
    paidEnrollments: enrollments.filter(e => e.status === 'paid').length,
    pendingEnrollments: enrollments.filter(e => e.status === 'pending').length,
  };

  const revenueChartData = React.useMemo(() => {
    const paid = enrollments.filter(e => e.status === 'paid');
    const map: Record<string, { revenue: number, timestamp: number }> = {};
    paid.forEach(e => {
      const date = e.createdAt.toDate();
      const day = date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
      // Use start of day for accurate sorting
      const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

      if (!map[day]) {
          map[day] = { revenue: 0, timestamp: startOfDay };
      }
      map[day].revenue += e.amount;
    });

    return Object.entries(map)
      .sort((a, b) => a[1].timestamp - b[1].timestamp)
      .map(([date, data]) => ({ date, revenue: data.revenue }));
  }, [enrollments]);

  // Top Courses Calculation (Equivalent to Supabase RPC 'get_top_cookies')
  const { topCoursesMonth, topCoursesAll } = React.useMemo(() => {
    const paidEnrollments = enrollments.filter(e => e.status === 'paid');
    const now = new Date();

    // Calculate for all time
    const allTimeCounts: Record<string, number> = {};
    paidEnrollments.forEach(e => {
        allTimeCounts[e.courseId] = (allTimeCounts[e.courseId] || 0) + 1;
    });

    // Calculate for this month
    const thisMonthCounts: Record<string, number> = {};
    paidEnrollments.forEach(e => {
        const date = e.createdAt.toDate();
        if (date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()) {
            thisMonthCounts[e.courseId] = (thisMonthCounts[e.courseId] || 0) + 1;
        }
    });

    const formatTop = (counts: Record<string, number>) => {
        return Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([courseId, total_sold]) => {
                const course = courses.find(c => c.id === courseId);
                return {
                    course_name: course ? course.title : 'Khóa học đã xóa',
                    total_sold
                };
            });
    };

    return {
        topCoursesAll: formatTop(allTimeCounts),
        topCoursesMonth: formatTop(thisMonthCounts)
    };
  }, [enrollments, courses]);

  const visitorsCount = trafficData.reduce((acc, curr) => acc + (curr.visitors || 0), 0);
  const pageViewsCount = trafficData.reduce((acc, curr) => acc + (curr.page_views || 0), 0);

  const calculateTrend = (metric: 'visitors' | 'page_views') => {
      if (trafficData.length < 2) return 0;
      const today = trafficData[trafficData.length - 1][metric] || 0;
      const yesterday = trafficData[trafficData.length - 2][metric] || 0;
      if (yesterday === 0) return 100;
      return Math.round(((today - yesterday) / yesterday) * 100);
  };

  const visitorsTrend = calculateTrend('visitors');
  const pageViewsTrend = calculateTrend('page_views');

  const toArray = (map: Record<string, number>) => Object.entries(map || {}).map(([name, value]) => ({ name, value }));

  const chartData = trafficData.map(item => ({
      date: item.date,
      visitors: activeMetric === 'visitors' ? item.visitors : item.page_views,
  }));

  const isVisible = (id: string) => widgets.find(w => w.id === id)?.visible;

  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">{t('analytics.title')}</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <span>azota.vercel.app</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
                <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-500 font-medium">{onlineUsers} {t('analytics.online')}</span>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center px-3 py-1.5 bg-card border border-border rounded-md text-sm font-medium text-foreground shadow-sm">
                Production
            </div>

            {/* Dashboard Config Popover */}
            <Popover.Root>
                <Popover.Trigger asChild>
                    <button className="p-2 bg-card border border-border hover:bg-accent rounded-md transition-colors text-muted-foreground hover:text-foreground flex items-center gap-2">
                        <Layout className="w-5 h-5" />
                        <span className="hidden sm:inline text-sm font-medium">Customize</span>
                    </button>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content className="z-50 min-w-[200px] bg-popover rounded-md border border-border shadow-md p-3 animate-in fade-in zoom-in-95 duration-200" sideOffset={5}>
                        <h4 className="font-medium text-sm text-foreground mb-2">Visible Widgets</h4>
                        <div className="space-y-1">
                            {widgets.map(widget => (
                                <button
                                    key={widget.id}
                                    onClick={() => toggleWidget(widget.id)}
                                    className="flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded-sm hover:bg-muted transition-colors text-left"
                                >
                                    {widget.visible ?
                                        <CheckSquare className="w-4 h-4 text-primary" /> :
                                        <Square className="w-4 h-4 text-muted-foreground" />
                                    }
                                    <span className={widget.visible ? "text-foreground" : "text-muted-foreground"}>{widget.label}</span>
                                </button>
                            ))}
                        </div>
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
      </div>

      {/* Financial Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold text-muted-foreground">Tổng doanh thu</span>
            </div>
            <p className="font-display text-2xl font-extrabold text-primary">{formatPrice(revenueStats.total)}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="h-5 w-5 text-yellow-600" />
              <span className="text-xs font-semibold text-muted-foreground">Chờ thanh toán</span>
            </div>
            <p className="font-display text-2xl font-extrabold text-yellow-600">{formatPrice(revenueStats.pending)}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="text-xs font-semibold text-muted-foreground">Lượt đăng ký</span>
            </div>
            <p className="font-display text-2xl font-extrabold text-blue-500">{revenueStats.totalEnrollments}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
             <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Đã thanh toán</span>
                <span className="font-semibold">{revenueStats.paidEnrollments}/{revenueStats.totalEnrollments}</span>
             </div>
             <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all"
                  style={{ width: `${revenueStats.totalEnrollments ? (revenueStats.paidEnrollments / revenueStats.totalEnrollments) * 100 : 0}%` }}
                />
             </div>
          </div>
      </div>

      {/* Top Products Section (Nova Cookie Style) */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 font-display text-lg font-bold text-foreground">🏆 Top khóa học bán chạy</h3>
        {loadingTop ? (
          <div className="flex justify-center py-8"><Loader2 className="h-5 w-5 animate-spin text-primary" /></div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {/* This month */}
            <div>
              <p className="mb-3 text-sm font-semibold text-muted-foreground">📅 Tháng này</p>
              {topCoursesMonth.length > 0 ? (
                <div className={`grid gap-3 ${topCoursesMonth.length === 1 ? "grid-cols-1 max-w-xs" : topCoursesMonth.length === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {topCoursesMonth.map((c, i) => {
                    const medals = ["🥇", "🥈", "🥉"];
                    return (
                      <div key={c.course_name + i} className="flex items-center gap-3 rounded-xl border border-border bg-background p-3 hover:border-primary/50 transition-colors shadow-sm">
                        <span className="text-xl">{medals[i]}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-foreground truncate" title={c.course_name}>{c.course_name}</p>
                          <p className="text-xs text-muted-foreground">
                            {c.total_sold} lượt đăng ký
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Chưa có dữ liệu tháng này</p>
              )}
            </div>

            {/* All time */}
            <div>
              <p className="mb-3 text-sm font-semibold text-muted-foreground">📊 Toàn thời gian</p>
              {topCoursesAll.length > 0 ? (
                <div className={`grid gap-3 ${topCoursesAll.length === 1 ? "grid-cols-1 max-w-xs" : topCoursesAll.length === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {topCoursesAll.map((c, i) => {
                    const medals = ["🥇", "🥈", "🥉"];
                    return (
                      <div key={c.course_name + i} className="flex items-center gap-3 rounded-xl border border-border bg-background p-3 hover:border-primary/50 transition-colors shadow-sm">
                        <span className="text-xl">{medals[i]}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-foreground truncate" title={c.course_name}>{c.course_name}</p>
                          <p className="text-xs text-muted-foreground">
                            {c.total_sold} lượt đăng ký
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Chưa có dữ liệu</p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-4 font-display text-lg font-bold text-foreground">📈 Doanh thu theo ngày</h3>
          {revenueChartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(v: number) => formatPrice(v)} cursor={{ fill: 'hsl(var(--muted))' }} contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))' }} />
                <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Doanh thu" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-[250px] items-center justify-center">
              <p className="text-sm text-muted-foreground">Chưa có dữ liệu doanh thu</p>
            </div>
          )}
        </div>

        {/* Existing Traffic Chart (moved here to balance grid) */}
        {isVisible('traffic_chart') && (
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
               <h3 className="mb-4 font-display text-lg font-bold text-foreground">📊 Lưu lượng truy cập</h3>
               <div className="h-[250px]">
                  <AnalyticsChart data={chartData} />
               </div>
            </div>
        )}
      </div>

      {/* Customer Ratings - CH Play style */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 font-display text-lg font-bold text-foreground">⭐ Đánh giá khách hàng</h3>
        {loadingFeedbacks ? (
          <div className="flex justify-center py-8"><Loader2 className="h-5 w-5 animate-spin text-primary" /></div>
        ) : feedbacks.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground py-8">Chưa có đánh giá nào</p>
        ) : (() => {
          const avgRating = feedbacks.reduce((s, f) => s + f.rating, 0) / feedbacks.length;
          const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
            star,
            count: feedbacks.filter((f) => f.rating === star).length,
          }));
          const filteredFeedbacks = ratingFilter === 0
            ? feedbacks
            : feedbacks.filter((f) => f.rating === ratingFilter);

          return (
            <div className="space-y-6">
              {/* Summary */}
              <div className="flex gap-6 items-start">
                <div className="text-center">
                  <p className="font-display text-5xl font-extrabold text-foreground">{avgRating.toFixed(1)}</p>
                  <div className="mt-1 flex justify-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className={`text-lg ${star <= Math.round(avgRating) ? "text-primary" : "text-muted-foreground/30"}`}>★</span>
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{feedbacks.length} đánh giá</p>
                </div>
                <div className="flex-1 space-y-1.5">
                  {ratingCounts.map(({ star, count }) => {
                    const pct = feedbacks.length ? Math.round((count / feedbacks.length) * 100) : 0;
                    return (
                      <div key={star} className="flex items-center gap-2 text-sm">
                        <span className="w-4 text-right font-semibold text-foreground">{star}</span>
                        <span className="text-primary">★</span>
                        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="w-8 text-right text-xs text-muted-foreground">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Filter tabs */}
              <div className="flex gap-2 flex-wrap">
                {[{ label: "Tất cả", value: 0 }, ...([5, 4, 3, 2, 1].map((s) => ({ label: `${s} ★`, value: s })))].map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setRatingFilter(f.value)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      ratingFilter === f.value
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {f.label}
                    {f.value > 0 && (
                      <span className="ml-1 opacity-70">({ratingCounts.find((r) => r.star === f.value)?.count || 0})</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Reviews list */}
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {filteredFeedbacks.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground py-4">Không có đánh giá {ratingFilter} sao</p>
                ) : (
                  filteredFeedbacks.map((f) => (
                    <div key={f.id} className="rounded-xl border border-border bg-background p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                            {(f.studentName || "?").charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{f.studentName || "Ẩn danh"}</p>
                            <p className="text-[10px] text-muted-foreground">
                              {f.createdAt.toDate().toLocaleDateString("vi-VN")} · Khóa học: {courses.find(c => c.id === f.courseId)?.title || "Đã xóa"}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className={`text-sm ${star <= f.rating ? "text-primary" : "text-muted-foreground/30"}`}>★</span>
                          ))}
                        </div>
                      </div>
                      {f.comment && (
                        <p className="text-sm text-foreground leading-relaxed mt-2">{f.comment}</p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })()}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isVisible('visitors') && (
            <div onClick={() => setActiveMetric('visitors')} className="cursor-pointer transition-transform hover:scale-[1.01]">
                <AnalyticsStatCard
                    label={t('analytics.visitors')}
                    value={visitorsCount}
                    trend={visitorsTrend}
                    className={activeMetric === 'visitors' ? "border-t-2 border-t-primary shadow-md" : ""}
                />
            </div>
        )}
        {isVisible('page_views') && (
            <div onClick={() => setActiveMetric('page_views')} className="cursor-pointer transition-transform hover:scale-[1.01]">
                <AnalyticsStatCard
                    label={t('analytics.page_views')}
                    value={pageViewsCount}
                    trend={pageViewsTrend}
                    className={activeMetric === 'page_views' ? "border-t-2 border-t-primary shadow-md" : ""}
                />
            </div>
        )}
        {isVisible('total_users') && (
            <div>
                <AnalyticsStatCard
                    label={t('admin.total_users')}
                    value={totalUsers}
                />
            </div>
        )}
      </div>

      {isVisible('device_stats') && (
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
             <h3 className="mb-4 font-display text-lg font-bold text-foreground">📱 Thiết bị và Trình duyệt</h3>
             <div className="h-[400px]">
                <AnalyticsTabs
                    osData={toArray(aggStats.os)}
                    deviceData={toArray(aggStats.devices)}
                    browserData={toArray(aggStats.browsers)}
                    totalVisits={aggStats.total_visits}
                />
             </div>
          </div>
      )}
    </div>
  );
};
