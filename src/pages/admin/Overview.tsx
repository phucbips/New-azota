import React, { useEffect, useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { AnalyticsStatCard } from '../../components/analytics/AnalyticsStatCard';
import { AnalyticsChart } from '../../components/analytics/AnalyticsChart';
import { AnalyticsWidget } from '../../components/charts/AnalyticsWidget';
import { analyticsService } from '../../services/analytics.service';
import { userService } from '../../services/user.service';
import { assignmentService } from '../../services/assignment.service';
import { useTranslation } from 'react-i18next';
import { Calendar, MoreHorizontal } from 'lucide-react';

export const AdminOverview: React.FC = () => {
  const { t } = useTranslation();
  const [trafficData, setTrafficData] = useState<{ date: string; visitors: number; page_views: number }[]>([]);
  const [aggStats, setAggStats] = useState<any>({ os: {}, browsers: {}, devices: {}, total_visits: 0, total_page_views: 0 });
  const [totalUsers, setTotalUsers] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState(0); // Realtime online users

  // Interactive State
  const [activeMetric, setActiveMetric] = useState<'visitors' | 'page_views'>('visitors');

  useEffect(() => {
    // Real-time Listeners
    const unsubscribeTraffic = analyticsService.subscribeToDailyTraffic(7, (data) => {
        setTrafficData(data);
    });

    const unsubscribeAgg = analyticsService.subscribeToAggregates((data) => {
        setAggStats(data);
    });

    const unsubscribeUsers = userService.subscribeToAllUsers((users) => setTotalUsers(users.length));

    // Online Users Listener
    const unsubscribeOnline = userService.subscribeToOnlineUsers((count) => setOnlineUsers(count));

    return () => {
        unsubscribeTraffic();
        unsubscribeAgg();
        unsubscribeUsers();
        unsubscribeOnline();
    };
  }, []);

  // Calculate trends
  const visitorsCount = trafficData.reduce((acc, curr) => acc + (curr.visitors || 0), 0);
  const pageViewsCount = trafficData.reduce((acc, curr) => acc + (curr.page_views || 0), 0);

  // Simple trend calculation (compare last day vs average of prev 6 days as a mock trend, or 0 if not enough data)
  // In a real app, you'd fetch "previous period" data.
  // Here we mock the logic: if we have > 1 day, compare last day with day before.
  const calculateTrend = (metric: 'visitors' | 'page_views') => {
      if (trafficData.length < 2) return 0;
      const today = trafficData[trafficData.length - 1][metric] || 0;
      const yesterday = trafficData[trafficData.length - 2][metric] || 0;
      if (yesterday === 0) return 100; // Growth from 0
      return Math.round(((today - yesterday) / yesterday) * 100);
  };

  const visitorsTrend = calculateTrend('visitors');
  const pageViewsTrend = calculateTrend('page_views');

  const toArray = (map: Record<string, number>) => Object.entries(map || {}).map(([name, value]) => ({ name, value }));

  // Prepare chart data based on selection
  const chartData = trafficData.map(item => ({
      date: item.date,
      visitors: activeMetric === 'visitors' ? item.visitors : item.page_views,
      // Pass both keys but chart will use 'visitors' as the key prop dynamically
  }));

  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Web Analytics</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <span>azota.vercel.app</span>
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-500 font-medium">{onlineUsers} online</span>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center px-3 py-1.5 bg-card border border-border rounded-md text-sm font-medium text-foreground shadow-sm">
                Production
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-md text-sm font-medium text-foreground shadow-sm cursor-pointer hover:bg-accent/50 transition-colors">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>Last 7 Days</span>
            </div>
            <button className="p-1.5 hover:bg-accent rounded-md transition-colors text-muted-foreground">
                <MoreHorizontal className="w-5 h-5" />
            </button>
        </div>
      </div>

      {/* Top Cards Row - Clickable */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div onClick={() => setActiveMetric('visitors')} className="cursor-pointer transition-transform hover:scale-[1.01]">
            <AnalyticsStatCard
                label="Visitors"
                value={visitorsCount}
                trend={visitorsTrend}
                className={activeMetric === 'visitors' ? "border-t-2 border-t-foreground shadow-md" : ""}
            />
        </div>
        <div onClick={() => setActiveMetric('page_views')} className="cursor-pointer transition-transform hover:scale-[1.01]">
            <AnalyticsStatCard
                label="Page Views"
                value={pageViewsCount}
                trend={pageViewsTrend}
                className={activeMetric === 'page_views' ? "border-t-2 border-t-foreground shadow-md" : ""}
            />
        </div>
        <div>
            {/* Non-clickable stat */}
            <AnalyticsStatCard
                label="Total Users"
                value={totalUsers}
            />
        </div>
      </div>

      {/* Main Chart */}
      <div className="w-full">
         {/* We reuse AnalyticsChart but logic inside needs to handle the dynamic key or we map 'visitors' prop to current metric */}
         <AnalyticsChart data={chartData} />
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnalyticsWidget
            title="Operating Systems"
            data={toArray(aggStats.os)}
            total={aggStats.total_visits}
          />
          <AnalyticsWidget
            title="Devices"
            data={toArray(aggStats.devices)}
            total={aggStats.total_visits}
          />
          <AnalyticsWidget
            title="Browsers"
            data={toArray(aggStats.browsers)}
            total={aggStats.total_visits}
          />
      </div>
    </div>
  );
};
